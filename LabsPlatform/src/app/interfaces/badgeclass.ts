export interface Badgeclass {
    idCol?: string,
    "@context": "https://w3id.org/openbadges/v2",
    type: "BadgeClass",
    id: string,
    name: string,
    description: string,
    image: string,
    criteria: string,
    tags: string[],
    issuer: string,
  }