import React from 'react'
import { InfiniteMovingCards } from './ui/InfiniteMovingcards'
import { testimonials } from '@/data'

const Clients = () => {
  return (
    <div className='py-20 ' id='testimonials'>
        <h1 className='heading'>
                Bringing Ideas to Life with {' '}
            <span className='text-purple'>  Code, Creativity, and Performance

            </span>
        </h1>
        <div className='flex flex-col items-center max-lg:mt-10 '>
           <InfiniteMovingCards 
          items ={testimonials}
          direction='right'
          speed='slow'
          />
          
          
        </div>
        </div>
  )
}

export default Clients
