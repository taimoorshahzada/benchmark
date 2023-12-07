import SlideMenu from "@/app/(site)/components/SlideMenu";
import Footer from "@/app/(site)/components/footer";
import Header from "@/app/(site)/components/header";
import SocialIcons from "@/app/(site)/components/social-icons";
import Link from "next/link";
import React from "react";
import ContactImage from "../assets/images/Projects-Marshall-81500-x-1000-High-Res.jpg";
import Image from "next/image";

function Contact() {
  return (
		<section className="md:h-screen">
			<div>
				<div className="grid md:grid-cols-2">
					<div className="flex flex-col justify-between p-[10px] md:p-5 h-screen">
						<div className="flex justify-between items-start">
							<h1 className="mt-[68px] md:mt-0 text-sm-xl md:text-xl">
								Contact
							</h1>
							<div className="absolute top-5 right-0 md:relative md:flex space-x-5 ">
								<SocialIcons />
							</div>
						</div>
						<div className="grid grid-cols-2 gap-[10px] md:gap-[15px] text-xxs ">
							<input
								className="bg-[#F5F5F5] outline-none scrollbar-hide resize-none rounded-[5px] p-3"
								placeholder="First Name"
								name="first_name"
							></input>
							<input
								className="bg-[#F5F5F5] outline-none scrollbar-hide resize-none rounded-[5px] p-3 col-start-2"
								placeholder="Last Name"
								name="last_name"
							></input>
							<input
								className="bg-[#F5F5F5] outline-none scrollbar-hide resize-none rounded-[5px] p-3"
								placeholder="Email"
								name="email"
							></input>
							<input
								className="bg-[#F5F5F5] outline-none scrollbar-hide resize-none rounded-[5px] p-3 col-start-2"
								placeholder="Phone"
								name="phone"
							></input>
							<div className="relative h-[100px] col-span-2">
								<textarea
									className="bg-[#F5F5F5] outline-none scrollbar-hide resize-none rounded-[5px] p-3 w-full h-full"
									placeholder="Message"
									name="message"
								></textarea>
								<button
									className="flex absolute items-center right-3 bottom-[10px] bg-white p-3 rounded-[5px] z-10 transition duration-300 hover:bg-opacity-50"
									id={"closeMenuButton"}
								>
									<div className="mr-9">Send</div>
									<svg
										width="7"
										height="12"
										viewBox="0 0 7 12"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M6.3131 5.65685L0.65625 0L0.656372 11.3138L6.3131 5.65685Z"
											fill="black"
										/>
									</svg>
								</button>
							</div>
						</div>
						<div className="grid grid-cols-6 md:grid-cols-2 text-xxs md:text-xs-medium">
							<span className="col-span-4 col-start-3 md:col-start-1">
								<p>
									<span className="font-medium">
										Office/Milns Park Showhome
									</span>
									<br />
									Mon–Fri: 9am–5pm
									<br />
									<br />
								</p>
							</span>

							<span className="mb-4 md:mb-0 col-span-6 md:col-span-1 md:col-start-1">
								<Link
									href="tel:033438260"
									className="hover:opacity-50 transition duration-250 w-fit"
								>
									+64 3 343 8260
								</Link>
								<br />
								<Link
									href="mailto:info@benchmarkhomes.co.nz"
									className="hover:opacity-50 transition duration-250 w-fit"
								>
									info@benchmarkhomes.co.nz
								</Link>
								<br />
							</span>
							<span className="col-span-4 col-start-3 md:col-span-1 md:col-start-2">
								<p>
									{" "}
									12 Whitburn Ave, Milns Park,
									<br /> Halswell, Christchurch, New Zealand
									<br />
								</p>
							</span>
						</div>
					</div>

					<div className="max-h-screen">
						<Image
							className="w-full h-full object-cover"
							src={ContactImage}
							alt=""
							width={1000}
							height={900}
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
export default Contact;
