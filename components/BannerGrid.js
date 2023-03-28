import Link from "next/link";

const classNames = {
	left: [
		"col-span-1 aspect-square sm:aspect-video md:aspect-auto sm:col-span-2  bg-teal-100 rounded-sm overflow-hidden",
		"col-span-1 aspect-square bg-teal-100 rounded-sm overflow-hidden",
		"col-span-1 aspect-square bg-teal-100 rounded-sm overflow-hidden",
	],
	right: [
		"col-span-1 aspect-square bg-teal-100 rounded-sm overflow-hidden",
		"col-span-1 aspect-square bg-teal-100 rounded-sm overflow-hidden",
		"col-span-1 aspect-square sm:aspect-video md:aspect-auto sm:col-span-2  bg-teal-100 rounded-sm overflow-hidden",
	],
};

const BannerGrid = ({ direction, items }) => {
	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 py-4 px-4 md:px-6">
			{items.map((item, index) => {
				return (
					<div key={index} className={classNames[direction][index]}>
						<Link href="/" className="block relative w-full h-full group">
							<img
								src="/vercel.svg"
								alt=""
								className="w-full h-full object-cover aspect-square sm:aspect-video md:aspect-auto rounded-sm"
							/>

							<div className="absolute inset-0 flex flex-col items-center justify-center bg-black/20">
								<h3 className="text-white text-big uppercase font-medium tracking-wider">Kategorie</h3>
								<p class="text-white max-w-[240px] mx-auto text-center mb-6">
									Lorem ipsum, dolor sit amet consectetur adipisicing elit.
								</p>
								<p className="flex text-white items-center font-medium tracking-wider gap-2 lg:hidden lg:group-hover:flex">
									<span>mehr erfahren</span>
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
											d="M8.25 4.5l7.5 7.5-7.5 7.5"
										/>
									</svg>
								</p>
							</div>
						</Link>
					</div>
				);
			})}
		</div>
	);
};

export default BannerGrid;
