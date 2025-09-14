import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import Career from "../components/Career";
import ContactCard from "../components/ContactCard";
import Footer from "../components/Footer";
import HeroHeader from "../components/HeroHeader";
import Linux from "../components/Linux";
import Proficiency from "../components/Proficiency";
import QuickLinks from "../components/QuickLinks";
import Ribbon from "../components/Ribbon";
import SmallLinux from "../components/SmallLinux";
import Socials from "../components/Socials";
import ScrollDown from "../icons/ScrollDown";

const Home = () => {
	const [scSize, setScSize] = useState(window.innerWidth);

	useEffect(() => {
		const handleResize = () => {
			setScSize(window.innerWidth);
		};
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return (
		<AnimatePresence mode="wait">
			<motion.div
				key="Home"
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.7 }}
				className="overflow-hidden"
			>
				<div className="flex flex-col items-center justify-center min-h-[calc(100vh-1rem)] w-80 mx-auto">
					<div className="flex flex-grow flex-col mt-10 md:mt-55 justify-center items-center">
						<HeroHeader>Pratik Gayen</HeroHeader>

						<div className="text-[16px] text-center py-3 px-2 w-80">
							I'm a software developer and a working data analyst from India,
							usually working on backend technologies. I also tinker with Linux
							systems and their customizations 🍚.
						</div>

						<div className="flex flex-none justify-center">
							<Socials />
						</div>

						<Ribbon />

						<QuickLinks />
					</div>

					<div className="flex flex-none items-end justify-center">
						<ScrollDown />
					</div>
				</div>

				<motion.div
					key="Career"
					initial={
						scSize >= 992 ? { opacity: 0, y: 20 } : { opacity: 0, x: -10 }
					}
					whileInView={{ opacity: 1, x: 0, y: 0 }}
					viewport={{ once: true, amount: scSize >= 992 ? "all" : 0.2 }}
					transition={{ duration: 0.7 }}
					className="flex flex-col items-center justify-center mt-20"
				>
					<span className="text-6xl font-bold underline underline-offset-14 mb-20">
						Career
					</span>
					<Career />
				</motion.div>

				<motion.div
					key="Linux"
					initial={{ opacity: 0, x: scSize >= 992 ? 30 : 10 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true, amount: scSize >= 992 ? 0.5 : 0.2 }}
					transition={{ duration: 0.7 }}
				>
					<Linux />
					<SmallLinux />
				</motion.div>

				<motion.div
					key="Chart"
					initial={{ opacity: 0, x: scSize >= 992 ? -30 : -10 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true, amount: scSize >= 992 ? 0.5 : 0.2 }}
					transition={{ duration: 0.7 }}
				>
					<Proficiency />
				</motion.div>

				<div className="flex flex-col mt-50 items-center justify-center">
					<ContactCard />
				</div>

				<Footer />
			</motion.div>
		</AnimatePresence>
	);
};

export default Home;
