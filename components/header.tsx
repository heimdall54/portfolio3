import { BsGithub, BsLinkedin, BsDiscord } from 'react-icons/bs'
import Link from 'next/link'

const Header = () => {
    return (
        <header className='header'>
            <h2> </h2>
            <div className='social'>
                <Link href="/">
                    <BsGithub />
                </Link>
                <Link href="/">
                    <BsDiscord />
                </Link>
                <Link href="/">
                    <BsLinkedin />
                </Link>
            </div>
        </header>
    );
}

export default Header;