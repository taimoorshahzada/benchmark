import React from "react";
import Star from "./ui/star";
import { getReviews } from "../../../../sanity/sanity-utils";
import { Review } from "../../../../types/reviews";

export default function ReviewCards() {
	return (
		<div className="bg-white text-black p-5 rounded-lg h-auto w-[350px] flex flex-col justify-between space-y-10">
			<div className="flex justify-between items-center">
				<p className="text-xs-medium">Russell Tullis</p>
				<span className="flex">
					<Star />
					<Star />
					<Star />
					<Star />
					<Star />
				</span>
			</div>
			<p className="text-xxs">
				We used benchmark to build our new house in Cashmere Estate, we have
				been in the house for 7 months now and absolutely loving it. Richard was
				really enthusiastic about listening to our ideas and how we live as a
				family to create a unique design. Killian did a fantasic job of project
				management. We wanted a boutique high quality professional building
				company to build a modern architecural house for good value, and
				benchmark more than exceeded all our expectations; would build with them
				again! They made the whole process really straight forward and were a
				really enjoyable group of people to work with. Thanks team for the
				awesome house!
			</p>
			<div className="flex space-x-2">
				<span className="rounded-full h-2 w-2 bg-black"></span>
				<span className="rounded-full h-2 w-2 bg-grey"></span>
				<span className="rounded-full h-2 w-2 bg-grey"></span>
				<span className="rounded-full h-2 w-2 bg-grey bg-opacity-75"></span>
				<span className="rounded-full h-2 w-2 bg-grey bg-opacity-50"></span>
				<span className="rounded-full h-2 w-2 bg-grey bg-opacity-25"></span>
			</div>
		</div>
	);
}
