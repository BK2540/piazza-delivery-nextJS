import React from 'react'
import Menu from './Menu'
import Link from 'next/link'
import CartIcon from './CartIcon';
import Image from 'next/image';

const Navbar = () => {

    const user = true;

  return (
    <div className='h-12 text-red-500 p-4 flex justify-between items-center border-b-2 border-b-red-500 uppercase md:h-24 lg:px-20 xl:px-40'>
        {/* LEFT LINK */}
        <div className='hidden md:flex gap-4 flex-1'>
            <Link href="/">Homepage</Link>
            <Link href="/menu">Menu</Link>
            <Link href="/">Contact</Link>
        </div>
        {/* LOGO */}
        <div className='text-xl md:font-bold flex-1 md:text-center'>
            <Link href="/">
                Massimo
            </Link>
        </div>
        {/* MOBILE NAVBAR */}
        <div className='md:hidden'>
            <Menu/>
        </div>
        {/* RIGHT LINK */}
        <div className='hidden md:flex gap-4 items-center justify-end flex-1'>
            <div className='md:absolutte top-3 r-2 flex items-center gap-2 cursor-pointer bg-orange-300 px-1 rounded-md'>
                <Image src="/phone.png" alt='phone' width={16} height={16}/>
                <span>123 456 7890</span>
            </div>
            {!user ? (<Link href="/login">Login</Link>) :
            (<Link href="/order">Orders</Link>)}
            <CartIcon/>
        </div>
    </div>
  )
}

export default Navbar