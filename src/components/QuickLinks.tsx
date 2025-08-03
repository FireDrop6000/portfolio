import { Link } from "react-router";

const QuickLinks = () => {
	return (
		<div className="flex items-center justify-center md:hidden gap-6 mt-40 text-l">
			<Link to="/projects">Projects</Link>
			<span>Download CV</span>
		</div>
	);
};

export default QuickLinks;
