export interface Badgeclass {
    idCol: string,
    "@context": "https://w3id.org/openbadges/v2",
    type: "BadgeClass",
    id: string,
    name: "email",
    description: String,
    image: String,
    criteria: String,
    tags: String[],
    issuer: String,
  }