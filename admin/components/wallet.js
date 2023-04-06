import React from 'react'
import { ConnectWallet } from "@thirdweb-dev/react";
const wallet = () => {
  return (
    <div className='connect_wallet_address'>
        <ConnectWallet
            btnTitle="Connect"
            className="connect_wallet p-0 bg-black"
        />
    </div>
    
  )
}

export default wallet