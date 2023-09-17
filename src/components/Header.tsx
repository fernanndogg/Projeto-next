import Image from 'next/image';

import Logo from '@/assets/logo.svg';

import { ItemMenu } from './ItemMenu';
import { Search } from './Search';

import IconUser from '@/assets/icon-user.svg'
import { Container } from './Container';

export function Header() {
    return (
        <header className="relative flex items-center w-full h-20 bg-orange-500">
            <div className='absolute top-0 right-0 bg-blue-600 w-[19%] h-full z-0'></div>
            <Container>
                <div className='flex flex-1 items-center justify-between'>
                    <div className='flex items-center gap-14 '>
                        <Image 
                        src={Logo}
                        alt="Logo"
                        />
                        <ul className='flex items-center gap-12'>
                            <li>
                                <ItemMenu 
                                name='Para você'/>
                            </li>
                            <li>
                                <ItemMenu 
                                name='Para Empresa'/>
                            </li>
                            <li>
                                <ItemMenu 
                                name='Serviços'/>
                            </li>
                            <li>
                                <ItemMenu 
                                name='Ajuda'/>
                            </li>
                        </ul>
                    </div>
                    <Search />
                </div>
                <button className='flex items-center gap-4 bg-blue-600 h-20 z-10'>
                    <span className='flex gap-4 text-white font-bold ml-5'>
                        <Image 
                        src={IconUser} 
                        alt='Icon user'/>
                        Acessar conta
                    </span>
                </button>
            </Container>
        </header>
    );
}