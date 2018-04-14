export interface Badgeclass {
    idCol?: string,
    "@context": "https://w3id.org/openbadges/v2",
    type: "BadgeClass",
    id: string,
    name: string,
    description: String,
    image: String,
    criteria: String,
    tags: String[],
    issuer: String,
  }