import { HoveredCellProvider } from "./CellHoverContext";
import ImageGrid from "./ImageGrid";
import LinuxDescriptions from "./LinuxDescriptions";

const Linux = () => {
	return (
		<div className="hidden md:flex items-center justify-center gap-25 mt-60">
			<HoveredCellProvider>
				<ImageGrid />
				<LinuxDescriptions />
			</HoveredCellProvider>
		</div>
	);
};

export default Linux;
