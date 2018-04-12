export interface Assertion {
    "@context": "https://w3id.org/openbadges/v2",
    type: "Assertion",
    id: string,
    recipient: {
      type: "email",
      identity: String,
      hashed: false
    },
    image: String,
    evidence: String,
    issuedOn: String,
    expires: String,
    badge: String,
    verification: {
      type: "hosted"
    }
  }