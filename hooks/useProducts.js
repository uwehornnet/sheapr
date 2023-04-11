import { useEffect, useState } from "react";
import { QUERY_VARS } from "../utils/QueryVars";

export const useProducts = ({ meta, offset }) => {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);
	const [products, setProducts] = useState({
		offset,
		items: [],
		uid: null,
	});

	const fetchProducts = async () => {
		try {
			if (loading) return;
			setLoading(true);

			const req = await fetch("/api/category", {
				headers: {
					Accept: "application/json",
					"Content-Type": "application/json",
				},
				method: "POST",
				body: JSON.stringify({
					id: meta.id,
					query: meta.searchPhrase,
					offset,
					limit: 30,
				}),
			});
			const res = await req.json();
			const mappedResponse = res.res.itemSummaries.map((product) => {
				let link = product.itemWebUrl;

				return {
					title: product.title,
					image: product.image.imageUrl,
					link: link + QUERY_VARS,
					price: product.price.value,
					store: "ebay",
					shipping: product.shippingOptions[0].shippingCost.value,
				};
			});

			if (meta.slug == products.uid) {
				setProducts({
					offset,
					uid: meta.slug,
					total: res.res.total,
					items: [...products.items, ...mappedResponse],
				});
			} else {
				setProducts({
					offset,
					uid: meta.slug,
					total: res.res.total,
					items: [...mappedResponse],
				});
			}

			setLoading(false);
		} catch (error) {
			setError(error);
		}
	};

	useEffect(() => {
		if (meta) {
			fetchProducts();
		}
	}, [meta, offset]);

	return {
		loading,
		error,
		products,
	};
};
