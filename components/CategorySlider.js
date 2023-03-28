import Link from "next/link";

const CategorySlider = () => {
	return (
		<nav className="relative block pt-4 pb-2 px-4 md:px-6 overflow-scroll max-w-[1980px] mx-auto no-scrollbar bg-slate-50">
			<ul className="flex items-center justify-start lg:grid lg:grid-cols-8 gap-4">
				<li className="block">
					<Link
						href="/"
						className="block bg-slate-100 rounded-sm p-4 w-full aspect-square min-w-[120px] lg:min-w-fit"
					>
						<span>Kategorie</span>
					</Link>
				</li>
				<li className="block ">
					<Link
						href="/"
						className="block bg-slate-100 rounded-sm p-4 w-full aspect-square min-w-[120px] lg:min-w-fit"
					>
						<span>Kategorie</span>
					</Link>
				</li>
				<li className="block ">
					<Link
						href="/"
						className="block bg-slate-100 rounded-sm p-4 w-full aspect-square min-w-[120px] lg:min-w-fit"
					>
						<span>Kategorie</span>
					</Link>
				</li>
				<li className="block ">
					<Link
						href="/"
						className="block bg-slate-100 rounded-sm p-4 w-full aspect-square min-w-[120px] lg:min-w-fit"
					>
						<span>Kategorie</span>
					</Link>
				</li>
				<li className="block ">
					<Link
						href="/"
						className="block bg-slate-100 rounded-sm p-4 w-full aspect-square min-w-[120px] lg:min-w-fit"
					>
						<span>Kategorie</span>
					</Link>
				</li>
				<li className="block pr-4 md:pr-6 lg:pr-0 ">
					<Link
						href="/"
						className="block bg-slate-100 rounded-sm p-4 w-full aspect-square min-w-[120px] lg:min-w-fit"
					>
						<span>Kategorie</span>
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default CategorySlider;
