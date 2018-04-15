import { Badgeclass } from "./Badgeclass";

export interface User {
    uid: string,
	name: string,
    email: string,
    avatar?: string, 
    description?: string,
    badges?: Badgeclass[],
  }