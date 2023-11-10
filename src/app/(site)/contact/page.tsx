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
			<div className="col-span-12 grid grid-cols-2 h-screen gap-5">
				<div className="flex flex-col justify-between">
					<div className="flex justify-between items-start">
						<h1 className="text-xl">Contact</h1>
						<div className="flex space-x-5">
							<SocialIcons />
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

			<Footer />
		</section>
	);
}
export default Contact;
