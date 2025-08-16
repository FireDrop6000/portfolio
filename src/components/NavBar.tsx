import { Link } from "react-router";
import Logo from "../icons/Logo";

const NavBar = () => {
	return (
		<header className="fixed inset-x-0 top-0 z-30 mx-auto w-full max-w-screen-md py-3 dark:text-white bg-white/2.5 backdrop-blur-sm shadow-[inset_0_1px_0px_rgba(255,255,255,0.75),0_0_9px_rgba(0,0,0,0.2),0_3px_8px_rgba(0,0,0,0.15)]  transition-all duration-300 before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/60 before:via-transparent before:to-transparent before:opacity-70 before:pointer-events-none after:absolute after:inset-0 after:bg-gradient-to-tl after:from-white/30 after:via-transparent after:to-transparent after:opacity-50 after:pointer-events-none border-r border-white/50 md:top-6 md:rounded-full lg:max-w-screen-lg overflow-hidden">
			<div className="px-3">
				<div className="flex items-center justify-between">
					<div className="flex shrink-0">
						<Link aria-current="page" className="flex items-center" to="/">
							<div className="rounded-sm focus:outline-none focus:ring focus:ring-slate-500/50 focus-visible:outline-none focus-visible:ring focus-visible:ring-slate-500/50 relative before:absolute before:inset-0 before:rounded-[inherit] before:bg-[linear-gradient(45deg,transparent_25%,theme(colors.white)_50%,transparent_75%,transparent_100%)] dark:before:bg-[linear-gradient(45deg,transparent_25%,theme(colors.white/.5)_50%,transparent_75%,transparent_100%)] before:bg-[length:250%_250%,100%_100%] before:bg-[position:200%_0,0_0] before:bg-no-repeat before:[transition:background-position_0s_ease] hover:before:bg-[position:-100%_0,0_0] hover:before:duration-[650ms] ml-2">
								<Logo />
							</div>
						</Link>
					</div>
					<div className="hidden md:flex md:items-center md:justify-center md:gap-3 md:ml-13">
						<Link
							aria-current="page"
							className="inline-block rounded-full px-2.5 py-1.5 text-sm font-medium bg-white/2.5 border border-white/50 backdrop-blur-sm shadow-[inset_0_1px_0px_rgba(255,255,255,0.75),0_0_9px_rgba(0,0,0,0.2),0_3px_8px_rgba(0,0,0,0.15)] hover:bg-white/30  duration-300 before:absolute before:inset-0 before:rounded-lg before:bg-gradient-to-br before:from-white/60 before:via-transparent before:to-transparent before:opacity-70 before:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:bg-gradient-to-tl after:from-white/30 after:via-transparent after:to-transparent after:opacity-50 after:pointer-events-none transition antialiased overflow-hidden"
							to="/projects"
						>
							Projects
						</Link>
						<a
							className="inline-block rounded-full px-2.5 py-1.5 text-sm font-medium  bg-white/2.5 border border-white/50 backdrop-blur-sm shadow-[inset_0_1px_0px_rgba(255,255,255,0.75),0_0_9px_rgba(0,0,0,0.2),0_3px_8px_rgba(0,0,0,0.15)] hover:bg-white/30  duration-300 before:absolute before:inset-0 before:rounded-lg before:bg-gradient-to-br before:from-white/60 before:via-transparent before:to-transparent before:opacity-70 before:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:bg-gradient-to-tl after:from-white/30 after:via-transparent after:to-transparent after:opacity-50 after:pointer-events-none transition antialiased overflow-hidden"
							href="#"
						>
							Download CV
						</a>
					</div>
					<div className="flex items-center justify-end">
						<a
							className="inline-flex justify-center whitespace-nowrap rounded-full px-2.5 py-1.5 text-sm font-bold bg-white/2.5 border border-white/50 backdrop-blur-sm shadow-[inset_0_1px_0px_rgba(255,255,255,0.75),0_0_9px_rgba(0,0,0,0.2),0_3px_8px_rgba(0,0,0,0.15)] hover:bg-white/30  duration-300 before:absolute before:inset-0 before:rounded-lg before:bg-gradient-to-br before:from-white/60 before:via-transparent before:to-transparent before:opacity-70 before:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:bg-gradient-to-tl after:from-white/30 after:via-transparent after:to-transparent after:opacity-50 after:pointer-events-none transition antialiased overflow-hidden "
							href="/login"
						>
							Contact
						</a>
					</div>
				</div>
			</div>
		</header>
	);
};

export default NavBar;
