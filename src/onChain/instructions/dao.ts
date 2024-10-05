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

export const createFungibleDAO = async (
  wallet: NodeWallet,
  connection: Connection,
) => {
  const provider = new AnchorProvider(connection, wallet, {});

  const dao_program = new Program(DAO_IDL as unknown as DAOProgram, provider);

  const dao_seed = new BN(randomBytes(8));
  const proposal_fee_bounty = new BN(1e6);
  const proposal_fee_executable = new BN(1e6);
  const proposal_fee_vote = new BN(1e6);
  const proposal_fee_vote_multiple = new BN(1e6);
  const min_quorum = 1;
  const min_threshold = new BN(1);
  //1 Hour in slots
  const max_expiry = new BN(2160000);
  const proposal_analysis_period = new BN(0);
  const threshold_create_proposal = new BN(1);
  const sub_dao_fee = new BN(1e6);
  const n_quorum_epoch = 0;
  const mint_dao = new Keypair();

  const circulating_supply = new BN(100000000);

  const createMintIx = createInitializeMintInstruction(
    mint_dao.publicKey,
    6,
    wallet.publicKey,
    wallet.publicKey,
  );

  const createDaoIX = await dao_program.methods
    .initialize(
      dao_seed,
      proposal_fee_bounty,
      proposal_fee_executable,
      proposal_fee_vote,
      proposal_fee_vote_multiple,
      max_expiry,
      min_threshold,
      min_quorum,
      proposal_analysis_period,
      n_quorum_epoch,
      threshold_create_proposal,
      mint_dao,
      mint_dao,
      circulating_supply,
      true, //ALLOW-SUB_DAO
      dao_seed,
      sub_dao_fee,
      wallet.publicKey,
    )
    .accounts({
      initializer: wallet.publicKey,
      treasuryTeam: wallet.publicKey,
    })
    .instruction();

  const { blockhash, lastValidBlockHeight } =
    await provider.connection.getLatestBlockhash();
  const txInfo = {
    /** The transaction fee payer */
    feePayer: wallet.publicKey,
    /** A recent blockhash */
    blockhash: blockhash,
    /** the last block chain can advance to before tx is exportd expired */
    lastValidBlockHeight: lastValidBlockHeight,
  };

  const tx = new Transaction(txInfo);
  tx.add(createMintIx).add(createDaoIX);
  const signature = await provider.sendAndConfirm(tx, [], {
    skipPreflight: true,
  });
  toast.success("NFT purchased successfully");

  return signature;
};
