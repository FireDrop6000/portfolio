import { AnimatePresence, motion } from "framer-motion";
import Hover from "../icons/Hover";
import Linux2 from "../images/clean.png";
import Linux3 from "../images/ewwindows.png";
import Linux1 from "../images/mac.png";
import { textChanger } from "./CellHoverContext";

const ImageGrid = () => {
	const { hoveredCell, setHoveredCell } = textChanger();
	const imageSet = [
		{ id: 1, file: Linux1 },
		{ id: 2, file: Linux2 },
		{ id: 3, file: Linux3 },
	];

	const getImage = () => {
		switch (hoveredCell) {
			case 1:
				return Linux1;
			case 2:
				return Linux2;
			case 3:
				return Linux3;
			default:
				return undefined;
		}
	};
	return (
		<div className="flex relative">
			<div className="rounded-full size-[40vw] dark:bg-slate-800  shadow-[0_0_9px_rgba(0,0,0,0.2),0_3px_8px_rgba(0,0,0,0.15)]" />
			<div className="absolute inset-0 size-[40vw] grid grid-cols-3 gap-x-6 items-center justify-center place-items-center">
				{imageSet.map((imageFile) => {
					return (
						<img
							src={imageFile.file}
							alt="Windows-Linux"
							className="h-27 w-80 flex items-center justify-center border-2 rounded-lg"
							onMouseEnter={() => setHoveredCell(imageFile.id)}
							onMouseLeave={() => setHoveredCell(null)}
						/>
					);
				})}
				<div className="col-span-3 h-90 w-160 flex items-center justify-center rounded-md bg-white dark:bg-black text-black dark:text-white">
					<AnimatePresence mode="wait">
						<motion.div
							key={hoveredCell}
							initial={{ opacity: 0, x: 10 }}
							animate={{ opacity: 1, x: 0 }}
							exit={{ opacity: 0, x: -10 }}
							transition={{ duration: 0.4 }}
						>
							{hoveredCell ? (
								<img
									src={getImage()}
									alt="Windows-Linux"
									className="object-cover [mask-image:radial-gradient(white,white)] rounded-md"
								/>
							) : (
								<div className="flex flex-col items-center justify-center">
									<Hover />
									<span className="text-xl">
										Hover over image to see details
									</span>
								</div>
							)}
						</motion.div>
					</AnimatePresence>
				</div>
			</div>
		</div>
	);
};

export default ImageGrid;
