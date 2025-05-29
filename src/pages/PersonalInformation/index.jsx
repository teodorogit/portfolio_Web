import React from 'react';
import Message from '../../components/Message';

const index = () => {
    return (
        <div className="flex flex-col items-center mb-10">
            <Message content="Volunteer Work" />
            <div className=" min-h-52 md:grid md:grid-cols-3 rounded-full  flex flex-col gap-4  md:gap-0 px-20">
                <p className="text-3xl text-gray-950/70 dark:text-gray-300  md:text-7xl font-underdog font-extralight md:text-gray-800/50 italic">
                    I believe that through volunteering <br></br>we can <br></br> change the world
                </p>
                <div className="flex items-center">
                    <p className="text-2xl text-gray-900 dark:text-gray-300 font-mona_sans">
                        This is Emerald Ark a NGO located at RENO - NV USA, here We use human-grade foods to heal the
                        animals we care for.{' '}
                    </p>
                </div>
                <div>
                    <p className="text-2xl text-gray-900 dark:text-gray-300 font-mona_sans">I work as writter</p>
                    <section className="flex flex-col gap-6 w-[90%]">
                        <div className="flex gap-2 px-2 justify-center bg-red-200 rounded-full py-10 w-52">
                            <p className="font-underdog dark:text-black">Write social media posts</p>
                        </div>
                        <div className="flex items-center justify-center">
                            <p className="bg-slate-300 rounded-full w-52 py-10 text-center dark:text-black">
                                {' '}
                                Review texts{' '}
                            </p>
                        </div>
                        <div className="flex items-center gap-2 px-2 justify-end w-[100%]">
                            <p className=" text-center bg-green-200 py-10 rounded-full w-52 dark:text-black">
                                Give Ideas
                            </p>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default index;
