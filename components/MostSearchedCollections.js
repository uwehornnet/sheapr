import Link from "next/link";

import { collections } from "../utils/collections";

const MostSearchedCollections = () => {
	return (
		<div className="max-w-[1980px] mx-auto py-2 px-4 md:px-6">
			<h2 className="text-big font-medium mb-4">Most searched Collections</h2>
			<ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 bg-white border border-slate-200 rounded-sm">
				{collections.map((collection, index) => (
					<li key={index} className="w-full text-center p-8 border-l border-t border-slate-200">
						<Link href={`/${collection.slug}`} className="relative group px-2">
							<span className="bg-teal-500 h-0 w-full absolute bottom-0 left-0 group-hover:h-3 transition-all ease-out duration-400"></span>
							<span className="relative tracking-wider font-medium">{collection.name}</span>
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

export default MostSearchedCollections;
