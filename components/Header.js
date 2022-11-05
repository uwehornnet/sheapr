import { useRef } from "react";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import Script from "next/script";
import Consent from "./Consent";

const IMAGE_SIZE = 40;
const IMAGE_SIZE_NAV = 32;

export default function Header() {
	const nav = useRef(null);
	const router = useRouter();

	const showNav = () => {
		const elem = nav.current;

		gsap.to(elem, {
			x: 0,
			opacity: 1,
			duration: 0.3,
			ease: "Power4.easeInOut",
		});
	};

	const hideNav = () => {
		const elem = nav.current;

		gsap.to(elem, {
			x: "100%",
			opacity: 0,
			duration: 0.3,
			ease: "Power4.easeInOut",
		});
	};
	return (
		<>
			<Consent />
			<nav
				className="fixed top-0 left-0 h-full w-full bg-black/80 z-[9999] translate-x-full opacity-0 lg:hidden"
				ref={nav}
			>
				<div className="bg-white w-full max-w-[400px] h-full ml-auto mr-0 pt-8 overflow-y-scroll">
					<div className="flex items-center justify-end mb-16 gap-2 cursor-pointer pr-8" onClick={hideNav}>
						<div className="flex items-center bg-neon text-camo py-3 px-6 rounded-full">
							<span className="text-base">schließen</span>
							<span className=" p-2">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={1.5}
									stroke="currentColor"
									className="w-6 h-6"
								>
									<path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
								</svg>
							</span>
						</div>
					</div>

					<div className="p-8">
						<strong className="uppercase tracking-widest font-medium text-xs text-neon">Produkte</strong>
						<ul className="text-xl tracking-wider mt-4 leading-8">
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
					<div className="p-8">
						<strong className="uppercase tracking-widest font-medium text-xs text-neon">Zubehör</strong>
						<ul className="text-xl tracking-wider mt-4 leading-8">
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
			</nav>
			<div className="w-full fixed top-0 left-0 p-4 z-[999]">
				<div className="container mx-auto bg-zinc-200/50 flex items-center justify-between rounded-full backdrop-blur-lg py-2 lg:py-6 px-2 lg:px-4">
					<Link href="/" className="m-0 border-none block">
						<span className="block uppercase tracking-[0.2rem] leading-none p-2">
							solar<span className="text-neon font-semibold">checks</span>
						</span>
					</Link>

					<ul className="items-center justify-center gap-16 font-medium hidden lg:flex">
						<li className="group ">
							<span className="flex items-center justify-start gap-4 cursor-pointer group-hover:underline group-hover:underline-offset-2 group-hover:text-neon">
								Solaranlagen
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
										d="M19.5 8.25l-7.5 7.5-7.5-7.5"
									/>
								</svg>
							</span>

							<div className="hidden group-hover:block absolute -translate-x-1/4 pt-6">
								<div className="p-4 bg-white rounded-2xl">
									<h3>Solaranlagen</h3>
									<div className="grid grid-cols-3 gap-4 mt-8">
										<div className="rounded-xl bg-zinc-100 p-4">
											<Link href="/solaranlage/balkon">
												<img
													src="/images/solaranlage-balkon.jpg"
													alt="Solaranlagen für deinen Balkon"
													className="rounded-lg w-full aspect-square bg-zinc-200 mb-4 object-cover max-w-[160px]"
												/>

												<span className="text-sm">für den Balkon</span>
											</Link>
										</div>
										<div className="rounded-xl bg-zinc-100 p-4">
											<Link href="/solaranlage/dach">
												<img
													src="/images/solaranlage-dach.jpg"
													alt="Solaranlagen für deine Dach"
													className="rounded-lg w-full aspect-square bg-zinc-200 mb-4 object-cover max-w-[160px]"
												/>

												<span className="text-sm">fürs Dach</span>
											</Link>
										</div>
										<div className="rounded-xl bg-zinc-100 p-4">
											<Link href="/solaranlage/unterwegs">
												<img
													src="/images/solar-unterwegs.jpg"
													alt="Solaranlage für unterwegs oder zum campen"
													className="rounded-lg w-full aspect-square bg-zinc-200 mb-4 object-cover max-w-[160px]"
												/>

												<span className="text-sm">für Unterwegs</span>
											</Link>
										</div>
									</div>
								</div>
							</div>
						</li>

						<li>
							<Link
								href="/solaranlage/zubehoer"
								className="hover:underline hover:underline-offset-2 hover:text-neon"
							>
								<span>Zubehör</span>
							</Link>
						</li>

						<li>
							<Link href="/faq" className="hover:underline hover:underline-offset-2 hover:text-neon">
								<span>FAQ</span>
							</Link>
						</li>
					</ul>

					<Link href="/solaranlage" className="m-0 border-none leading-0 hidden lg:block">
						<span className="bg-neon text-camo px-6 py-3 rounded-full font-medium">
							zu den Solaranlagen
						</span>
					</Link>

					<span className="block lg:hidden" onClick={showNav}>
						<span className="bg-neon text-camo rounded-full font-medium flex items-center justify-center p-4">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={2}
								stroke="currentColor"
								className="w-6 h-6"
							>
								<path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
							</svg>
						</span>
					</span>
				</div>
			</div>
		</>
	);
}
