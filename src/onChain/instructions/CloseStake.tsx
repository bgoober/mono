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
import NodeWallet from '@coral-xyz/anchor/dist/cjs/nodewallet';
import toast from "react-hot-toast";
const SYSVAR_ID = new PublicKey('Sysvar1nstructions1111111111111111111111111');
const mint_dao = new PublicKey('7sXdmHw7Stsw3c26Uxnt3oY1rvDNcLuyfkh5Fcu3mBpJ');


const idl_string_dao = JSON.stringify(daoIdl)
const idl_object_dao = JSON.parse(idl_string_dao)

const idl_string_goverannce = JSON.stringify(governanceIdl)
const idl_object_governance = JSON.parse(idl_string_goverannce)

const idl_string_staking = JSON.stringify(stakingIdl)
const idl_object_staking = JSON.parse(idl_string_staking)

const DAO_PROGRAM_ID = new PublicKey(daoIdl.address)
const GOVERNANCE_PROGRAM_ID = new PublicKey(governanceIdl.address)
const STAKING_PROGRAM_ID = new PublicKey(stakingIdl.address)

export const CloseStake: FC = () => {
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
    const program = new Program(idl_object_staking, anchProvider);

    const dao_seed = new BN(randomBytes(8));
    const staking_amount = new BN(1000);

    const publicKeyAta = await getAssociatedTokenAddressSync(
        mint_dao,
        publicKey!
    );

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

    const stake_ata = PublicKey.findProgramAddressSync(
        [
        Buffer.from("vault"),
        config.toBuffer(),
        publicKey!.toBuffer(),
        mint_dao.toBuffer(),
        ],
        STAKING_PROGRAM_ID
      )[0];
    
    const stake_auth = PublicKey.findProgramAddressSync(
        [
        Buffer.from("auth"),
        config.toBuffer(),
        publicKey!.toBuffer(),
        ],
        STAKING_PROGRAM_ID
      )[0];
      
      const treasury = PublicKey.findProgramAddressSync(
        [Buffer.from('treasury'), config.toBuffer()],
        DAO_PROGRAM_ID
      )[0];

      const ix = await program.methods
      .closeStake!(
      )  
      .accountsPartial({
        mint: mint_dao,
        config,
        systemProgram: SystemProgram.programId,
        stakeState: stake_state,
        owner: publicKey,
        stakeAta: stake_ata,
        stakeAuth: stake_auth,
        tokenProgram: TOKEN_PROGRAM_ID,
        associatedTokenProgram: ASSOCIATED_TOKEN_PROGRAM_ID,
        treasury
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

    toast.success("Closed Stake Account successfully!!! Transaction ID: " + signature);

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
                        Close Stake Account  
                    </span>
                </button>
            </div>
        </div>
    );
};
