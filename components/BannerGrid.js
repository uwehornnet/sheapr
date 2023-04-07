import Link from "next/link";

const classNames = {
	left: [
		"col-span-1 sm:col-span-2 bg-teal-100 rounded-sm overflow-hidden relative aspect-square sm:aspect-video md:aspect-auto",
		"col-span-1 aspect-square bg-teal-100 rounded-sm overflow-hidden relative",
		"col-span-1 aspect-square bg-teal-100 rounded-sm overflow-hidden relative",
	],
	right: [
		"col-span-1 aspect-square bg-teal-100 rounded-sm overflow-hidden relative",
		"col-span-1 aspect-square bg-teal-100 rounded-sm overflow-hidden relative",
		"col-span-1 sm:col-span-2 bg-teal-100 rounded-sm overflow-hidden relative aspect-square sm:aspect-video md:aspect-auto",
	],
};

const BannerGrid = ({ direction, items }) => {
	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 py-4">
			{items.map((item, index) => {
				return (
					<div key={index} className={classNames[direction][index]}>
						<Link href={`/category/${item.slug}`} className="group absolute h-full w-full ">
							<img
								src={`/images/categories/${item.slug}.jpg`}
								alt={`${item.name} - Finde die besten Preise.`}
								className="w-full h-full object-cover aspect-square sm:aspect-video md:aspect-auto rounded-sm"
							/>

							<div className="absolute inset-0 flex flex-col items-center justify-center bg-black/20">
								<h3 className="text-white text-big uppercase font-medium tracking-wider text-center">
									{item.name}
								</h3>

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
