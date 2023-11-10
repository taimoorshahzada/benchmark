"use client"

interface ProjectImage {
  imageUrl: string
}

interface DateTimeOccurrence {
  day_range: string;
  time_range: string;
}

interface Showhome {
  landscape_hero: ProjectImage;
  portrait_hero: ProjectImage;
  title: string;
  description: string;
  features: string[];
  interest_points: string[];
  images: ProjectImage[];
  hero_display: string;
  _id: string;
  showhome_times: DateTimeOccurrence[];
  address: string;
}

export default function ShowhomeInfo({showhomes, id}: any) {

  const showhome: Showhome = showhomes.find((showhome: Showhome) => showhome._id === id);

  return (
    <div className="col-span-12 flex px-5 gap-x-5 mb-[200px]">
      <div className="w-1/2 flex gap-x-5">
        <div className="w-1/2 grid grid-cols-3 gap-x-5">
          <div className="col-span-3 mb-5 text-xs-medium">
            Open Hours
          </div>
          {showhome.showhome_times.map((occurrence: DateTimeOccurrence, index: number) => (
            <div key={index} className="col-span-3 grid grid-cols-3 gap-x-5 text-xs">
              <div className="col-span-1">
                {occurrence.day_range}
              </div>
              <div className="col-span-2 col-start-2">
                {occurrence.time_range}
              </div>
            </div>
          ))}
        </div>
        <div className="w-1/2 flex flex-col text-xs-medium">
          Address:
          <div className="mt-5 text-xs">
            {showhome.address}
          </div>
        </div>
      </div>
      <div className="w-1/2">

      </div>
    </div>
  )
}