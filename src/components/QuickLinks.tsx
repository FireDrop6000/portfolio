import { Link } from "react-router";

const QuickLinks = () => {
	return (
		<div className="flex items-center justify-center md:hidden gap-6 mt-5 text-l">
			<Link to="/projects" className="hover:underline">
				Projects
			</Link>
			<div className="bg-blue-500 w-1 h-1 rounded-full"></div>
			<a
				className="hover:underline"
				href="../../resources/Resume_PratikGayen.pdf"
				target="_blank"
				rel="noopener"
			>
				Download CV
			</a>
		</div>
	);
};

export default QuickLinks;
