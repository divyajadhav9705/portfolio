import React from 'react'
import Image from 'next/image';
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'
import { socialMedia } from '@/data'


const Footer = () => {
  return (
    <footer className='w-full pt-20 pb-10 ' id="contact">
      
        <div className='flex flex-col items-center'>
            <h1 className='heading lg:max-w-p[45vw]'>
                Ready to take <span className='text-purple'>your</span> digital presence to next level?
            </h1>
            <p className='text-white-200 md:mt-10 my-5 text-center'>Reach out to me today and let&apos;s discuss how can i help you achieve your goals
            </p>
            <a href='mailto:divyajadhav9705@gmail.com'>
                <MagicButton 
                title='Let&apos;s get in touch'
                icon={<FaLocationArrow/>}
                position='right'
                />

            </a>
        </div>

        <div className='flex mt-16 md:flex-row flex-col justify-between items-center'>
            <p className='md:text-base text-sm md:font-normal font-light'> Copyright © 2025 Divya </p>
            <div className='flex ietms-center md:gap-3 gap-6'>
                {socialMedia.map((profile)=>(
                    <div key={profile.id} className='w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-100 bg-opacity-75 bg-black-200 rounded-xl border border-black-300 mt-10'>
                        <Image  src={profile.img} alt={profile.img}
                        width={20} height={20}
                        
                        />

                    </div>
                ))}

            </div>
        </div>

    </footer>
  )
}

export default Footer