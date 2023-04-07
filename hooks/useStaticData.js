import { useEffect, useState } from "react";

export const useStaticData = () => {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);
	const [products, setProducts] = useState([]);

	const fetchProducts = async () => {
		try {
			if (loading) return;
			setLoading(true);

			const req = await fetch("/api/staticdata");
			const res = await req.json();
			setProducts(
				res.res
					.map((pr) => {
						return {
							title: pr.name,
							image: pr.image,
							link: pr.link,
							price: parseFloat(pr.price).toFixed(2),
							store: pr.store !== "" ? pr.store : null,
							type: pr.type !== "" ? pr.type : null,
							category: pr.category,
						};
					})
					.sort(() => Math.random() - 0.5)
			);
			setLoading(false);
		} catch (error) {
			setError(error);
		}
	};

	useEffect(() => {
		fetchProducts();
	}, []);

	return {
		loading,
		error,
		products,
	};
};
