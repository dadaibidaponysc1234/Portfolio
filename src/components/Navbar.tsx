import { Menu } from 'lucide-react';
import { 
    Sheet,
    SheetTrigger, 
    SheetContent, 
} from './ui/sheet';
import logo from '/figmaImages/propic.jpeg'

const Navbar = () => {
    return (
        <nav className="w-full flex items-center justify-between py-2">
            <img
                src={logo}
                alt=""
                className='w-12 h-12 object-cover object-center rounded-full'
            />
            <ul className="ml-auto hidden w-3/5 lg:flex items-center justify-evenly gap-4">
                <li className="hover:text-[#ff6d00] underline-offset-4 hover:underline transition-colors font-medium">
                    <a href="#home">Home</a>
                </li>
                <li className="hover:text-[#ff6d00] underline-offset-4 hover:underline transition-colors font-medium">
                    <a href="#about">About Me</a>
                </li>
                <li className="hover:text-[#ff6d00] underline-offset-4 hover:underline transition-colors font-medium">
                    <a href="#services">Services</a>
                </li>
                <li className="hover:text-[#ff6d00] underline-offset-4 hover:underline transition-colors font-medium">
                    <a href="#portfoilo">Portfoilo</a>
                </li>
                <li className="hover:text-[#ff6d00] underline-offset-4 hover:underline transition-colors font-medium">
                    <a href="#skills">Skills</a>
                </li>
                <li className="hover:text-[#ff6d00] underline-offset-4 hover:underline transition-colors font-medium">
                    <a href="#contact">Contact</a>
                </li>
            </ul>

            <div className="">
                <Sheet>
                    <SheetTrigger asChild>
                        <Menu className='w-8 h-8 flex lg:hidden' />
                    </SheetTrigger>
                    <SheetContent className='w-64 h-96 bg-[#08010f] text-white'>
                        <ul className="w-fit h-full flex flex-col justify-evenly">
                            <li className="hover:text-[#ff6d00] underline-offset-4 hover:underline transition-colors font-medium">
                                <a href="#home">Home</a>
                            </li>
                            <li className="hover:text-[#ff6d00] underline-offset-4 hover:underline transition-colors font-medium">
                                <a href="#about">About Me</a>
                            </li>
                            <li className="hover:text-[#ff6d00] underline-offset-4 hover:underline transition-colors font-medium">
                                <a href="#services">Services</a>
                            </li>
                            <li className="hover:text-[#ff6d00] underline-offset-4 hover:underline transition-colors font-medium">
                                <a href="#portfoilo">Portfoilo</a>
                            </li>
                            <li className="hover:text-[#ff6d00] underline-offset-4 hover:underline transition-colors font-medium">
                                <a href="#skills">Skills</a>
                            </li>
                            <li className="hover:text-[#ff6d00] underline-offset-4 hover:underline transition-colors font-medium">
                                <a href="#contact">Contact</a>
                            </li>
                        </ul>
                    </SheetContent>
                </Sheet>
            </div>
        </nav>
    );
}

export default Navbar;