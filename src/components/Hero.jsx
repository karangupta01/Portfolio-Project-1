import React from 'react'
import { LuImport } from 'react-icons/lu'
import benson from '../assets/benson.webp'

function Hero() {
  return (
    <section>
        <div className='flex flex-col items-center justify-center' >
            <h1 className='mt-16 overflow-hidden text-[12vw] font-semibold uppercase leading-none' >
                Karan <br /> Gupta
            </h1>
            <div className='mt-8' >
                <a href="/Karan_Gupta_Resume_1.pdf" target='_blank' rel='noopener noreferrer' download 
                className='flex items-center rounded-xl bg-lime-300 p-2 px-3 font-sans font-medium text-black hover:bg-lime-400' >
                    <span>Resume.Pdf</span>
                    <LuImport className='ml-2' />
                </a>
            </div>
            <div className='w-full' >
                <img src={benson} alt='Karan Gupta' className='mt-8 h-96 w-full object-cover' />
            </div>
        </div>
    </section>
  )
}

export default Hero