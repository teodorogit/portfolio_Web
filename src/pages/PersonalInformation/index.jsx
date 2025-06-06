import React from 'react';
import Message from '../../components/Message';
import dogBackground from '../../../public/dog_background.svg';
import Image from 'next/image';

const index = () => {
    return (
        <div className="flex flex-col items-center mb-10">
            <Message content="Volunteer Work" />
            <div className=" min-h-52 md:grid md:grid-cols-3 rounded-full  flex flex-col gap-12  md:gap-2 px-20">
                <p className="text-3xl text-gray-950/70 dark:text-gray-300  md:text-7xl font-underdog font-extralight md:text-gray-800/50 italic">
                    I believe that through volunteering <br></br>we can <br></br> change the world
                </p>
                <div className="flex  flex-col  gap-12 items-center">
                    <p className="text-2xl text-gray-900 dark:text-gray-300 font-mona_sans">
                        Emerald Ark is a non-profit organization based in Reno, Nevada (USA), dedicated to rescuing and
                        rehabilitating animals in need. At Emerald Ark, we prioritize the health and well-being of the
                        animals by using human-grade food as part of their healing and recovery process. The
                        organization is committed to compassionate care, ethical treatment, and creating a safe haven
                        for every animal we serve.
                    </p>
                    <Image src={dogBackground} alt="Emerald Ark Logo" className="w-48 h-48 rounded-full ml-4" />
                </div>
                <div className="flex  flex-col items-center gap-12">
                    <p className="text-2xl text-gray-900 dark:text-gray-300 font-mona_sans">I work as writter</p>

                    <div className="flex gap-2 px-2 bg-red-200 rounded-full py-10 w-52">
                        <p className="font-underdog dark:text-black">Write social media posts</p>
                    </div>
                    <div className="flex items-center ">
                        <p className="bg-slate-300 rounded-full w-52 py-10 text-center dark:text-black">
                            {' '}
                            Review texts{' '}
                        </p>
                    </div>
                    <div className="flex items-center gap-2 px-2">
                        <p className=" text-center bg-green-200 py-10 rounded-full w-52 dark:text-black">Give Ideas</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default index;
