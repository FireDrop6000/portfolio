import { Link } from "react-router";

const QuickLinks = () => {
	return (
		<div className="flex items-center justify-center md:hidden gap-6 mt-5 text-l">
			<Link to="/projects">Projects</Link>
			<div className="bg-blue-500 w-1 h-1 rounded-full"></div>
			<span>Download CV</span>
		</div>
	);
};

export default QuickLinks;
