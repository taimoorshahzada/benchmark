import React from "react";

function StudioHeader() {
	return (
		<div className="p-3 w-full h-auto flex justify-between items-center bg-white text-black">
			<div>
				<svg
					width="80"
					height="20"
					viewBox="0 0 80 20"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M20 0L0 20V0H20ZM20 0L40 20H80L60 0H20Z"
						fill="black"
					/>
				</svg>

				<p>Benchmark Homes</p>
			</div>
			<a href="#">View Live Site</a>
		</div>
	);
}

export default StudioHeader;
