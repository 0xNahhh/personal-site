import { useState } from 'react'
import profilePic from './assets/ed.png'
import sun from './assets/sun.svg'
import moon from './assets/moon.svg'
import Twitter from './assets/twitter'
import Github from './assets/github'
import Discord from './assets/discord'

const App = () => {
  const [isDark, setIsDark] = useState<boolean>(false)

  return (
    <main className={isDark ? 'dark' : ''}>
      <div className='flex flex-col min-h-screen bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-300'>
        <div className='self-center flex flex-col max-w-[750px] gap-y-8 py-8' >
          {/* Header */}
          <div className='flex justify-between'>
            <p className='text-2xl font-semibold text-teal-600'>0xNahhh</p>

            <img src={isDark ? sun : moon} onClick={() => setIsDark(prev => !prev)} className='h-[24px] w-[24px] cursor-pointer'/>
          </div>

          {/* Profile Pic */}
          <img src={profilePic} className='self-center h-[175px] w-[175px] object-cover rounded-full'/>

          {/* Link */}
          <div className='flex justify-center items-center gap-x-4'>
            <a href='https://twitter.com/0xNahhh' target='_blank' rel='noreferrer'>
              <Twitter className='w-[24px] h-[24px] transition fill-zinc-500 hover:fill-zinc-600 dark:fill-zinc-400 dark:hover:fill-zinc-100 cursor-pointer'/>
            </a> 
            <a href='https://github.com/0xNahhh' target='_blank' rel='noreferrer'>
              <Github className='w-[24px] h-[24px] transition fill-zinc-500 hover:fill-zinc-600 dark:fill-zinc-400 dark:hover:fill-zinc-100 cursor-pointer'/>
            </a>
          </div>

          <p>
            Formally a web2 dev turned web3 for the past year or so. I've been introduced to the world of crypto and CT
            from several friends of mine (all who have played league professionally in the NA LCS scene, go figure that league turns you into an absolute degen lmao)

            <br/><br/>

            From there, I gradually became more and more exposed to the dev side of CT and found out about solidity, how the EVM works, DeFi protocols, NFTs and so much more.
            Eventually, I attended ETH Toronto, where I met the founder of <a href='https://twitter.com/DyveXYZ' target='_blank' rel='noreferrer' className='text-teal-600'>Dyve</a> and <a href='https://twitter.com/LoreumDAO' target='_blank' rel='noreferrer' className='text-teal-600'>Loreum</a>.
            Since then, I've been working full time building out the Dyve platform and helping where I can with the Loreum protocol.
          </p>

          <div className='flex flex-col gap-y-2'>
            <div className='flex items-center gap-x-3'>
              <p className='text-3xl text-teal-600 font-bold'>Dyve</p>
              <a href='https://github.com/orgs/Dyve-co/repositories' target='_blank' rel='noreferrer'>
                <Github className='w-[24px] h-[24px] mt-1 transition fill-zinc-500 hover:fill-zinc-600 dark:fill-zinc-400 dark:hover:fill-zinc-100 cursor-pointer'/>
              </a>
              <a href='https://twitter.com/dyvexyz' target='_blank' rel='noreferrer'>
                <Twitter className='w-[24px] h-[24px] mt-1 transition fill-zinc-500 hover:fill-zinc-600 dark:fill-zinc-400 dark:hover:fill-zinc-100 cursor-pointer'/>
              </a> 
              <a href='https://discord.gg/dyve' target='_blank' rel='noreferrer'>
                <Discord className='w-[24px] h-[24px] mt-1 transition fill-zinc-500 hover:fill-zinc-600 dark:fill-zinc-400 dark:hover:fill-zinc-100 cursor-pointer'/>
              </a>
            </div> 
            <p className='text-sm text-gray-500 font-semibold'>08/2022 - Present</p>
          </div>

          <div>
            An NFT shorting platform where users can either be a lender or a borrower. Borrowers can borrow NFTs listed from lenders so long as they pay the initial lending fee, post the associated collateral for borrowing the NFT
            and accept to the length of time the NFT can be borrowed for. If the borrower fails to return back <span className='font-bold text-teal-500'>ANY</span> NFT from the same collection within the specified borrow time, 
            the lender can liquidate the collateral posted by the borrower.

            <br/><br/>

            Now this is where the real magic happens.

            <br/><br/>

            If the borrower believes that the NFT collection will go down in value (during the length of borrow period), they can sell the NFT on the open market, 
            wait for the floor price to drop, purchase back a floor priced NFT and then return back the NFT to the lender, effectively short selling the NFT!

            <br/><br/>

            During my time here at Dyve so far, I've effectively built out the entire platform. This includes:
            <ul className='list-disc list-inside pl-4'>
              <li>Smart Contract Development (solidity, hardhat, foundry, getting it audited)</li>
              <li>Frontend development (NextJS, tailwind, zustand, reactQuery, ethersJS)</li>
              <li>Backend development (tRPC, mySQL, Reservoir)</li>
              <li>infrastructure & logging (Vercel, axiom, upStash, planetScale)</li>
              <li>indexer (kafka, running a node)</li>
              <li>subgraph (theGraph, graphClient, graphQL)</li>
            </ul>

            <br/>

            Feel free to DM me on twitter if you want access to the testnet version
          </div>

          <div className='flex flex-col gap-y-2'>
            <p className='text-3xl text-teal-600 font-bold'>bRPC</p>
            <p className='text-sm text-gray-500 font-semibold'>02/2023 - Present</p>
          </div>

          <p>
            All I want to see is progress being made in the web3 ecosystem. <br/>
            How do we get more progress? Get more products built <br/>
            How do we get more products built? Get more builders <br/>
            How do we get more builders? Give better building tools <br/>
            Theres a lot of love for the EVM side of development in the blockchain ecosystem, but there's not a whole lot for the client side of things. Sure we
            have tools like Ethers.js, web3.js, rainbowKit and viem (love this one btw), but we don't have any tools that make the transition from web2 to web3 easy and 
            let's face it, the best way we can get more builders, is to get them from web2.

            <br/><br/>

            Which is why I'm building bRPC, a variation of the tRPC framework, tailored to work as seamlessly as possible when interacting with the blockchain. Built on top
            of the existing tRPC infrastructure along side with viem, bRPC hopes to bring the same level of developer experience as tRPC while working with the blockchain.
          </p>
        </div> 
      </div>
    </main>
  )
}

export default App
