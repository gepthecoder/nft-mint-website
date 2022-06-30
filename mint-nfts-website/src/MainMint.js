import React from 'react';
import { useState } from 'react';
import { ethers, BigNumber } from 'ethers';
import roboPunksNFT from './RoboPunksNFT.json';

const roboPunksNFTAddress = "0xbD5D53FA86540A27D6aCeCeD551794bb3E0e9e19";

const MainMint = ({accounts, setAccounts}) => {

    // num of quant user is selecting
    const [mintAmount, setMintAmount] = useState(1); 
    const isConnected = Boolean(accounts[0]);

    async function handleMint() {
        if(window.ethereum){
            // connect to blockchain
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            const contract = new ethers.Contract(
                roboPunksNFTAddress,
                roboPunksNFT.abi,
                signer
            );

            try {
                // actuall smart contract call -> eth needs big numbers
                const response = await contract.mint(BigNumber.from(mintAmount));
                console.log("✔ response: ", response);
            } catch (error) {
                console.log("❌ error: ", error);
            }
        }
    }

    const handleDecrement = () => {
        if(mintAmount <= 1) return;

        setMintAmount(mintAmount - 1);
    }

    const handleIncrement = () => {
        if(mintAmount >= 3) return;

        setMintAmount(mintAmount + 1);
    }

    return (
        <div>
            <h1>RoboPunks</h1>
            <p>It's 2100. Can the RoboPunks NFT save humans from destructive scam NFTs? Mint RoboPunks to find out.</p>
            {isConnected ? (
                <div>
                    <div>
                        <button onClick={handleDecrement}>-</button>
                        <input type="number" value={mintAmount} />
                        <button onClick={handleIncrement}>+</button>
                    </div>
                    <button onClick={handleMint}>Mint Now</button>
                </div>
            ) : (
                <p>You must be connected to Mint!</p>
            )}
        </div>
    )
}

export default MainMint