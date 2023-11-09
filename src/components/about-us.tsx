import Image from "next/image";
import Photo from "../app/assets/images/Home-Benchmark-Homes-1000-x-1000-High-Res-560x400.jpg";
import CountUp from "react-countup";

function AboutSection() {
	return (
		<section className="col-span-12">
			<div className="font-medium text-sm mb-5 h-[300px] relative">
				<p className="absolute bottom-0">About Us</p>
			</div>

			<div className="col-span-12 grid grid-cols-2 min-h-screen">
				<div>
					<div className="border-b border-dotted border-grey pt-3 pb-24">
						<h4 className="pt-3 text-xs-medium">Years of Experience</h4>
						<CountUp
							start={0}
							end={25}
							duration={2.75}
							suffix="+"
							className="font-medium text-2xl mb-24"
						/>
					</div>

					<div className="border-y border-dotted border-grey pt-3 pb-24">
						<h4 className="pt-3 text-xs-medium">Master Builders Awards</h4>
						<CountUp
							start={0}
							end={250}
							duration={2.75}
							suffix="+"
							className="font-medium text-2xl mb-24"
						/>
					</div>

					<div className="border-y border-dotted border-grey pt-3 pb-24">
						<h4 className="pt-3 text-xs-medium">Houses Built</h4>
						<CountUp
							start={0}
							end={1500}
							duration={2.75}
							suffix="+"
							separator=""
							className="font-medium text-2xl mb-24"
						/>
					</div>
				</div>

				<div className="bg-black sticky top-2">
					<Image src={Photo} alt="Richard and Sam" width={2000} height={1000} />
				</div>
			</div>
		</section>
	);
}

export default AboutSection;
