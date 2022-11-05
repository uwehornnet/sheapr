import { useState, useRef } from "react";
import gsap from "gsap";

const Container = ({ item }) => {
	const body = useRef(null);
	const icon = useRef(null);
	const [open, setOpen] = useState(false);

	const toggle = () => {
		const target = body?.current;
		if (!open) {
			gsap.to(target, {
				maxHeight: target.scrollHeight + "px",
				duration: 0.3,
				ease: "Power4.easeInOut",
			});
			gsap.to(icon.current, {
				rotate: "45deg",
				duration: 0.3,
				ease: "Power4.easeInOut",
			});
		} else {
			gsap.to(target, {
				maxHeight: 0 + "px",
				duration: 0.3,
				ease: "Power4.easeInOut",
			});
			gsap.to(icon.current, {
				rotate: "0deg",
				duration: 0.3,
				ease: "Power4.easeInOut",
			});
		}
		setOpen(!open);
	};

	return (
		<div
			className={
				open
					? `relative w-full mb-8 p-4 rounded-2xl bg-petrolish`
					: `relative w-full mb-8 p-4 rounded-2xl bg-white`
			}
		>
			<div className="flex items-center justify-between cursor-pointer" onClick={toggle}>
				<h3 className="text-big">{item?.title}</h3>
				<span ref={icon}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						className="w-6 h-6"
					>
						<path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
					</svg>
				</span>
			</div>
			<div className="relative overflow-hidden" ref={body} style={{ maxHeight: `0px` }}>
				<div className="p-4">{item?.content}</div>
			</div>
		</div>
	);
};

export default function FAQ({ data, title }) {
	return (
		<div className="w-full py-16 px-8">
			{title ? <h2 className="mx-auto text-center mb-16 text-bigger font-semibold">{title}</h2> : null}
			<div className="max-w-[1024px] mx-auto">
				{data.map((item, index) => (
					<Container key={index} item={item} />
				))}
			</div>
		</div>
	);
}
