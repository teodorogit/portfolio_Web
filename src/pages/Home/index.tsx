import React from 'react';
import { Button } from '@heroui/react';
import Image from 'next/image';
import matheus_img from '../../../public/matheus.jpg';
import { IoLogoYoutube } from 'react-icons/io5';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaSpotify } from 'react-icons/fa';

const Home = () => {
    return (
        <main className="flex flex-col md:grid md:grid-cols-2 md:px-56 gap-6">
            <div className="overflow-hidden items-center px-20  w-[100%] md:w-[100%] flex flex-col py-4   justify-center">
                <p className=" text-2xl md:text-8x1 text-gray-600/90 dark:text-white ">
                    Welcome, i am Matheus Teodoro{' '}
                </p>
                <p className="  md:text-3xl">
                    This website was developed by me, here you can learn more about my professional and personal side.
                </p>{' '}
                <div className=" flex flex-col justify-center  md:flex md:flex-row md:flex-wrap gap-4 mt-4 md:h-40 items-center">
                    <Button className="bg-[#E1002D] text-white">
                        {' '}
                        <IoLogoYoutube /> Youtube
                    </Button>
                    <Button className="bg-[#0A66C2] text-white">
                        {' '}
                        <FaLinkedin /> LinkedIn
                    </Button>
                    <Button className="bg-[#212830] text-white">
                        {' '}
                        <FaGithub />
                        Github
                    </Button>
                    <Button className="bg-green-700 text-white">
                        {' '}
                        <FaSpotify />
                        Spotify
                    </Button>
                </div>
            </div>
            <div className="px-8 py-4 flex flex-col items-center">
                <Image
                    className="max-h-92 w-auto md:w-80 md:rounded-tl-[20%] rounded-br-[5%] md:rounded-tr-[20%] shadow-sm shadow-black"
                    src={matheus_img}
                    alt="matheus image"
                />
            </div>
        </main>
    );
};

export default Home;
