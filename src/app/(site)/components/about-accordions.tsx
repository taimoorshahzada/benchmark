import React from "react";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "../components/ui/accordion";

function AboutAccordions() {
	return (
		<div>
			<Accordion type="single" collapsible>
				<AccordionItem value="item-1">
					<AccordionTrigger>Experts in Design & Build</AccordionTrigger>
					<AccordionContent>
						Lorem ipsum dolor sit amet finibus. Nec mus nisl mi diam vivamus si.
						Nisi egestas per orci vel id adipiscing dictum tempus dolor
						sollicitudin dui.
					</AccordionContent>
				</AccordionItem>

				<AccordionItem value="item-2">
					<AccordionTrigger>Experience & Diverse Team</AccordionTrigger>
					<AccordionContent>
						Lorem ipsum dolor sit amet finibus. Nec mus nisl mi diam vivamus si.
						Nisi egestas per orci vel id adipiscing dictum tempus dolor
						sollicitudin dui.
					</AccordionContent>
				</AccordionItem>

				<AccordionItem value="item-3">
					<AccordionTrigger>Comprehensive process</AccordionTrigger>
					<AccordionContent>
						Lorem ipsum dolor sit amet finibus. Nec mus nisl mi diam vivamus si.
						Nisi egestas per orci vel id adipiscing dictum tempus dolor
						sollicitudin dui.
					</AccordionContent>
				</AccordionItem>

				<AccordionItem value="item-4">
					<AccordionTrigger>Showhomes</AccordionTrigger>
					<AccordionContent>
						Lorem ipsum dolor sit amet finibus. Nec mus nisl mi diam vivamus si.
						Nisi egestas per orci vel id adipiscing dictum tempus dolor
						sollicitudin dui.
					</AccordionContent>
				</AccordionItem>

				<AccordionItem value="item-5">
					<AccordionTrigger>Virtual Reality</AccordionTrigger>
					<AccordionContent>
						Lorem ipsum dolor sit amet finibus. Nec mus nisl mi diam vivamus si.
						Nisi egestas per orci vel id adipiscing dictum tempus dolor
						sollicitudin dui.
					</AccordionContent>
				</AccordionItem>

				<AccordionItem value="item-6">
					<AccordionTrigger>Registered Master Builder</AccordionTrigger>
					<AccordionContent>
						Lorem ipsum dolor sit amet finibus. Nec mus nisl mi diam vivamus si.
						Nisi egestas per orci vel id adipiscing dictum tempus dolor
						sollicitudin dui.
					</AccordionContent>
				</AccordionItem>
			</Accordion>
		</div>
	);
}

export default AboutAccordions;
