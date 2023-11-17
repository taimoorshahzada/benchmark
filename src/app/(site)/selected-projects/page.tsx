import Image from "next/image";
import { SelectedProject } from "../../../../types/SelectedProject";
import Link from "next/link";
import { getProjects } from "../../../../sanity/sanity-utils";

export default async function SelectedProjects() {
  const selectedProjectsSections = await getProjects();
  return (
    <div className="mt-6">
      <h1 className="font-medium text-3xl mb-large">
        Selected <br /> Projects
      </h1>
      <div className="col-span-12 selected-projects w-full">
        {selectedProjectsSections.props.selectedProjectsSections.map(
          (project: SelectedProject) => (
            <div key={project._id} className="mx-5 mb-[200px]">
              <div className="grid grid-cols-12 gap-x-5 text-xs-medium mx-auto w-full border-grey border-dashed border-t border-1">
                <div
                  className={`col-span-6 row-start-1 flex-col flex ${
                    project.mainImageCol == "First"
                      ? "col-start-1"
                      : project.mainImageCol == "Second"
                      ? "col-start-4"
                      : "col-start-7"
                  }`}
                >
                  <div className="mb-9 mt-2">{project.mainImageTitle}</div>
                  {project.mainProject ? (
                    <Link
                      href={`project/${project.mainProject._ref}`}
                      className="selected-projects-image-container relative"
                    >
                      <Image
                        className="selected-projects-image"
                        src={project.mainImage.imageUrl}
                        alt={project.mainImageTitle}
                      />
                      <div className="selected-projects-image-blur absolute w-full h-full top-0 left-0"></div>
                    </Link>
                  ) : (
                    <div className="selected-projects-image-container relative">
                      <Image
                        className="selected-projects-image"
                        src={project.mainImage.imageUrl}
                        alt={project.mainImageTitle}
                        width={1000}
                        height={1000}
                      />

                      <div className="selected-projects-image-blur absolute w-full h-full top-0 left-0"></div>
                    </div>
                  )}
                </div>
                <div
                  className={`col-span-3 row-start-1 flex-col flex ${
                    project.mainImageCol == "First"
                      ? "col-start-7"
                      : "col-start-1"
                  }`}
                >
                  <div className="mb-9 mt-2">{project.Image1Title}</div>
                  {project.firstProject ? (
                    <Link
                      href={`project/${project.firstProject._ref}`}
                      className="selected-projects-image-container relative"
                    >
                      <Image
                        className="selected-projects-image"
                        src={project.image1.imageUrl}
                        alt={project.Image1Title}
                        width={1000}
                        height={1000}
                      />

                      <div className="selected-projects-image-blur absolute w-full h-full top-0 left-0"></div>
                    </Link>
                  ) : (
                    <div className="selected-projects-image-container relative">
                      <Image
                        className="selected-projects-image"
                        src={project.image1.imageUrl}
                        alt={project.Image1Title}
                        width={1000}
                        height={1000}
                      />
                      <div className="selected-projects-image-blur absolute w-full h-full top-0 left-0"></div>
                    </div>
                  )}
                </div>
                <div
                  className={`col-span-3 row-start-1 flex-col flex ${
                    project.mainImageCol == "Third"
                      ? "col-start-4"
                      : "col-start-10"
                  }`}
                >
                  <div className="mb-9 mt-2">{project.Image2Title}</div>
                  {project.secondProject ? (
                    <Link
                      href={`project/${project.secondProject._ref}`}
                      className="selected-projects-image-container relative"
                    >
                      <Image
                        className="selected-projects-image"
                        src={project.image2.imageUrl}
                        alt={project.Image2Title}
                        width={1000}
                        height={1000}
                      />

                      <div className="selected-projects-image-blur absolute w-full h-full top-0 left-0"></div>
                    </Link>
                  ) : (
                    <div className="selected-projects-image-container relative">
                      <Image
                        className="selected-projects-image"
                        src={project.image2.imageUrl}
                        alt={project.Image2Title}
                        width={1000}
                        height={1000}
                      />
                      <div className="selected-projects-image-blur absolute w-full h-full top-0 left-0"></div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}
