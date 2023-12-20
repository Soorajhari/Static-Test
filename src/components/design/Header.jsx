import React from 'react'

const Header = () => {
  return (
<div className=' bg-black '>
    <div className='w-scrren h-[700px]'>
        <p className='  text-white text-xs md:text-xl font-semibold tracking-normal md:tracking-wider pt-5'>Epic Games : An American video game and software developer</p>
        <p className='text-white text-base md:text-xl font-medium tracking-wider'>And publisher based in Cary, North Carolina.</p>
        <div className='  mt-10'>
            <img className=' h-[200px] w-[700px] md:w-[900px] m-auto object-cover flex justify-center' src={require("../assets/2150712388.jpg")} alt="game" />
        </div>
        <div className='mt-10'>
            <p className='text-white text-base md:text-lg font-normal text-balance '>Create, play, and battle with friends for free in Fortnite. Be the last player standing in Battle Royale and Zero Build, experience a concert or</p>
            <p className='text-white text-base md:text-lg font-normal text-balance'>live event, or discover over a million creator made games, including racing, parkour, zombie survival, and more. Each Fortnite island has</p>
            <p className='text-white text-base md:text-lg font-normal text-balance'>an individual age rating so you can find the one that's right for you and your friends. Find it all in Fortnite ... Drop In.</p>
        </div>
        <div className='mt-7'>
            <button className='p-1 bg-white text-black font-semibold rounded-2xl w-[250px] h-[40px]'>Visit Website</button>
        </div>
    </div>
</div>

  )
}

export default Header