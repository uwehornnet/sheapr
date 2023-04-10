import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import Head from "next/head";

import { categories } from "../../utils/data/categories";
import { useStaticData } from "../../hooks/useStaticData";
import ProductSlider from "../../components/ProductSlider";
import MostSearchedCollections from "../../components/MostSearchedCollections";
import ProductGrid from "../../components/ProductGrid";
import BannerGrid from "../../components/BannerGrid";
import { useProducts } from "../../hooks/useProducts";
import ActivityIndicator from "../../components/ActivityIndicator";

export default function CategorySlugPage({ cat, offsetList }) {
	const [staticProducts, setStaticProducts] = useState([]);
	const [offset, setOffset] = useState(offsetList);
	const { query } = useRouter();
	const { slug } = query;
	const meta = categories.find((c) => c.slug === slug);

	const { products: staticData } = useStaticData({ meta });
	const { loading, products } = useProducts({ meta, offset });

	useEffect(() => {
		if (meta) {
			setStaticProducts(
				staticData.filter((p) => {
					return p.category == meta.slug;
				})
			);
		}
	}, [meta]);

	return (
		<div>
			<Head>
				<title>{meta?.meta.title}</title>
				<meta name="description" content={meta?.meta.description} />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			{meta ? (
				<main className="max-w-[1980px] mx-auto">
					<div className="py-2 px-4 md:px-6 relative">
						<div className="absolute inset-0 w-full h-full flex items-center justify-center">
							<h1 className="block text-center text-biggest text-white">{meta.name}</h1>
						</div>
						<img
							src={`/images/categories/${meta.slug}.jpg`}
							alt={`${meta.name} - Finde die besten Preise.`}
							className="mx-auto w-full aspect-banner object-cover rounded-md"
						/>
					</div>

					<div className="py-2 px-4 md:px-6">
						{staticProducts.length ? (
							<>
								<div className="relative">
									<h2 className="text-big">Bestseller</h2>
									<p>Top {staticProducts.length} handpicked Bestsellers</p>
								</div>
								<ProductSlider products={staticProducts} />
								<BannerGrid direction="left" items={cat.slice(0, 3)} />
							</>
						) : null}

						{products.items.length ? (
							<>
								<div className="relative mt-4">
									<p>{`${products?.items.length} von ${products?.total} Produkte`}</p>
								</div>
								<ProductGrid products={products.items} />
							</>
						) : null}

						{loading ? (
							<ActivityIndicator />
						) : (
							<div className="flex items-center justify-center my-8">
								<button
									className="inline-block py-3 px-16 text-center hover:bg-black uppercase text-sm rounded-full border-2 border-black text-black hover:text-white"
									onClick={() => {
										setOffset(25 + products.offset);
									}}
								>
									<span className="block font-medium tracking-wider">load more</span>
									<small>{`(${products?.total - products?.items.length} available)`}</small>
								</button>
							</div>
						)}
					</div>
					<div className=" px-4 md:px-6">
						<BannerGrid direction="right" items={cat.slice(-3)} />
					</div>

					<MostSearchedCollections />
				</main>
			) : (
				<ActivityIndicator />
			)}
		</div>
	);
}

export async function getStaticPaths() {
	return {
		paths: categories.map((c) => {
			return { params: { slug: c.slug } };
		}),
		fallback: false,
	};
}

export async function getStaticProps(context) {
	return {
		props: {
			offsetList: 0,
			cat: categories.sort((a, b) => 0.5 - Math.random()).slice(-6),
		},
	};
}
