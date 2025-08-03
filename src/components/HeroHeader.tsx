import type { ReactNode } from "react";

interface Props {
	children: ReactNode;
}

const HeroHeader = ({ children }: Props) => {
	return (
		<div className="flex items-center justify-center font-bold text-5xl border-b-3 border-b-black py-5 px-2">
			{children}
		</div>
	);
};

export default HeroHeader;
