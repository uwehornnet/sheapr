import Link from "next/link";

import { navitems } from "../utils/navitems";

const NavBar = () => {
	return (
		<div className="px-4 md:px-6 bg-teal-400/20 text-teal-800 sticky top-0 align-top z-[90] backdrop-blur-lg overflow-x-scroll no-scrollbar">
			<ul className="flex justify-start md:justify-center items-center">
				{navitems.map((item, index) => (
					<li key={index}>
						<Link
							href={`/${item.slug}`}
							className="inline-block py-2 px-6 uppercase tracking-wider text-sm font-medium hover:bg-teal-800 hover:text-teal-200"
						>
							{item.name}
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

export default NavBar;
