export interface Showhome {
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
}
