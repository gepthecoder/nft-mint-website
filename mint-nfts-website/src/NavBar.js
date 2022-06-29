import React from 'react'

const NavBar = ( {accounts, setAccounts} ) => {

    const isConnected = Boolean(accounts[0]);

    async function connectAccount() {
        if(window.ethereum) {
            const accounts = await window.ethereum.request({
                method: "eth_requestAccounts",
            });
            setAccounts(accounts);
        }
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
                <p>Connected</p>
            ) : (
                <button onClick={connectAccount}></button>
            )}


        </div>
    )
}

export default NavBar