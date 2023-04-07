import HeaderLayout from "./HeaderLayout";
import FooterLayout from "./FooterLayout";

const DefaultLayout = ({ children }) => {
	return (
		<>
			<HeaderLayout />
			<div className="bg-slate-50 pb-6">{children}</div>
			<FooterLayout />
		</>
	);
};

export default DefaultLayout;
