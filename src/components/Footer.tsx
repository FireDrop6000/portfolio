import Github from "../icons/Github";
import Instagram from "../icons/Instagram";
import Logo from "../icons/Logo";
import Twitter from "../icons/Twitter";

const Footer = () => {
	return (
		<div className="flex flex-row-reverse shadow-[0_0_9px_rgba(0,0,0,0.2)] dark:bg-slate-700 mt-25 p-5 items-center rounded-t-xl justify-between">
			<div className="flex flex-col gap-2 items-end">
				<div className="flex gap-2 items-center">
					<div className="scale:75 md:scale-70">
						<Logo />
					</div>
					<span className="text-xs md:text-sm opacity-60">
						Pratik Gayen 2025
					</span>
				</div>
				<span className="text-xs opacity-60">~ made with ♥</span>
			</div>
			<div className="flex flex-col gap-2 items-start">
				<div className="grid grid-cols-3 gap-2 items-center">
					<div className="scale-75">
						<a
							href="https://github.com/FireDrop6000"
							target="_blank"
							rel="noopener"
							className="opacity-60 hover:opacity-100 transition-all"
						>
							<Github />
						</a>
					</div>
					<div className="scale-75">
						<a
							href="https://www.instagram.com/pratik.png/"
							target="_blank"
							rel="noopener"
							className="opacity-60 hover:opacity-100 transition-all"
						>
							<Instagram />
						</a>
					</div>
					<div className="scale-75">
						<a
							href="https://x.com/FireDrop6000"
							target="_blank"
							rel="noopener"
							className="opacity-60 hover:opacity-100 transition-all"
						>
							<Twitter />
						</a>
					</div>
				</div>
				<span className="text-xs opacity-60">
					Source code:{" "}
					<a
						href="https://github.com/FireDrop6000/portfolio"
						className="hover:underline hover:underline-offset-3 decoration-wavy transition-all"
						target="_blank"
						rel="noopener"
					>
						https://github.com/FireDrop6000/portfolio
					</a>
				</span>
			</div>
		</div>
	);
};

export default Footer;
