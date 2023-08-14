'use client';

import Image from 'next/image'
import Link from 'next/link';
import React, { useState } from 'react'
import CartIcon from './CartIcon';

//data in the mobile menu
const  links = [
    { id:1, title: "Homepage", url: "/"},
    { id:2, title: "Menu", url: "/menu"},
    { id:3, title: "Working Hour", url: "/"},
    { id:4, title: "Contact", url: "/"},
];

const user = false;

const Menu = () => {

    const [open, setOpen] = useState(false);

  return (
    <div>
        {!open 
            ? (<Image src="/open.png" alt="image" width={16} height={16} onClick={()=> setOpen(true)}/>)
            : (<Image src="/close.png" alt="image" width={16} height={16} onClick={()=> setOpen(false)}/>)    
        }

        {open && (
        <div className='bg-red-500 text-white absolute left-0 t-24 w-full h-[calc(100vh-6rem)] flex flex-col gap-8 items-center justify-center text-2xl z-10'>
            {links.map(item=>(
                <Link href={item.url} key={item.id} onClick={()=> setOpen(false)}>{item.title}</Link>
            ))}

            {!user  ? (<Link href="/login" onClick={()=> setOpen(false)}>Login</Link>) 
                    : (<Link href="/order" onClick={()=> setOpen(false)}>Orders</Link>)
            }

        <Link href="/cart" onClick={()=> setOpen(false)}>
            <CartIcon/> 
        </Link>
        </div> 
        )}
              
    </div>
  )
}

export default Menu