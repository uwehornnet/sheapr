import Product from "../components/Product";

const ProductGrid = ({ products }) => {
	return (
		<div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-4 mt-4">
			{products.map((product, index) => (
				<Product key={index} product={product} />
			))}
		</div>
	);
};

export default ProductGrid;
