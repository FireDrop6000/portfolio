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
				href="https://firebasestorage.googleapis.com/v0/b/portfolio-5f51e.firebasestorage.app/o/Resume_PratikGayen.pdf?alt=media&token=e0ac6321-7e78-43ef-b37b-0462a78123b0"
				target="_blank"
				rel="noopener"
			>
				Download CV
			</a>
		</div>
	);
};

export default QuickLinks;
