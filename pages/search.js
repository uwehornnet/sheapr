import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import ActivityIndicator from "../components/ActivityIndicator";
import Product from "../components/Product";
import HeadMeta from "../components/HeadMeta";

import { QUERY_VARS } from "../utils/QueryVars";

export default function Search() {
	const [loading, setLoading] = useState(false);
	const [products, setProducts] = useState([]);

	const router = useRouter();
	const { param } = router.query;

	async function fetchProducts() {
		try {
			if (loading) return;
			setLoading(true);
			const req = await fetch("/api/hello", {
				headers: {
					Accept: "application/json",
					"Content-Type": "application/json",
				},
				method: "POST",
				body: JSON.stringify({ params: param }),
			});
			const res = await req.json();

			const mappedResponse = res.res.itemSummaries.map((product) => {
				let link = product.itemWebUrl.split("?")[0];
				return {
					...product,
					link: link + QUERY_VARS,
				};
			});

			setProducts(mappedResponse);
			setLoading(false);
		} catch (error) {
			console.log(error);
			setLoading(false);
		}
	}

	useEffect(() => {
		if (param) {
			fetchProducts();
		}
	}, [param]);

	return (
		<div className="bg-white w-full">
			<HeadMeta title="Search" description="Imprint - Terms of usage" />

			<div className=" px-4 md:px-8 pt-32">
				<span className="block m-0">Searching for</span>
				<h1 className="text-big font-semibold m-0">"{param}"</h1>
			</div>

			<main className="mx-auto py-16 px-4 md:px-8">
				{loading ? (
					<ActivityIndicator />
				) : (
					<div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mb-8">
						{products.length
							? products.map((product, index) => <Product product={product} key={index} />)
							: null}
					</div>
				)}
			</main>
		</div>
	);
}
