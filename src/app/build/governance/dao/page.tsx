import styles from "~/styles/table.module.css";
import { getServerAuthSession } from "~/server/auth";
import campaignsJSON from "~/constants/campaigns.json";
import { type Campaign } from "~/server/api/routers/campaign/read";
import { CrownfundingContent } from "~/content/build/content";
import { DaoContent } from "~/content/build/dao/context";
import { Decimal } from "@prisma/client/runtime/library";
import { DAO } from "~/server/api/routers/dao/read";
import { DAOType } from "@prisma/client";
// import { DAO } from "@prisma/client";

const getDAOs = async (): Promise<DAO[]> => {
  return [
    {
      id: "dfkljsew4kdsf",
      name: "Art DAO Collective",
      description:
        "An art-focused DAO that funds and supports digital creators across the globe.",
      circulatingSupply: new Decimal(500),
      allowSubDAO: true,
      parentDAOId: null,
      subDAOCreationThreshold: new Decimal(250),
      proposals: [],
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
    },
    {
      id: "d9w7es8cfkdl",
      name: "Gaming DAO",
      description:
        "A community-driven DAO for funding esports and indie game development.",
      circulatingSupply: new Decimal(2000),
      allowSubDAO: false,
      parentDAOId: null,
      subDAOCreationThreshold: new Decimal(500),
      proposals: [],
      publicKey: "gameDAO123",
      isSubDAO: false,
      createdAt: new Date(),
      updatedAt: new Date(),
      type: DAOType.NFT,
      isHybrid: true,
      tokenId: "game123",
      creatorId: "game_creator_2",
      creator: {
        id: "gamer001",
        name: "John Smith",
        username: "john_gamer",
        email: "john@example.com",
        emailVerified: new Date(),
        bio: "Esports enthusiast and DAO architect.",
        image: "john_image_url",
        isVerified: true,
        hasFailedVerification: false,
        isAdmin: false,
        roles: [],
        createdAt: new Date(),
        updatedAt: new Date(),
        domains: [],
      },
      treasuryId: "treasury002",
      treasury: {
        createdAt: new Date(),
        updatedAt: new Date(),
        id: "treasury002",
        daoId: "d9w7es8cfkdl",
        balance: new Decimal(3500),
      },
    },
    {
      id: "32dkflae993we",
      name: "Tech Innovation DAO",
      description:
        "A DAO to support cutting-edge technology startups and research initiatives.",
      circulatingSupply: new Decimal(3000),
      allowSubDAO: true,
      parentDAOId: null,
      subDAOCreationThreshold: new Decimal(700),
      proposals: [],
      publicKey: "techDAO456",
      isSubDAO: false,
      createdAt: new Date(),
      updatedAt: new Date(),
      type: DAOType.TOKEN,
      isHybrid: false,
      tokenId: "tech456",
      creatorId: "tech_creator_3",
      creator: {
        id: "tech001",
        name: "Eve Roberts",
        username: "eve_tech",
        email: "eve@example.com",
        emailVerified: new Date(),
        bio: "Tech entrepreneur and blockchain enthusiast.",
        image: "eve_image_url",
        isVerified: true,
        hasFailedVerification: false,
        isAdmin: false,
        roles: [],
        createdAt: new Date(),
        updatedAt: new Date(),
        domains: [],
      },
      treasuryId: "treasury003",
      treasury: {
        createdAt: new Date(),
        updatedAt: new Date(),
        id: "treasury003",
        daoId: "32dkflae993we",
        balance: new Decimal(5000),
      },
    },
    {
      id: "as8fh2la329ke",
      name: "Education DAO",
      description:
        "Supporting decentralized education platforms and initiatives.",
      circulatingSupply: new Decimal(4000),
      allowSubDAO: true,
      parentDAOId: null,
      subDAOCreationThreshold: new Decimal(1000),
      proposals: [],
      publicKey: "eduDAO789",
      isSubDAO: false,
      createdAt: new Date(),
      updatedAt: new Date(),
      type: DAOType.NFT,
      isHybrid: true,
      tokenId: "edu789",
      creatorId: "edu_creator_4",
      creator: {
        id: "edu001",
        name: "David Lee",
        username: "david_edu",
        email: "david@example.com",
        emailVerified: new Date(),
        bio: "Passionate about transforming education with blockchain.",
        image: "david_image_url",
        isVerified: true,
        hasFailedVerification: false,
        isAdmin: false,
        roles: [],
        createdAt: new Date(),
        updatedAt: new Date(),
        domains: [],
      },
      treasuryId: "treasury004",
      treasury: {
        createdAt: new Date(),
        updatedAt: new Date(),
        id: "treasury004",
        daoId: "as8fh2la329ke",
        balance: new Decimal(8000),
      },
    },
    {
      id: "ah3mkle9wa3rt",
      name: "Climate Action DAO",
      description:
        "A DAO funding projects focused on climate change mitigation and sustainability.",
      circulatingSupply: new Decimal(1000),
      allowSubDAO: false,
      parentDAOId: null,
      subDAOCreationThreshold: new Decimal(600),
      proposals: [],
      publicKey: "climateDAO123",
      isSubDAO: false,
      createdAt: new Date(),
      updatedAt: new Date(),
      type: DAOType.HYBRID,
      isHybrid: true,
      tokenId: "climate123",
      creatorId: "climate_creator_5",
      creator: {
        id: "climate001",
        name: "Sarah Green",
        username: "sarah_climate",
        email: "sarah@example.com",
        emailVerified: new Date(),
        bio: "Environmental advocate and blockchain enthusiast.",
        image: "sarah_image_url",
        isVerified: true,
        hasFailedVerification: false,
        isAdmin: true,
        roles: [],
        createdAt: new Date(),
        updatedAt: new Date(),
        domains: [],
      },
      treasuryId: "treasury005",
      treasury: {
        createdAt: new Date(),
        updatedAt: new Date(),
        id: "treasury005",
        daoId: "ah3mkle9wa3rt",
        balance: new Decimal(3000),
      },
    },
    {
      id: "io94kdmdw49x",
      name: "Music Creators DAO",
      description:
        "DAO for musicians to fund albums, concerts, and collaborations.",
      circulatingSupply: new Decimal(700),
      allowSubDAO: false,
      parentDAOId: null,
      subDAOCreationThreshold: new Decimal(300),
      proposals: [],
      publicKey: "musicDAO123",
      isSubDAO: false,
      createdAt: new Date(),
      updatedAt: new Date(),
      type: DAOType.TOKEN,
      isHybrid: false,
      tokenId: "music123",
      creatorId: "music_creator_6",
      creator: {
        id: "music001",
        name: "Lana Sound",
        username: "lana_music",
        email: "lana@example.com",
        emailVerified: new Date(),
        bio: "Independent musician with a passion for decentralized platforms.",
        image: "lana_image_url",
        isVerified: true,
        hasFailedVerification: false,
        isAdmin: true,
        roles: [],
        createdAt: new Date(),
        updatedAt: new Date(),
        domains: [],
      },
      treasuryId: "treasury006",
      treasury: {
        createdAt: new Date(),
        updatedAt: new Date(),
        id: "treasury006",
        daoId: "io94kdmdw49x",
        balance: new Decimal(1500),
      },
    },
    {
      id: "29sdkfslfwe9",
      name: "Film DAO",
      description: "DAO focused on funding and producing independent films.",
      circulatingSupply: new Decimal(2000),
      allowSubDAO: true,
      parentDAOId: null,
      subDAOCreationThreshold: new Decimal(700),
      proposals: [],
      publicKey: "filmDAO789",
      isSubDAO: false,
      createdAt: new Date(),
      updatedAt: new Date(),
      type: DAOType.HYBRID,
      isHybrid: false,
      tokenId: "film123",
      creatorId: "film_creator_7",
      creator: {
        id: "film001",
        name: "Mark Johnson",
        username: "mark_film",
        email: "mark@example.com",
        emailVerified: new Date(),
        bio: "Film producer looking to revolutionize the industry with blockchain.",
        image: "mark_image_url",
        isVerified: true,
        hasFailedVerification: false,
        isAdmin: false,
        roles: [],
        createdAt: new Date(),
        updatedAt: new Date(),
        domains: [],
      },
      treasuryId: "treasury007",
      treasury: {
        createdAt: new Date(),
        updatedAt: new Date(),
        id: "treasury007",
        daoId: "29sdkfslfwe9",
        balance: new Decimal(5000),
      },
    },
    // Additional 13 entries would be of similar format with unique data...
  ];
};

async function DAOs() {
  // table data
  const daos = await getDAOs();
  const session = await getServerAuthSession();

  return (
    <div className={styles.main}>
      <DaoContent daos={daos} session={session} />
    </div>
  );
}

export default DAOs;
