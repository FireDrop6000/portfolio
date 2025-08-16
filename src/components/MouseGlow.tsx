import { useEffect, useState } from "react";

const MouseGlow = () => {
	const [pos, setPos] = useState({ x: 0, y: 0 });

	useEffect(() => {
		const handleMove = (event: MouseEvent) => {
			setPos({ x: event.clientX, y: event.clientY });
		};

		window.addEventListener("mousemove", handleMove);
		return () => window.removeEventListener("mousemove", handleMove);
	});
	return (
		<div
			className="pointer-events-none fixed top-0 left-0 w-screen h-screen"
			style={{
				background: `radial-gradient(800px at ${pos.x}px ${pos.y}px, rgba(152,102,204,0.15), transparent 90%)`,
			}}
		/>
	);
};

export default MouseGlow;
