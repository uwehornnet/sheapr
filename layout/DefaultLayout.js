import HeaderLayout from "./HeaderLayout";
import FooterLayout from "./FooterLayout";
import Consent from "../components/Consent";

const DefaultLayout = ({ children }) => {
	return (
		<>
			<Consent />
			<HeaderLayout />
			<div className="bg-slate-50 pb-6">{children}</div>
			<FooterLayout />
		</>
	);
};

export default DefaultLayout;
