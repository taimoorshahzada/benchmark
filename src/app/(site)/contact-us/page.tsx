import SlideMenu from "@/app/(site)/components/SlideMenu";
import Footer from "@/app/(site)/components/footer";
import Header from "@/app/(site)/components/header";
import SocialIcons from "@/app/(site)/components/social-icons";
import Link from "next/link";
import React from "react";

function Contact() {
	return (
		<section className="px-5">
			<SlideMenu />
			<Header />
			<div className="h-screen overflow-scroll top-0 fixed scrollbar-hide w-full">
				<div className="grid grid-cols-2 h-screen">
					<div className="flex flex-col justify-between">
						<div className="flex justify-between items-start">
							<h1 className="text-xl">Contact</h1>
							<div className="flex space-x-5 m-5">
								<SocialIcons />
							</div>
						</div>
						<div className="grid grid-cols-2 gap-[10px] text-xxs">
							<input className="bg-[#F5F5F5] outline-none scrollbar-hide resize-none rounded-[5px] p-3" placeholder="First Name" name="first_name"></input>
							<input className="bg-[#F5F5F5] outline-none scrollbar-hide resize-none rounded-[5px] p-3 col-start-2" placeholder="Last Name" name="last_name"></input>
							<input className="bg-[#F5F5F5] outline-none scrollbar-hide resize-none rounded-[5px] p-3" placeholder="Email" name="email"></input>
							<input className="bg-[#F5F5F5] outline-none scrollbar-hide resize-none rounded-[5px] p-3 col-start-2" placeholder="Phone" name="phone"></input>
							<div className="relative h-[100px] col-span-2">
								<textarea className="bg-[#F5F5F5] outline-none scrollbar-hide resize-none rounded-[5px] p-3 w-full h-full" placeholder="Message" name="message"></textarea>
								<button
									className="flex absolute items-center right-3 bottom-[10px] bg-white p-3 rounded-[5px] z-10 transition duration-300 hover:bg-opacity-50"
									id={"closeMenuButton"}
								>
									<div className="mr-9">Send</div>
									<svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M6.3131 5.65685L0.65625 0L0.656372 11.3138L6.3131 5.65685Z" fill="black"/>
									</svg>
								</button>
							</div>
						</div>
						<div>
							<span className="text-xs-medium">
								<p>
									Office/Milns Park Showhome
									<br />
									Mon–Fri: 9am-5pm
									<br />
									<br />
								</p>
							</span>
							<div className="text-xs-medium flex justify-between ">
								<span>
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
								</span>
								<span>
									<p>
										{" "}
										12 Whitburn Ave, Milns Park,
										<br /> Halswell, Christchurch, New Zealand
									</p>
								</span>
							</div>
						</div>
					</div>

					<div>Image</div>
				</div>
			</div>
			<div className="h-screen"></div>
			<Footer />
		</section>
	);
}
export default Contact;
