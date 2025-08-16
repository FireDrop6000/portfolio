import Career from "../components/Career";
import HeroHeader from "../components/HeroHeader";
import Linux from "../components/Linux";
import QuickLinks from "../components/QuickLinks";
import Ribbon from "../components/Ribbon";
import Socials from "../components/Socials";
import ScrollDown from "../icons/ScrollDown";

const Home = () => {
	return (
		<>
			<div className="flex flex-col items-center justify-center min-h-[calc(100vh-1rem)] w-80 mx-auto ">
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
			<div className="flex flex-col items-center justify-center mt-20">
				<span className="text-6xl font-bold underline mb-20">Career</span>
				<Career />
			</div>
		</>
	);
};

export default Home;
