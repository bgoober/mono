import styles from "~/styles/table.module.css";
import { getServerAuthSession } from "~/server/auth";
import campaignsJSON from "~/constants/campaigns.json";
import { type Campaign } from "~/server/api/routers/campaign/read";
import { CrownfundingContent } from "~/content/build/content";
import { DaoContent } from "~/content/build/dao/context";
import { Decimal } from "@prisma/client/runtime/library";
import { DAO, Proposal } from "~/server/api/routers/dao/read";
import { DAOType, ProposalStatus } from "@prisma/client";
import ManageProposal from "~/content/build/proposal/manage/content";
// import { DAO } from "@prisma/client";
const getProposal = async (): Promise<Proposal> => {
  return {
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
  };
};
async function DAOs() {
  const proposal = await getProposal();
  // table data

  return (
    <div className={styles.main}>
      <ManageProposal proposal={proposal} />
    </div>
  );
}

export default DAOs;
