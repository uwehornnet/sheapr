import Product from "../components/Product";

const ProductSlider = ({ products }) => {
	return (
		<div className="flex justify-start xl:grid xl:grid-cols-5 gap-4 md:gap-4 mt-4 overflow-scroll no-scrollbar">
			{products.map((product, index) => (
				<Product key={index} product={product} />
			))}
		</div>
	);
};

export default ProductSlider;
