import Link from "next/link";
import { categories } from "../utils/data/categories";

const CategorySlider = () => {
	return (
		<nav className="relative block pt-4 pb-2 px-4 md:px-6 overflow-scroll max-w-[1980px] mx-auto no-scrollbar bg-slate-50">
			<ul className="flex items-center justify-start gap-4">
				{categories
					.sort((a, b) => a.slug - b.slug)
					.map((c, i) => (
						<li className={`block ${i == categories.length - 1 ? "pr-6" : null}`} key={i}>
							<Link
								href={`/category/${c.slug}`}
								className="bg-slate-100 rounded-sm p-4 w-full aspect-square min-w-[120px] lg:min-w-[160px] max-w-[120px] lg:max-w-[160px] flex flex-col items-center text-center justify-center"
							>
								<img
									src={`/images/${c.slug}.svg`}
									alt={c.name}
									className="h-6 lg:h-10 aspect-square object-contain mb-4"
								/>
								<h3 className="uppercase text-xs font-medium">{c.name}</h3>
							</Link>
						</li>
					))}
			</ul>
		</nav>
	);
};

export default CategorySlider;
