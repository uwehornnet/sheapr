export default function Modal({ title, link, image, price, shippingOptions, showModal }) {
	return (
		<div className="fixed inset-0 bg-black/80 flex items-center justify-center z-[90]">
			<span
				className="absolute right-8 top-8 rounded-full bg-white p-2 cursor-pointer z-[99999]"
				onClick={() => showModal(false)}
			>
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

			<div className="bg-white w-full lg:max-w-[800px] grid grid-cols-1 lg:grid-cols-2 max-w-[400px]">
				<div className="col-span-1 relative">
					<span className="bg-yellow-200 text-yellow-600 flex items-center justify-center p-2 absolute top-2 left-2">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="w-6 h-6 mr-2"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0"
							/>
						</svg>
						<span>Preis Leistungs Sieger</span>
					</span>
					<img
						src={image.imageUrl.replace("s-l225", "s-l600")}
						alt=""
						className="w-full aspect-square object-cover block"
					/>
				</div>
				<div className="col-span-1">
					<div className="p-4 flex-1 flex flex-col justify-between lg:h-full">
						<div className="flex-1 lg:h-full">
							<a href={link} target="_blank" rel="noreferrer" className="modal-button">
								<h3 className=" mb-4">{title}</h3>
							</a>
							<p className="flex items-center gap-4 text-xs">
								<span className="inline-block w-2 h-2 rounded-full bg-lime-500"></span>
								<span>verf??gbar</span>
							</p>
							{shippingOptions && shippingOptions.length ? (
								<p className="flex items-center gap-4 text-xs">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										strokeWidth={1.5}
										stroke="currentColor"
										className="w-5 h-5"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
										/>
									</svg>
									<span>Versand {shippingOptions[0].shippingCost.value} EUR</span>
								</p>
							) : null}
							<p className="font-medium text-xl mt-4">{price.value} EUR</p>
						</div>

						<a
							href={link}
							className="bg-black text-white py-3 px-6 text-center flex items-center justify-center gap-4 modal-button"
						>
							<span>zum H??ndler</span>
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
									d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
								/>
							</svg>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
