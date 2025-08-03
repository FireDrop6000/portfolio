import Github from "../icons/Github";
import Instagram from "../icons/Instagram";
import Twitter from "../icons/Twitter";

const Socials = () => {
	return (
		<div className="grid grid-cols-3 gap-4 rounded-full px-4 py-2 mt-4 bg-black/20 backdrop-blur-sm border border-white/50 shadow-[inset_0_1px_0px_rgba(255,255,255,0.75),0_0_9px_rgba(0,0,0,0.2),0_3px_8px_rgba(0,0,0,0.15)] text-white relative before:absolute before:inset-0 before:rounded-lg before:bg-gradient-to-br before:from-white/60 before:via-transparent before:to-transparent before:opacity-70 before:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:bg-gradient-to-tl after:from-white/30 after:via-transparent after:to-transparent after:opacity-50 after:pointer-events-none">
			<div className="text-black md:text-white md:hover:text-black transition delay-90 duration-300 ease-in-out">
				<a
					href="https://github.com/FireDrop6000"
					target="_blank"
					rel="noopener noreferrer"
				>
					<Github />
				</a>
			</div>
			<div className="text-[#ff78b2] md:text-white md:hover:text-[#ff78b2] transition delay-90 duration-300 ease-in-out">
				<a
					href="https://www.instagram.com/pratik.png/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<Instagram />
				</a>
			</div>
			<div className="text-[#55ACEE] md:text-white md:hover:text-[#55ACEE] transition delay-90 duration-300 ease-in-out">
				<a
					href="https://x.com/FireDrop6000"
					target="_blank"
					rel="noopener noreferrer"
				>
					<Twitter />
				</a>
			</div>
		</div>
	);
};

export default Socials;
