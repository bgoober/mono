import styles from "~/styles/table.module.css";
import { getServerAuthSession } from "~/server/auth";
import campaignsJSON from "~/constants/campaigns.json";
import { type Campaign } from "~/server/api/routers/campaign/read";
import { CrownfundingContent } from "~/content/build/content";
import { DaoContent } from "~/content/build/dao/context";
import { Decimal } from "@prisma/client/runtime/library";
import { DAO } from "~/server/api/routers/dao/read";
import { DAOType, ProposalStatus } from "@prisma/client";
import ManageDAO from "~/content/build/dao/manage/content";
// import { DAO } from "@prisma/client";
const getDAO = async (): Promise<DAO> => {
  return {
    id: "dfkljsew4kdsf",
    name: "Art DAO Collective",
    description:
      "An art-focused DAO that funds and supports digital creators across the globe.",
    circulatingSupply: new Decimal(500),
    allowSubDAO: true,
    parentDAOId: null,
    subDAOCreationThreshold: new Decimal(250),
    proposals: [
      {
        id: "proposal001",
        title: "Proposal 1",
        description: "Description 1",
        publicKey: "proposal001",
        createdAt: new Date(),
        updatedAt: new Date(),
        daoId: "dfkljsew4kdsf",
        creatorId: "art_creator_1",
        quorum: new Decimal(500),
        forVotes: 10,
        againstVotes: 5,
        abstainVotes: 2,
        endDate: new Date(),
        status: ProposalStatus.PENDING,
      },
    ],
    publicKey: "art123",
    isSubDAO: false,
    createdAt: new Date(),
    updatedAt: new Date(),
    type: DAOType.NFT,
    isHybrid: false,
    tokenId: "nft123",
    creatorId: "art_creator_1",
    creator: {
      id: "artist001",
      name: "Alice Doe",
      username: "alice_artist",
      email: "alice@example.com",
      emailVerified: new Date(),
      bio: "Digital artist specializing in generative art.",
      image: "alice_image_url",
      isVerified: true,
      hasFailedVerification: false,
      isAdmin: true,
      roles: [],
      createdAt: new Date(),
      updatedAt: new Date(),
      domains: [],
    },
    treasuryId: "treasury001",
    treasury: {
      createdAt: new Date(),
      updatedAt: new Date(),
      id: "treasury001",
      daoId: "dfkljsew4kdsf",
      balance: new Decimal(1200),
    },
  };
};
async function DAOs() {
  const dao = await getDAO();
  // table data

  return (
    <div className={styles.main}>
      <div className="container mx-auto px-4 py-8">
        <ManageDAO dao={dao} />
      </div>
    </div>
  );
}

export default DAOs;
