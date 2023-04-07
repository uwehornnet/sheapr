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

export default function CategorySlugPage() {
	const [list, setList] = useState([]);
	const [staticProducts, setStaticProducts] = useState([]);
	const [offset, setOffset] = useState(25);
	const { query } = useRouter();
	const { slug } = query;
	const meta = categories.find((c) => c.slug === slug);

	const { loading: staticDataLoading, products: staticData } = useStaticData({ meta });
	const { loading, products } = useProducts({ meta, offset });

	useEffect(() => {
		if (meta) {
			setList(
				categories
					.filter((c) => c.slug !== meta.slug)
					.sort((a, b) => 0.5 - Math.random())
					.slice(0, 3)
			);

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
								<BannerGrid direction="left" items={list} />
							</>
						) : null}

						<div className="relative mt-4">
							<p>{`${products?.items.length} von ${products?.total} Produkte`}</p>
						</div>
						{products.items ? <ProductGrid products={products.items} /> : null}

						<button
							onClick={() => {
								setOffset(25 + products.offset);
							}}
						>
							load more
						</button>
					</div>
					<div className=" px-4 md:px-6">
						<BannerGrid direction="left" items={list} />
					</div>

					<MostSearchedCollections />
				</main>
			) : (
				<ActivityIndicator />
			)}
		</div>
	);
}
