import { useEffect, useState } from "react";
import Loading from "../icons/Loading";
import { retrieveLanguages } from "../scripts/RetrieveLanguages";
import PieComp from "./PieComp";

const Proficiency = () => {
	const [languages, setLanguages] = useState<any[]>([]);

	useEffect(() => {
		const getLanguages = async () => {
			const data = await retrieveLanguages();
			setLanguages(data);
		};
		getLanguages();
	}, []);

	return (
		<div className="flex flex-col md:flex-row md:gap-10 justify-center items-center mt-20 md:mt-15 p-3">
			<div className="md:flex md:flex-col items-start">
				<span className="text-4xl font-bold underline underline-offset-14">
					Language Proficiency
				</span>
				<span className="hidden mt-7 md:block text-xl wrap-normal w-[30vw] opacity-65">
					My dev stack in numbers
				</span>
			</div>
			{languages.length > 0 ? (
				<PieComp languages={languages} />
			) : (
				<div className=" flex flex-col items-center justify-center w-screen h-[70vh] md:w-[55vw] md:h-[50vw]">
					<Loading />
					<span className="text-lg">Loading chart...</span>
				</div>
			)}
			<span className="text-xl mt-3 md:hidden wrap-normal w-screen opacity-65 text-center p-7">
				My dev stack in numbers
			</span>
		</div>
	);
};

export default Proficiency;
