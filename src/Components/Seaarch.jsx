import { X } from 'lucide-react'
import React from 'react'

export default function Seaarch({isOpen, toggle}) {

    if(!isOpen) return
  return (
    <div className='h-dvh w-dvw bg-black/75 fixed top-0 left-0 flex justify-center items-center text-white'>
        <X onClick={toggle} className='top-10 right-10 absolute hover:scale-125 duration-500'/>
        <div>
            <input className='border-b border-amber-300 w-100 outline-0 py-1' type='search' placeholder='Enter text to search...' />
            
        </div>
    </div>
  )
}
