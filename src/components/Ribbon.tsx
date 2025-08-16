import { useEffect, useRef } from "react";
import AfterEffects from "../icons/AfterEffects";
import Bootstrap from "../icons/Bootstrap";
import C from "../icons/C";
import Canva from "../icons/Canva";
import CSS from "../icons/CSS";
import Gimp from "../icons/Gimp";
import Git from "../icons/Git";
import Hibernate from "../icons/Hibernate";
import HTML from "../icons/HTML";
import Illustrator from "../icons/Illustrator";
import Inkscape from "../icons/Inkscape";
import Java from "../icons/Java";
import JUnit from "../icons/JUnit";
import Maven from "../icons/Maven";
import MongoDB from "../icons/MongoDB";
import MySQL from "../icons/MySQL";
import Neovim from "../icons/Neovim";
import Photoshop from "../icons/Photoshop";
import Postgres from "../icons/Postgres";
import Postman from "../icons/Postman";
import Prettier from "../icons/Prettier";
import Python from "../icons/Python";
import ReactLogo from "../icons/ReactLogo";
import Redis from "../icons/Redis";
import Sonarlint from "../icons/Sonarlint";
import Sonarqube from "../icons/Sonarqube";
import SpringBoot from "../icons/SpringBoot";
import TailwindLogo from "../icons/TailwindLogo";
import Tomcat from "../icons/Tomcat";
import Vite from "../icons/ViteLogo";

const Ribbon = () => {
	const ulRef = useRef<HTMLUListElement | null>(null);

	useEffect(() => {
		const ul = ulRef.current;
		if (ul && ul.parentNode) {
			const clone = ul.cloneNode(true) as HTMLUListElement;
			clone.setAttribute("aria-hidden", "true");
			ul.parentNode.insertBefore(clone, ul.nextSibling);
		}
	}, []);

	const logos = [
		<HTML />,
		<CSS />,
		<Bootstrap />,
		<TailwindLogo />,
		<ReactLogo />,
		<Vite />,
		<Java />,
		<Maven />,
		<Tomcat />,
		<Hibernate />,
		<SpringBoot />,
		<JUnit />,
		<Redis />,
		<Postgres />,
		<MySQL />,
		<MongoDB />,
		<C />,
		<Python />,
		<Neovim />,
		<Git />,
		<Postman />,
		<Prettier />,
		<Sonarlint />,
		<Sonarqube />,
		<AfterEffects />,
		<Illustrator />,
		<Photoshop />,
		<Canva />,
		<Gimp />,
		<Inkscape />,
	];
	return (
		<div className="text-zinc-400 w-[calc(100vw-1rem)] inline-flex flex-nowrap overflow-hidden mask-x-from-70% mask-x-to-90% mt-7">
			<ul
				ref={ulRef}
				className="flex items-center justify-center [&_li]:mx-8 animate-scroll-left"
			>
				{logos.map((logo, index) => {
					return (
						<li
							key={index}
							className="hover:text-zinc-500 dark:hover:text-zinc-200 transition ease-in duration-200"
						>
							{logo}
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default Ribbon;
