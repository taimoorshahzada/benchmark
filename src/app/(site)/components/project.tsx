import React from "react";
import Image from "next/image";
import Wilson from "../assets/images/Projects-Wilson-1500x1000-High-Res-1.jpg";

function Project() {
  return (
		<div className="w-full flex flex-col relative  px-5 col-span-12">
			<div className="">
				<Image
					className="object-cover w-full h-[85vh]"
					src={Wilson}
					alt="Wilson House"
				/>
			</div>

			<div className="grid grid-cols-12 mt-[10px] items-start">
				<p className="font-medium">Wilson</p>
				<span className="col-start-3 col-span-4 flex items-center space-x-5 text-[#999999] ">
					<p>View Home</p>
					<svg
						width="7"
						height="12"
						viewBox="0 0 7 12"
						fill="#999999"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M6.3131 5.65685L0.65625 0L0.656372 11.3138L6.3131 5.65685Z"
							fill="#999999"
						/>
					</svg>
				</span>

				<span className="col-start-10 col-span-3 ml-auto flex items-center justify-center">
					<div className="flex gap-x-[10px] gap-y-[10px] flex-wrap mb-5">
						<div className="bg-[#F5F5F5] rounded-[5px] p-[10px] text-xxs">
							220m2
						</div>
						<div className="bg-[#F5F5F5] rounded-[5px] p-[10px] text-xxs">
							3 Bedrooms
						</div>
						<div className="bg-[#F5F5F5] rounded-[5px] p-[10px] text-xxs">
							2 Bathrooms
						</div>
					</div>
				</span>
			</div>
		</div>
	);
}

export default Project;
