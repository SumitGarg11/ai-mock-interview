"use client"
import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'
import React, {useEffect} from 'react'
import Link from 'next/link';



function Header() {
  const router = useRouter();
  const path = usePathname();
  
  useEffect(()=>{
    console.log(path);
  },[])
  return (
  
    <div  className = "flex p-4  items-center justify-between bg-secondary shadow-sm">
      <Image src={'/logo.svg'} width={160} height={100}  alt='logo' />
      <ul className=' hidden md:flex gap-20'>

      

        <li  onClick={()=>router.replace('/dashboard')} className=" hover:text-primary hover:font-bold transition-all cursor-pointer  "
          
         >Dashboard</li>
        
        <li  onClick={()=>router.replace('/dashboard/upgrade')} className=' hover:text-primary hover:font-bold transition-all cursor-pointer '
          
        >Upgrade</li>
        <li  onClick={()=>router.replace('/dashboard')}  className= 'hover:text-primary hover:font-bold transition-all cursor-pointer  '>
        How it works?
        </li>
      </ul>
      <UserButton />
    </div>
  )
}

export default Header
