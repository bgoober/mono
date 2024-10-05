/* eslint-disable @typescript-eslint/consistent-type-imports */
import type NodeWallet from "@coral-xyz/anchor/dist/cjs/nodewallet";
import { Program, AnchorProvider, BN } from "@coral-xyz/anchor";
import {
  Keypair,
  PublicKey,
  type Connection,
  SystemProgram,
  Transaction,
} from "@solana/web3.js";
import { randomBytes } from "crypto";
import { createInitializeMintInstruction } from "@solana/spl-token";
import {
  ASSOCIATED_TOKEN_PROGRAM_ID,
  TOKEN_PROGRAM_ID,
} from "@solana/spl-token";
import toast from "react-hot-toast";
import DAO_IDL from "~/onChain/idls/dao.json";
import Staking_IDL from "~/onChain/idls/staking.json";
import Governance_IDL from "~/onChain/idls/governance.json";
import { DAOProgram } from "../types/daoProgram";
import { StakingProgram } from "../types/stakingProgram";
import { GovernanceProgram } from "../types/governanceProgram";

const TOKEN_METADATA_PROGRAM_ID = new PublicKey(
  "metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s",
);
const SYSVAR_ID = new PublicKey("Sysvar1nstructions1111111111111111111111111");

export const createFungibleDAO = () => {};
