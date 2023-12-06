import React from "react";
import {
  getAllProcesses,
  getAllWalkthroughs,
} from "../../../../sanity/sanity-utils";
import ProcessesList from "@/app/(site)/components/processes_list";

export default async function OurProcess() {
  const processes = await getAllProcesses();
  const walkthroughs = await getAllWalkthroughs();

  return (
    <section>
      <div id="processes-container">
        <ProcessesList
          processes={processes.props.processes}
          walkthroughs={walkthroughs}
        />
      </div>
    </section>
  );
}
