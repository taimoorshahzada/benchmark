"use client"

interface ProjectImage {
  imageUrl: string
}

interface Project {
  landscape_hero: ProjectImage;
  portrait_hero: ProjectImage;
  title: string;
  description: string;
  features: string[];
  interest_points: string[];
  images: ProjectImage[];
  hero_display: string;
}

export default function ProjectImages({projects, id}: any) {
  const project: Project = projects.find((project: any) => project._id === id);
  return (
    <div className="col-span-12 grid grid-cols-12 gap-x-5">
      {project.hero_display == "Landscape" ?
        <div className="col-span-12 grid grid-cols-12 gap-x-5">
          {
            project.landscape_hero != null ?
              <img alt="" src={project.landscape_hero.imageUrl} className="col-span-12 w-full"/>
              :
              ""
          }
        </div>
        :
        <div className="col-span-12 grid grid-cols-12 gap-x-5 gap-y-[200px]">
          {
            project.portrait_hero != null ?
              <img alt="" src={project.portrait_hero.imageUrl} className="col-span-6 col-start-7 w-full"/>
              :
              ""
          }
          {
            project.landscape_hero != null ?
              <img alt="" src={project.landscape_hero.imageUrl} className="col-span-12 w-full"/>
              :
              ""
          }
        </div>
      }
      <div className="col-span-12 grid grid-cols-12 gap-x-5 gap-y-[200px] my-[200px]">
        {project.images?.map((image: {imageUrl: string}, index: number) => (
          <img key={index} alt="" src={image.imageUrl} className={`${(index % 7) % 4 == 0 ? "col-span-6": "col-span-3"} ${(index % 7) == 6 ? "col-start-4": ""} ${(index % 7) == 1 ? "col-start-10": ""} ${[2, 4].includes(index % 7) ? "col-start-7": "col-start-1"} w-full`}/>
        ))}
      </div>
      {project.hero_display == "Landscape" ?
        <div className="col-span-12 grid grid-cols-12 gap-x-5">
          {project.portrait_hero != null ?
            <img alt="" src={project.portrait_hero.imageUrl} className="col-span-6 col-start-7 w-full mb-[200px]"/>
            :
            ""
          }
        </div>
        :
        ""
      }
    </div>
  )
}