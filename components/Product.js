export default function Product({ product }) {
	return (
		<div className="col-span-1 flex md:flex-col rounded-xl bg-white items-center md:items-start hover:shadow-lg group relative md:p-4">
			<a
				href={product?.link}
				target="_blank"
				rel="noreferrer"
				className="relative w-full aspect-square flex items-center justify-center overflow-hidden product-button rounded-xl md:mb-4 mb-0 mr-4 md:mr-0 max-w-[100px] md:max-w-none"
			>
				<img
					src={product.image.replace("s-l140", "s-l600")}
					alt={product.title[0]}
					className="w-full aspect-square object-cover bg-slate-200 absolute inset-0 group-hover:scale-110 duration-300 transition-all ease-in-out"
				/>
			</a>

			<div className="flex-1 flex flex-col justify-between">
				<a href={product?.link} target="_blank" rel="noreferrer" className="product-button">
					<h3 className=" mb-4 text-sm md:text-base">{product?.title.substring(0, 40)} ...</h3>
				</a>
				<div className="hidden md:block">
					<p className="items-center gap-4 text-xs flex">
						<span className="inline-block w-2 h-2 rounded-full bg-lime-500"></span>
						<span>verfügbar</span>
					</p>
					{product.shippingOptions && product.shippingOptions.length ? (
						<p className="flex items-center gap-4 text-xs">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
								className="w-5 h-5"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
								/>
							</svg>
							<span>Versand {product?.price} EUR</span>
						</p>
					) : null}
				</div>

				<p className="font-medium text-xl mt-0 md:mt-4">{product?.price} EUR</p>
				<a
					href={product?.link}
					target="_blank"
					rel="noreferrer"
					className="rounded-lg product-button flex items-center justify-center gap-4 mt-4 px-6 py-3 bg-neon/0 group-hover:bg-neon text-slate-300 group-hover:text-white transition-all duration-300 ease-in-out text-sm md:text-base"
				>
					<span>auf Ebay ansehen</span>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={2}
						stroke="currentColor"
						className="w-4 h-4"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
						/>
					</svg>
				</a>
			</div>
		</div>
	);
}
