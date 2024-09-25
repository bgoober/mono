export * from "./PeerReview";
export * from "./ResearchMintCollection";
export * from "./ResearchPaper";
export * from "./ResearcherProfile";

import { ResearcherProfile } from "./ResearcherProfile";
import { ResearchPaper } from "./ResearchPaper";
import { PeerReview } from "./PeerReview";
import { ResearchMintCollection } from "./ResearchMintCollection";

export const accountProviders = {
  ResearcherProfile,
  ResearchPaper,
  PeerReview,
  ResearchMintCollection,
};
