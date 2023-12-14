import React from "react";
import Star from "./ui/star";
import { getReviews } from "../../../../sanity/sanity-utils";
import { Review } from "../../../../types/reviews";
import {
	Tabs,
	TabsContent,
	TabsList,
	TabsTrigger,
} from "../components/ui/tabs";

export default function ReviewCards() {
	const reviews = getReviews();
	return (
		<div className="bg-white  text-black mx-[10px] md:mx-0 p-5 rounded-lg h-auto md:w-[350px] flex flex-col justify-between space-y-10">
			<div>
				<Tabs defaultValue="review-1" className="">
					<TabsContent value="review-1">
						<div className="flex justify-between items-center mb-10">
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
							We used benchmark to build our new house in Cashmere Estate, we
							have been in the house for 7 months now and absolutely loving it.
							Richard was really enthusiastic about listening to our ideas and
							how we live as a family to create a unique design. Killian did a
							fantasic job of project management. We wanted a boutique high
							quality professional building company to build a modern
							architecural house for good value, and benchmark more than
							exceeded all our expectations; would build with them again! They
							made the whole process really straight forward and were a really
							enjoyable group of people to work with. Thanks team for the
							awesome house!
						</p>
					</TabsContent>
					<TabsContent value="review-2">
						<div className="flex justify-between items-center mb-10">
							<p className="text-xs-medium">Emily Timothy</p>
							<span className="flex">
								<Star />
								<Star />
								<Star />
								<Star />
								<Star />
							</span>
						</div>
						<p className="text-xxs">
							We were impressed with Benchmark from the start. The small, warm
							team really listened and cared about our vision. Richard
							completely nailed our brief and designed a concept plan that we
							instantly loved. We valued the guidance that Benchmark offered and
							passion for attention to detail. We built in challenging times
							with rising costs and delays in supplies. Despite this Benchmark
							remained transparent and always responded to any concerns we had;
							listening and understanding. Benchmark instilled trust which was
							paramount in the journey of building. We absolutely love our
							beautiful home which is so well designed - delivering elegant form
							and function with all the features we dreamed of.
						</p>
					</TabsContent>
					<TabsContent value="review-3">
						<div className="flex justify-between items-center mb-10">
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
							We used benchmark to build our new house in Cashmere Estate, we
							have been in the house for 7 months now and absolutely loving it.
							Richard was really enthusiastic about listening to our ideas and
							how we live as a family to create a unique design. Killian did a
							fantasic job of project management. We wanted a boutique high
							quality professional building company to build a modern
							architecural house for good value, and benchmark more than
							exceeded all our expectations; would build with them again! They
							made the whole process really straight forward and were a really
							enjoyable group of people to work with. Thanks team for the
							awesome house!
						</p>
					</TabsContent>
					<TabsContent value="review-4">
						<div className="flex justify-between items-center mb-10">
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
							We used benchmark to build our new house in Cashmere Estate, we
							have been in the house for 7 months now and absolutely loving it.
							Richard was really enthusiastic about listening to our ideas and
							how we live as a family to create a unique design. Killian did a
							fantasic job of project management. We wanted a boutique high
							quality professional building company to build a modern
							architecural house for good value, and benchmark more than
							exceeded all our expectations; would build with them again! They
							made the whole process really straight forward and were a really
							enjoyable group of people to work with. Thanks team for the
							awesome house!
						</p>
					</TabsContent>
					<TabsContent value="review-5">
						<div className="flex justify-between items-center mb-10">
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
							We used benchmark to build our new house in Cashmere Estate, we
							have been in the house for 7 months now and absolutely loving it.
							Richard was really enthusiastic about listening to our ideas and
							how we live as a family to create a unique design. Killian did a
							fantasic job of project management. We wanted a boutique high
							quality professional building company to build a modern
							architecural house for good value, and benchmark more than
							exceeded all our expectations; would build with them again! They
							made the whole process really straight forward and were a really
							enjoyable group of people to work with. Thanks team for the
							awesome house!
						</p>
					</TabsContent>
					<TabsContent value="review-6">
						<div className="flex justify-between items-center mb-10">
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
							We used benchmark to build our new house in Cashmere Estate, we
							have been in the house for 7 months now and absolutely loving it.
							Richard was really enthusiastic about listening to our ideas and
							how we live as a family to create a unique design. Killian did a
							fantasic job of project management. We wanted a boutique high
							quality professional building company to build a modern
							architecural house for good value, and benchmark more than
							exceeded all our expectations; would build with them again! They
							made the whole process really straight forward and were a really
							enjoyable group of people to work with. Thanks team for the
							awesome house!
						</p>
					</TabsContent>
					<TabsList>
						<TabsTrigger value="review-1"></TabsTrigger>
						<TabsTrigger value="review-2"></TabsTrigger>
						<TabsTrigger value="review-3"></TabsTrigger>
						<TabsTrigger value="review-4"></TabsTrigger>
						<TabsTrigger value="review-5"></TabsTrigger>
						<TabsTrigger value="review-6"></TabsTrigger>
					</TabsList>
				</Tabs>
			</div>
		</div>
	);
}
