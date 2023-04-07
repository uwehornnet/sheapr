import Product from "../components/Product";

const ProductSlider = ({ products }) => {
	return (
		<div className="flex justify-start gap-4 md:gap-4 mt-4 overflow-scroll no-scrollbar">
			{products.map((product, index) => (
				<div key={index} className=" max-w-[260px] min-w-[260px]">
					<Product product={product} />
				</div>
			))}
		</div>
	);
};

export default ProductSlider;
