import { Badgeclass } from "./Badgeclass";

export interface User {
    idCol?: string,
	name: string,
    email: string,
    avatar: string, 
    description?: string,
    skills?: string[],
    badges?: Badgeclass[],
  }