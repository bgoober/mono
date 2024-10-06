import { useWallet, useConnection } from '@solana/wallet-adapter-react';
import bs58 from 'bs58';
import { FC, useCallback } from 'react';
import daoIdl from "../idls/dao.json";
import governanceIdl from "../idls/governance.json";
import stakingIdl from "../idls/staking.json";
import { Cluster, Keypair, PublicKey, SystemProgram, Transaction } from '@solana/web3.js';
import { AnchorProvider, BN, Program,  } from '@coral-xyz/anchor';
import { randomBytes } from 'crypto';
import {
    ASSOCIATED_TOKEN_PROGRAM_ID,
    Account,
    TOKEN_2022_PROGRAM_ID,
    TOKEN_PROGRAM_ID,
    getAssociatedTokenAddressSync,
    getOrCreateAssociatedTokenAccount,
    mintTo,
  } from "@solana/spl-token";
  import type NodeWallet from "@coral-xyz/anchor/dist/cjs/nodewallet";
  import toast from "react-hot-toast";
const SYSVAR_ID = new PublicKey('Sysvar1nstructions1111111111111111111111111');
const mint_dao = new PublicKey('7sXdmHw7Stsw3c26Uxnt3oY1rvDNcLuyfkh5Fcu3mBpJ');
const treasury_team = new PublicKey('7sXdmHw7Stsw3c26Uxnt3oY1rvDNcLuyfkh5Fcu3mBpJ');


const idl_string_dao = JSON.stringify(daoIdl)
const idl_object_dao = JSON.parse(idl_string_dao)

const idl_string_goverannce = JSON.stringify(governanceIdl)
const idl_object_governance = JSON.parse(idl_string_goverannce)

const idl_string_staking = JSON.stringify(stakingIdl)
const idl_object_staking = JSON.parse(idl_string_staking)

const DAO_PROGRAM_ID = new PublicKey(daoIdl.address)
const GOVERNANCE_PROGRAM_ID = new PublicKey(governanceIdl.address)
const STAKING_PROGRAM_ID = new PublicKey(stakingIdl.address)

export const ExecuteProposal: FC = () => {
    const { publicKey, wallet } = useWallet();
    const { connection } = useConnection();
  
    const getProvider = () => {
      if (!publicKey || !wallet) {
        throw new Error("Wallet not connected");
      }
      return new AnchorProvider(
        connection,
        wallet.adapter as unknown as NodeWallet,
        AnchorProvider.defaultOptions(),
      );
    };

    const onClick = useCallback(async () => {
    try {
    const anchProvider = getProvider()
    const program = new Program(idl_object_governance, anchProvider);

    const dao_seed = new BN(randomBytes(8));

    //needs to be sequential
    const id = new BN(1);
    const name: string = "Worthy";
    const metadataURI: string = "teste";
    const quorum: number = 2;
    const threshold = new BN(2);
    const expiry = new BN(100000);
    // array of 3 elements[0,0,0]
    //const FOR: number = 0;
    //const AGAINST: number = 1;
    // const ABSTAIN: number = 2; 
    const choices: number = 3;
    const analysis_period = new BN(1);

    const config = PublicKey.findProgramAddressSync(
        [Buffer.from('config'), dao_seed.toArrayLike(Buffer, 'le', 8)],
        DAO_PROGRAM_ID
      )[0];

    const stake_state = PublicKey.findProgramAddressSync(
        [Buffer.from('stake'), 
        config.toBuffer(),
        publicKey!.toBuffer()],
        STAKING_PROGRAM_ID
      )[0];

      const proposal_config = PublicKey.findProgramAddressSync(
        [Buffer.from('proposalcfg'), config.toBuffer()],
        GOVERNANCE_PROGRAM_ID
      )[0];

      const proposal = PublicKey.findProgramAddressSync(
        [Buffer.from("proposal"), config.toBuffer(), id.toArrayLike(Buffer, 'le', 8)],
        GOVERNANCE_PROGRAM_ID
      )[0];
      
      const treasury = PublicKey.findProgramAddressSync(
        [Buffer.from('treasury'), config.toBuffer()],
        DAO_PROGRAM_ID
      )[0];

      const ix = await program.methods
      .executeProposal!(
      )  
      .accountsPartial({
        instructions: SYSVAR_ID,
        proposalConfig: proposal_config,
        proposal,
        owner: publicKey,
        config,
        systemProgram: SystemProgram.programId,
        treasury,
        coreProgram: DAO_PROGRAM_ID,
        payee: publicKey //we will need to fetch this acc in order to pass correctly if its bounty
        })
        .transaction()
        const { blockhash, lastValidBlockHeight } =
        await connection.getLatestBlockhash();
      const txInfo = {
        /** The transaction fee payer */
        feePayer: publicKey,
        /** A recent blockhash */
        blockhash: blockhash,
        /** the last block chain can advance to before tx is exportd expired */
        lastValidBlockHeight: lastValidBlockHeight,
      };

      const tx = new Transaction(txInfo);

      tx.add(ix);
      const signature = await anchProvider.sendAndConfirm(tx, [], {
        skipPreflight: true,
      });

      toast.success("Executed Proposal successfully!! Transaction ID: " + signature);

    } catch (error: any) {
        console.error(error);
        toast.error(error.message);
      }        
    }, [publicKey, connection]);

    return (
        <div className="flex flex-row justify-center">
            <div className="relative group items-center">
                <div className="m-1 absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-fuchsia-500 
                rounded-lg blur opacity-20 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                <button
                    className="group w-60 m-2 btn animate-pulse bg-gradient-to-br from-indigo-500 to-fuchsia-500 hover:from-white hover:to-purple-300 text-black"
                    onClick={onClick} disabled={!publicKey}
                >
                    <div className="hidden group-disabled:block">
                        Wallet not connected
                    </div>
                    <span className="block group-disabled:hidden" > 
                        Execute proposal 
                    </span>
                </button>
            </div>
        </div>
    );
};
