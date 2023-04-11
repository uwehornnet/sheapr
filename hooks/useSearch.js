import { useEffect, useState } from "react";
import { QUERY_VARS } from "../utils/QueryVars";

export const useSearch = ({ param, offset }) => {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);
	const [products, setProducts] = useState({
		offset: offset || 0,
		items: [],
	});

	const fetchProducts = async () => {
		try {
			if (loading) return;
			setLoading(true);

			const req = await fetch("/api/find", {
				headers: {
					Accept: "application/json",
					"Content-Type": "application/json",
				},
				method: "POST",
				body: JSON.stringify({
					query: param,
					offset,
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

			if (param == products.uid) {
				setProducts({
					offset,
					uid: param,
					total: res.res.total,
					items: [...products.items, ...mappedResponse],
				});
			} else {
				setProducts({
					offset,
					uid: param,
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
		if (param) {
			fetchProducts();
		}
	}, [param, offset]);

	return {
		loading,
		error,
		products,
	};
};
