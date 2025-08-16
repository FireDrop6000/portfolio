const Linux = () => {
	return (
		<div className="flex relative">
			<div className="rounded-full w-[40vw] h-[40vw] dark:bg-slate-800  shadow-[0_0_9px_rgba(0,0,0,0.2),0_3px_8px_rgba(0,0,0,0.15)]" />
			<div className="absolute inset-0 w-[60vw] h-[60vw] grid grid-cols-2 grid-rows-2">
				<button className="flex items-center justify-center border border-transparent hover:bg-slate-700">
					Cell 1
				</button>
				<button className="flex items-center justify-center border border-transparent hover:bg-slate-700">
					Cell 2
				</button>
				<button className="flex items-center justify-center border border-transparent hover:bg-slate-700">
					Cell 3
				</button>
				<button className="flex items-center justify-center border border-transparent hover:bg-slate-700">
					Cell 4
				</button>
			</div>
		</div>
	);
};

export default Linux;
