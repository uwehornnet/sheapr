import Link from "next/link";
import FAQ from "../components/FAQ";
import HeadMeta from "../components/HeadMeta";
import { categories } from "../utils/Categories";

export default function Home() {
	return (
		<div className="bg-slate-50 w-full min-h-screen">
			<HeadMeta
				title="Solaranlage für den Balkon: eine kluge Entscheidung"
				description="Solaranlage für den Balkon: ✓ Einfache und schnelle Montage ✓ Ideal für die Nutzung von Solarenergie ✓ Für eine grüne und umweltbewusste Zukunft."
			/>

			<div className="relative min-h-screen md:min-h-0 md:aspect-square lg:aspect-header bg-indigo-700">
				<img
					alt="Solaranlage für den Balkon eine kluge Entscheidung für die Zukunft"
					src=""
					className="w-full h-full object-cover md:aspect-auto min-h-screen md:min-h-0"
				/>
			</div>

			<div className="w-full py-16 px-6 md:px-0">
				<div className="container mx-auto">
					<div className="relative flex items-center justify-between mb-4">
						<h2 className="font-medium text-big">Trending Categories</h2>
						<div className="flex items-center text-black gap-4">
							<span>
								<svg
									className="h-4 w-4"
									viewBox="0 0 20 18"
									stroke="currentColor"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M8.5 16.5L1 9M1 9L8.5 1.5M1 9H19"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
								</svg>
							</span>
							<span>
								<svg
									className="h-4 w-4"
									viewBox="0 0 20 18"
									stroke="currentColor"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M11.5 16.5L19 9M19 9L11.5 1.5M19 9H1"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
								</svg>
							</span>
						</div>
					</div>

					<div className="flex overflow-scroll gap-4 no-scrollbar">
						{categories.map((c, i) => (
							<Link href={`/category/${c.slug}`}>
								<div className="aspect-square bg-slate-200 rounded-md min-w-[200px] w-[200px] flex flex-col justify-end items-center p-4">
									<h3 className="uppercase font-medium text-sm text-cente w-full">{c.name}</h3>
								</div>
							</Link>
						))}
					</div>
				</div>

				<div className="container mx-auto mt-16">
					<h2 className="font-medium text-big">Best selling Products</h2>

					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 no-scrollbar mt-4">
						<div className="aspect-portrait border-slate-200 border-2 bg-white rounded-md w-full flex flex-col justify-between">
							<img
								src="/images/geraete.jpg"
								alt="geraete"
								className="aspect-square w-5/6 object-contain mx-auto"
							/>
							<div className="relative p-4">
								<h3 className="uppercase font-medium text-sm">Sony Playstation 5</h3>
								<p className="text-slate-400 text-sm">4K & 8K ready, 1TB custom SSD, up to 120fps</p>
								<span className="cursor-pointer mt-6 hover:bg-indigo-600 bg-white text-slate-300 hover:text-white rounded-full font-medium tracking-wider flex items-center justify-center p-4 gap-4 text-sm">
									Preise vergleichen
								</span>
							</div>
						</div>
						<div className="aspect-portrait border-slate-200 border-2 bg-white rounded-md w-full flex flex-col justify-between">
							<img
								src="/images/geraete.jpg"
								alt="geraete"
								className="aspect-square w-5/6 object-contain mx-auto"
							/>
							<div className="relative p-4">
								<h3 className="uppercase font-medium text-sm">Sony Playstation 5</h3>
								<p className="text-slate-400 text-sm">4K & 8K ready, 1TB custom SSD, up to 120fps</p>
								<span className="cursor-pointer mt-6 hover:bg-indigo-600 bg-white text-slate-300 hover:text-white rounded-full font-medium tracking-wider flex items-center justify-center p-4 gap-4 text-sm">
									Preise vergleichen
								</span>
							</div>
						</div>
						<div className="aspect-portrait border-slate-200 border-2 bg-white rounded-md w-full flex flex-col justify-between">
							<img
								src="/images/geraete.jpg"
								alt="geraete"
								className="aspect-square w-5/6 object-contain mx-auto"
							/>
							<div className="relative p-4">
								<h3 className="uppercase font-medium text-sm">Sony Playstation 5</h3>
								<p className="text-slate-400 text-sm">4K & 8K ready, 1TB custom SSD, up to 120fps</p>
								<span className="cursor-pointer mt-6 hover:bg-indigo-600 bg-white text-slate-300 hover:text-white rounded-full font-medium tracking-wider flex items-center justify-center p-4 gap-4 text-sm">
									Preise vergleichen
								</span>
							</div>
						</div>
						<div className="aspect-portrait border-slate-200 border-2 bg-white rounded-md w-full flex flex-col justify-between">
							<img
								src="/images/geraete.jpg"
								alt="geraete"
								className="aspect-square w-5/6 object-contain mx-auto"
							/>
							<div className="relative p-4">
								<h3 className="uppercase font-medium text-sm">Sony Playstation 5</h3>
								<p className="text-slate-400 text-sm">4K & 8K ready, 1TB custom SSD, up to 120fps</p>
								<span className="cursor-pointer mt-6 hover:bg-indigo-600 bg-white text-slate-300 hover:text-white rounded-full font-medium tracking-wider flex items-center justify-center p-4 gap-4 text-sm">
									Preise vergleichen
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
