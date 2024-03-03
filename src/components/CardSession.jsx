import React from 'react'

const CardSession = () => {
  return (
    <div className='w-full  px-10 pt-10 pb-20 flex  gap-5 border-t-[1px] border-zinc-400'>
        <div className='bg-[#004D43] min-h-[55vh] w-[45%] rounded-lg relative '>
            <div className='flex items-center justify-center w-full h-full'>
            <div><h1 className='text-5xl font-semibold text-[#CDEA68]'>OCHI</h1></div>
            </div>
            <div className='absolute bottom-4 left-4 border-2 px-4 py-1 rounded-full'><h1></h1>&copy; 2023 -2024</div>
        </div>
        <div className='bg-[#212121] min-h-[55vh] w-[25%] rounded-lg relative'>
        <div className='flex items-center justify-center w-full h-full'>
            <div>
                <img src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
            </div>
            </div>
            <div className='absolute bottom-4 left-4 border-2 px-4 py-1 rounded-full'><h1></h1>RATIMG 5.0 ON CLUTCH</div>

        </div>
        <div className='bg-[#212121] min-h-[55vh] w-[25%] rounded-lg relative'>
        <div className='flex items-center justify-center w-full h-full'>
            <div className='w-1/2 h-auto'><img className='w-full h-full object-cover' src="https://assets-global.website-files.com/5d816b07d269385f68dbcab0/5ea29a574423326d48ee3ee9_TFA-Hero-Badge-01-white.svg" alt="" /></div>
            </div>
            <div className='absolute bottom-4 left-4 border-2 px-4 py-1 rounded-full'><h1></h1>BUSINESS BOOCAMP ALUMI</div>
        </div>
        

    </div>
  )
}

export default CardSession