import { useRef } from "react";
import gsap from "gsap";

export default function Filter({ company, setCompany, size, setSize, options, submitForm, label }) {
	const filter = useRef(null);

	const showFilter = () => {
		const elem = filter.current;
		gsap.to(elem, {
			y: 0,
			duration: 0.3,
			ease: "Power4.easeInOut",
		});
	};

	const hideFilter = () => {
		const elem = filter.current;
		gsap.to(elem, {
			y: "-100%",
			duration: 0.3,
			ease: "Power4.easeInOut",
		});
	};

	return (
		<aside className="w-full bg-white p-4 border-b border-zinc-200 sticky top-0 self-start z-50">
			<form
				ref={filter}
				onSubmit={(e) => {
					if (window.innerWidth < 768) {
						hideFilter();
					}

					submitForm(e);
				}}
				className="container mx-auto flex items-center justify-between gap-4 sm:gap-16 flex-col sm:flex-row w-full bg-white fixed inset-0 sm:relative z-[99999] p-8 sm:p-0 -translate-y-full sm:-translate-y-0"
			>
				<div className="w-full">
					<div
						className="flex items-center justify-end mb-16 gap-2 cursor-pointer sm:hidden"
						onClick={hideFilter}
					>
						<span className="text-sm">schliessen</span>
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
					<div className="flex items-center justify-start gap-4 flex-col sm:flex-row w-full">
						<div className="flex items-center border border-zinc-300 p-2 w-full sm:w-auto">
							<span className="font-medium mr-4">{label ? label : "Modell"}</span>
							<select
								value={company}
								onChange={(e) => setCompany(e.target.value)}
								className="bg-transparent block w-full text-center"
							>
								<option value="">{label ? label : "Modell"}</option>
								<option value=" ">alle</option>
								{options.map((option, index) => (
									<option value={option} key={index}>
										{option}
									</option>
								))}
							</select>
						</div>

						<div className="flex items-center border border-zinc-300 p-2 w-full sm:w-auto">
							<span className="font-medium mr-4">Felgengröße</span>
							<select
								value={size}
								onChange={(e) => setSize(e.target.value)}
								className="bg-transparent block w-full text-center"
							>
								<option value="">Größe</option>
								<option value="16">16</option>
								<option value="17">17</option>
								<option value="18">18</option>
								<option value="19">19</option>
								<option value="20">20</option>
								<option value="21">21</option>
								<option value="22">22</option>
							</select>
							<span className="ml-4">Zoll</span>
						</div>
					</div>
				</div>

				<button
					type="submit"
					className="bg-black text-white px-6 py-2 sm:max-w-[240px] flex items-center w-full justify-center"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={2}
						stroke="currentColor"
						className="w-5 h-5 mr-4"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
						/>
					</svg>

					<span>Angebote finden</span>
				</button>
			</form>

			<span
				className="bg-zinc-300 text-white w-full py-3 px-6 flex items-center justify-center text-center cursor-pointer sm:hidden"
				onClick={showFilter}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth={2}
					stroke="currentColor"
					className="w-5 h-5 mr-4"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
					/>
				</svg>
				<span>Angebote filtern</span>
			</span>
		</aside>
	);
}
