import { Fulfillment } from "ebay-api/lib/api/restful/sell";
import Link from "next/link";

export default function Footer() {
	return (
		<>
			<div className="w-full bg-dark">
				<div className="container mx-auto py-16 flex flex-col items-center justify-center">
					<h2 className="text-neon text-bigger text-center mb-8">
						Solaranlage für den Balkon – <br /> Preise vergleichen und profitieren{" "}
					</h2>
					<Link href="/" className="m-0 border-none leading-0 block">
						<span className="bg-neon text-camo px-6 py-3 rounded-full font-medium">
							zu den Solaranlagen
						</span>
					</Link>
				</div>
			</div>
			<footer className="w-full bg-darker py-16 px-8">
				<div className="container mx-auto text-white grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-16">
					<div className="col-span-1">
						<p>
							<span className="uppercase tracking-[0.2rem] leading-none">
								solar<span className="text-neon font-semibold">checks</span>
							</span>
						</p>
						<p className="mt-4">Solaranlage für den Balkon – Preise vergleichen und profitieren </p>
					</div>
					<div className="col-span-1">
						<strong className="uppercase tracking-widest font-medium text-xs text-neon">Produkte</strong>
						<ul className="text-sm tracking-wider mt-4 leading-8 grid grid-cols-1 md:grid-cols-2 md:gap-x-6">
							<li>
								<Link href="/solaranlage/balkon">für den Balkon</Link>
							</li>
							<li>
								<Link href="/solaranlage/unterwegs">für Unterwegs</Link>
							</li>
							<li>
								<Link href="/solaranlage/dach">fürs Dach</Link>
							</li>
							<li>
								<Link href="/solaranlage/campen">zum Campen</Link>
							</li>
						</ul>
					</div>
					<div className="col-span-1">
						<strong className="uppercase tracking-widest font-medium text-xs text-neon">Zubehör</strong>
						<ul className="text-sm tracking-wider mt-4 leading-8 grid grid-cols-1 md:grid-cols-2 md:gap-x-6">
							<li>
								<Link href="/solaranlage/zubehoer/solarmodule">Solarmodule</Link>
							</li>
							<li>
								<Link href="/solaranlage/zubehoer/kabel">Kabel</Link>
							</li>
							<li>
								<Link href="/solaranlage/zubehoer/befestigung">Befestigungsmaterial</Link>
							</li>
							<li>
								<Link href="/solaranlage/zubehoer/stecker">Stecker & Steckdosen</Link>
							</li>
						</ul>
					</div>
				</div>
			</footer>
		</>
	);
}
