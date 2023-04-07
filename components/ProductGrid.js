import Product from "../components/Product";

const ProductGrid = ({ products }) => {
	return (
		<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-4 mt-4">
			{products.map((product, index) => (
				<Product key={index} product={product} />
			))}
		</div>
	);
};

export default ProductGrid;
