import Link from "next/link";

const Product = () => {
	return (
		<div className="relative group border-slate-200 border min-w-[300px] md:min-w-fit rounded-sm">
			<div className="relative">
				<img
					src="/vercel.svg"
					alt=""
					className="w-full aspect-square md:aspect-portrait object-cover rounded-sm bg-teal-100"
				/>

				<Link
					href="/"
					className="hidden group-hover:block absolute bottom-4 text-center bg-teal-800 text-teal-300 left-1/2 -translate-x-1/2 p-2 w-[80%] rounded-sm uppercase text-sm tracking-wider font-medium"
				>
					auf Ebay ansehen
				</Link>
			</div>

			<div className="text-center p-4 bg-white">
				<h3 className="text-medium font-medium">Product title</h3>
				<small className=" text-green-400 flex items-center justify-center">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						className="w-4 h-4 mr-1"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
						/>
					</svg>
					in Stock
				</small>
				<p className="mt-2">€ 123,00</p>
			</div>
		</div>
	);
};

export default Product;
