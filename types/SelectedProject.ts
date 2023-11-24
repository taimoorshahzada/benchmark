import { ProjectImage } from "./ProjectImage";

export interface SelectedProject {
  mainImage: ProjectImage;
  mainImageTitle: string;
  mainImageCol: string;
  image1: ProjectImage;
  Image1Title: string;
  image2: ProjectImage;
  Image2Title: string;
  _id: string;
  _rev: string;
  slug: string;
  _type: string;
  _updatedAt: string;
  _createdAt: string;
  mainProject: any;
  firstProject: any;
  secondProject: any;
}
