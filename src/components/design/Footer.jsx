import React from 'react'

const Footer = () => {
  return (
    <div className='bg-black w-scrren h-[750px] md:h-[400px] pt-12'>
        <div className='text-white'>
        <p className='text-[40px] text-balance'>Interested in delving deeper into the project?</p>
        </div>
        <div className='text-white mt-5 tracking-wider '>
            <p className='text-lg text-balance'>If you'd like to explore further details about our initiatives or any of our 
             </p>
             <p className='text-white text-balance'> affiliated brands, don't hesitate to connect. You can reach out to us via </p>
             <p className='text-white text-balance'> email at hello@abc.com or give us a call at +91 480 20802730.</p>
        </div>
        <div className='flex justify-center mt-10 gap-x-8'>
            <div className=''>
                <button className='p-2 w-[150px]  md:w-[180px] h-[40px] text-white rounded-xl border border-white'>Ring us on Skype</button>
            </div>
            <div className=''>
                <button className='p-2 w-[150px]  md:w-[180px] h-[40px] text-black rounded-xl bg-white'>Contact us</button>
            </div>
        </div>
        <div className='mt-16'>
            <p className='text-white font-medium text-lg tracking-widest'>© 2019-2023 abcTechnology Solutions Pvt. Ltd. All Rights Reserved</p>
        </div>
    </div>
  )
}

export default Footer