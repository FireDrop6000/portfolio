import { createContext, type ReactNode, useContext, useState } from "react";

type CellHoverContextType = {
	hoveredCell: number | null;
	setHoveredCell: (cell: number | null) => void;
};

const CellHoverContext = createContext<CellHoverContextType | undefined>(
	undefined,
);

export function HoveredCellProvider({ children }: { children: ReactNode }) {
	const [hoveredCell, setHoveredCell] = useState<number | null>(null);
	return (
		<CellHoverContext.Provider value={{ hoveredCell, setHoveredCell }}>
			{children}
		</CellHoverContext.Provider>
	);
}

export function textChanger() {
	const context = useContext(CellHoverContext);
	if (!context) {
		throw new Error("useHoveredCell must be under HoveredCellProvider");
	}
	return context;
}
