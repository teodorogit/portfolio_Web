'use client';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Button } from '@heroui/react';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { FaMoon } from 'react-icons/fa';
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from '@heroui/react';
import { MdSunny } from 'react-icons/md';

export default function App() {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    };

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [theme]);

    return (
        <>
            <Navbar className="grid grid-flow-col md:flex md:flex-col shadow-sm">
                <NavbarBrand>
                    <p className="font-bold text-inherit">PORTFOLIO </p>
                </NavbarBrand>
                <NavbarContent className="hidden sm:flex gap-4 md:flex-row sm:flex-col" justify="center">
                    <NavbarItem>
                        <Link
                            className=" text-slate-800 dark:text-white"
                            target="_blank"
                            href="https://github.com/teodorogit?tab=repositories"
                        >
                            Github Projects
                        </Link>
                    </NavbarItem>
                    <NavbarItem isActive></NavbarItem>
                    <NavbarItem>
                        <Dropdown>
                            <DropdownTrigger>
                                <Button className=" text-slate-800 border-0 bg-transparent  dark:text-slate-200">
                                    Social Medias
                                </Button>
                            </DropdownTrigger>
                            <DropdownMenu aria-label="Static Actions">
                                <DropdownItem key="new">LinkedIn</DropdownItem>
                                <DropdownItem key="copy" href="https://www.tabnews.com.br/teodorogit/conteudos/1">
                                    TabNews
                                </DropdownItem>
                                <DropdownItem key="edit">Instagram</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </NavbarItem>
                </NavbarContent>
                <NavbarContent justify="end">
                    <NavbarItem className="hidden lg:flex">
                        <Link className=" dark:text-white" href="#"></Link>
                    </NavbarItem>
                    <NavbarItem className=" w-3/4 flex justify-between items-center gap-2 md:gap-0">
                        <Button
                            className=" dark:text-white dark:bg-transparent border-1.5"
                            as={Link}
                            color="success"
                            target="_blank"
                            href="https://wa.me/5544999755163"
                            variant="flat"
                        >
                            Contact Me
                        </Button>

                        {theme === 'dark' ? (
                            <MdSunny onClick={toggleTheme} className="bg-white-700 text-2xl hover:cursor-pointer" />
                        ) : (
                            <FaMoon onClick={toggleTheme} className="s text-2xl hover:cursor-pointer" />
                        )}
                    </NavbarItem>
                </NavbarContent>
            </Navbar>
        </>
    );
}
