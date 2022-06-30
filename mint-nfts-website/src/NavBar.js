import React from 'react'

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
        <div>
            {/* Left Side - Social Media Icons */}
            <div>Facebook</div>
            <div>Twitter</div>
            <div>Email</div>

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


        </div>
    )
}

export default NavBar