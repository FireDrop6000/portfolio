const Logo = () => {
	return (
		<svg
			id="Layer_1"
			data-name="Layer 1"
			xmlns="http://www.w3.org/2000/svg"
			xmlnsXlink="http://www.w3.org/1999/xlink"
			viewBox="0 0 359.29 359.67"
			className="w-6 h-6"
		>
			<defs>
				<style>
					{
						"\n      .cls-1 {\n        fill: url(#linear-gradient-2);\n      }\n\n      .cls-2 {\n        fill: url(#linear-gradient);\n      }\n    "
					}
				</style>
				<linearGradient
					id="linear-gradient"
					x1={181.4}
					y1={181.59}
					x2={8.66}
					y2={8.85}
					gradientUnits="userSpaceOnUse"
				>
					<stop offset={0} stopColor="#8bd2d3" />
					<stop offset={1} stopColor="#207ea1" />
				</linearGradient>
				<linearGradient
					id="linear-gradient-2"
					x1={181.96}
					y1={181.78}
					x2={82.93}
					y2={82.76}
					xlinkHref="#linear-gradient"
				/>
			</defs>
			<path
				className="cls-2"
				d="M0,359.67V29.97C0,13.42,13.34,0,29.79,0h329.5l-59.58,62.71H91.08c-16.41,0-29.72,13.35-29.79,29.86l-.8,209.92L0,359.67Z"
			/>
			<path
				className="cls-1"
				d="M76.07,287.29l211.58-211.21H99.19c-12.77,0-23.12,10.33-23.12,23.08v188.13Z"
			/>
		</svg>
	);
};

export default Logo;
