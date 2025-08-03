import Logo from "../icons/Logo";

const NavBar = () => {
	return (
		<header className="fixed inset-x-0 top-0 z-30 mx-auto w-full max-w-screen-md border border-gray-100 bg-white/80 py-3 shadow backdrop-blur-lg md:top-6 md:rounded-xl lg:max-w-screen-lg">
			<div className="px-4">
				<div className="flex items-center justify-between">
					<div className="flex shrink-0">
						<a aria-current="page" className="flex items-center" href="/">
							<div className="rounded-sm p-1 bg-white hover:bg-slate-100 dark:hover:bg-slate-700 hover:shadow focus:outline-none focus:ring focus:ring-slate-500/50 focus-visible:outline-none focus-visible:ring focus-visible:ring-slate-500/50 relative before:absolute before:inset-0 before:rounded-[inherit] before:bg-[linear-gradient(45deg,transparent_25%,theme(colors.white)_50%,transparent_75%,transparent_100%)] dark:before:bg-[linear-gradient(45deg,transparent_25%,theme(colors.white/.5)_50%,transparent_75%,transparent_100%)] before:bg-[length:250%_250%,100%_100%] before:bg-[position:200%_0,0_0] before:bg-no-repeat before:[transition:background-position_0s_ease] hover:before:bg-[position:-100%_0,0_0] hover:before:duration-[850ms] hover:scale-120 transition">
								<Logo />
							</div>
						</a>
					</div>
					<div className="hidden md:flex md:items-center md:justify-center md:gap-3 md:ml-13">
						<a
							aria-current="page"
							className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
							href="/projects"
						>
							Projects
						</a>
						<a
							className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
							href="#"
						>
							Download CV
						</a>
					</div>
					<div className="flex items-center justify-end">
						<a
							className="inline-flex justify-center whitespace-nowrap rounded-lg px-3.5 py-2.5 text-sm font-bold text-slate-200 dark:text-slate-800 bg-gradient-to-r from-slate-800 to-slate-700 dark:from-slate-200 dark:to-slate-100 dark:hover:bg-slate-100 shadow focus:outline-none focus:ring focus:ring-slate-500/50 focus-visible:outline-none focus-visible:ring focus-visible:ring-slate-500/50 relative before:absolute before:inset-0 before:rounded-[inherit] before:bg-[linear-gradient(45deg,transparent_25%,theme(colors.white/.5)_50%,transparent_75%,transparent_100%)] dark:before:bg-[linear-gradient(45deg,transparent_25%,theme(colors.white)_50%,transparent_75%,transparent_100%)] before:bg-[length:250%_250%,100%_100%] before:bg-[position:200%_0,0_0] before:bg-no-repeat before:[transition:background-position_0s_ease] hover:before:bg-[position:-100%_0,0_0] hover:before:duration-[850ms]"
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
