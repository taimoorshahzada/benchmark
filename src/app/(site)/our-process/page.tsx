import React from "react";
import {
  getAllProcesses,
  getAllWalkthroughs,
} from "../../../../sanity/sanity-utils";
import ProcessesList from "@/app/(site)/components/processes_list";
import ContactForm from "../components/contact-form";

export default async function OurProcess() {
	const processes = await getAllProcesses();
	const walkthroughs = await getAllWalkthroughs();

	return (
		<section className="bg-white">
			<div id="processes-container">
				<ProcessesList
					processes={processes.props.processes}
					walkthroughs={walkthroughs}
				/>
			</div>
			<div className="ml-auto md:w-1/2 grid grid-cols-2 gap-[10px] md:gap-[15px] text-xxs p-5  items-end">
				<p className="text-sm-xl md:text-xl w-full col-span-2 mb-48 md:mt-[33vh]">
					Get In Touch
				</p>
				<ContactForm />
			</div>
		</section>
	);
}
