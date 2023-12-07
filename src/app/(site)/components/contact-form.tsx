import React from "react";

function ContactForm() {
	return (
		<>
			<p className="text-xl w-full col-span-2 mb-48">Get In Touch</p>
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
		</>
	);
}

export default ContactForm;
