import React from 'react';
import { Box, Button, Flex, Image, Link, Spacer } from '@chakra-ui/react';
import FacebookIcon from './assets/social-media-icons/facebook_32x32.png';
import TwitterIcon from './assets/social-media-icons/twitter_32x32.png';
import EmailIcon from './assets/social-media-icons/email_32x32.png';

const NavBar = ( {accounts, setAccounts} ) => {

    const isConnected = Boolean(accounts[0]);

    async function connectAccount() {
        const isMetaMask = isMetaMaskInstalled();
        if(!isMetaMask) { return }

        if(window.ethereum) {
            const accounts = await window.ethereum.request({
                method: "eth_requestAccounts",
            });
            setAccounts(accounts);
        }
    }

    function isMetaMaskInstalled() {
        return Boolean(window.ethereum && window.ethereum.isMetaMask);
    }

    return (
        <Flex justify="space-between" align="center" padding="30px">
            {/* Left Side - Social Media Icons */}
            <Flex justify="space-around" width="40%" padding="0 75px">
                <Link href='https://www.facebook.com'>
                    <Image src={FacebookIcon} boxSize="42px" margin="0 15px" />
                </Link>
            
                <Link href='https://www.twitter.com'>
                    <Image src={TwitterIcon} boxSize="42px" margin="0 15px" />
                </Link>         
            
                <Link href='https://www.gmail.com'>
                    <Image src={EmailIcon} boxSize="42px" margin="0 15px" />
                </Link>
            </Flex>
            {/* Right Side - Sections And Connect */}
            <div>About</div>
            <div>Mint</div>
            <div>Team</div>

            {/*Connect Wallet*/}
            {isConnected ? (
                <div>
                    <b>{accounts[0].slice(0,6)}...{accounts[0].slice(39)}</b>
                </div>
            ) : (
                <button onClick={connectAccount}>Connect Wallet</button>
            )}


        </Flex>
    )
}

export default NavBar