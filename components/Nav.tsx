"use client"

import { FaHome } from 'react-icons/fa'
import { BsPersonFill } from 'react-icons/bs'
import { MdOutlineHomeRepairService } from 'react-icons/md';
import { IoIosContact } from 'react-icons/io'
import { AiFillProject } from 'react-icons/ai'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const link = [
    {
        name: "home",
        link: "/",
        icon: <FaHome />
    },
    {
        name: "a propos",
        link: "/propos",
        icon: <BsPersonFill />
    },
    {
        name: "service",
        link: "/services",
        icon: <MdOutlineHomeRepairService />
    },
    {
        name: "projet",
        link: "/projet",
        icon: <AiFillProject />
    },
    {
        name: "contact",
        link: "/contact",
        icon: <IoIosContact />
    },
]

const Nav = () => {
    const path = usePathname();

    return (
        <div className='nav'>
            <div className='menu'>
                {link.map((link, index) => (
                    <Link className={path === link.link ? "active" : ''} key={index} href={link.link}>
                        {link.icon}
                    </Link>
                ))}
            </div>
        </div >
    );
}

export default Nav;