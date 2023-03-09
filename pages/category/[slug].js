import Link from "next/link";
import HeadMeta from "../../components/HeadMeta";

import { categories } from "../../utils/Categories";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import { QUERY_VARS } from "../../utils/QueryVars";
import ActivityIndicator from "../../components/ActivityIndicator";
import Product from "../../components/Product";

export default function CategoryDetails() {
	const [highlightsLoading, setHighlightsLoading] = useState(false);
	const [productsLoading, setProductsLoading] = useState(false);
	const { query } = useRouter();
	const { slug } = query;
	const meta = categories.find((c) => c.slug === slug);

	const [products, setProducts] = useState([]);
	const [highlights, setHighlights] = useState([]);

	const fetchMostedWatched = async () => {
		try {
			if (highlightsLoading) return;
			setHighlightsLoading(true);
			const req = await fetch("/api/mostwatched", {
				headers: {
					Accept: "application/json",
					"Content-Type": "application/json",
				},
				method: "POST",
				body: JSON.stringify({ id: meta.id }),
			});

			const res = await req.json();
			const response = res.res.getMostWatchedItemsResponse.itemRecommendations.item.map((product) => {
				let link = product.viewItemURL.split("?")[0];
				return {
					title: product.title,
					image: product.imageURL,
					link: link + QUERY_VARS,
					price: product.buyItNowPrice.__value__,
				};
			});
			setHighlights(response);
			setHighlightsLoading(false);
		} catch (error) {
			console.log(error);
			setHighlightsLoading(false);
		}
	};

	const fetchProducts = async () => {
		try {
			if (productsLoading) return;
			setProductsLoading(true);
			const req = await fetch("/api/category", {
				headers: {
					Accept: "application/json",
					"Content-Type": "application/json",
				},
				method: "POST",
				body: JSON.stringify({
					id: meta.id,
					query: meta.query,
				}),
			});
			const res = await req.json();
			const mappedResponse = res.res[0].searchResult[0].item.map((product) => {
				let link = product.viewItemURL[0];

				return {
					title: product.title[0],
					image: product.galleryURL[0],
					link: link + QUERY_VARS,
					price: product.sellingStatus[0].currentPrice[0].__value__,
				};
			});
			setProducts(mappedResponse);
			setProductsLoading(false);
		} catch (error) {
			console.log(error);
			setProductsLoading(false);
		}
	};

	useEffect(() => {
		if (meta) {
			fetchProducts();
			fetchMostedWatched();
		}
	}, [slug]);

	return (
		<div className="bg-slate-50 w-full min-h-screen">
			<HeadMeta title={meta?.meta.title} description={meta?.meta.description} />

			<div className="w-full pt-24 py-16 px-4 md:px-6">
				<div className="flex overflow-scroll gap-4 no-scrollbar mb-8 mt-4">
					{categories.map((c, i) => (
						<Link href={`/category/${c.slug}`} key={i}>
							<div className="aspect-square bg-slate-200 rounded-md min-w-[200px] w-[200px] flex flex-col justify-end items-center p-4">
								<h3 className="uppercase font-medium text-sm text-center w-full">{c.name}</h3>
							</div>
						</Link>
					))}
				</div>
				<ul className="flex items-center gap-2 text-sm">
					<li>
						<Link href="/category">Alle Kategorien</Link>
					</li>
					<li>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth="1.5"
							stroke="currentColor"
							className="w-3 h-3"
						>
							<path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
						</svg>
					</li>
					<li>{meta?.name}</li>
				</ul>
				<h2 className="font-medium text-big">Trending</h2>
				<div className="relative flex items-center justify-between mb-4">
					{highlightsLoading ? (
						<ActivityIndicator />
					) : (
						<>
							{highlights.length ? (
								<div className="flex overflow-scroll gap-4 no-scrollbar">
									{highlights.map((product, index) => (
										<div key={index} className="min-w-[280px] w-[280px]">
											<Product product={product} />
										</div>
									))}
								</div>
							) : null}
						</>
					)}
				</div>
			</div>

			<div className="w-full py-16 px-4 md:px-6">
				<h2 className="font-medium text-big">Produkte</h2>
				{productsLoading ? (
					<ActivityIndicator />
				) : (
					<>
						{products.length ? (
							<div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mb-8">
								{products.map((product, index) => (
									<Product product={product} highlights={highlights} key={index} />
								))}
							</div>
						) : null}
					</>
				)}
			</div>
		</div>
	);
}
