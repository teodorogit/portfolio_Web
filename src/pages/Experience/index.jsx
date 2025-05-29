import React from 'react';
import Message from '../../components/Message';
import { DiAtom } from 'react-icons/di';
import { SiPythonanywhere } from 'react-icons/si';
const Experience = () => {
    return (
        <>
            <Message content="My Experience" />
            <div className="md:grid md:grid-cols-2 shadow-sm shadow-black/20 shadow-1 p-20 roudned-md items-center justify-items-center gap-4">
                <div className="h-40 flex flex-col gap-3 items-center justify-center">
                    <p className="font-mona_sans text-3xl md:text-6xl md:h-20 text-center">
                        FRONT-END <br></br> <span className="bg-orange-300/70 rounded-tr-[10%] ">DEV</span>ELOPER +1
                        YEAR
                    </p>

                    <DiAtom className="text-5x1 text-center" />
                </div>
                <div className="flex flex-col items-center justify-center gap-4">
                    <div className="flex flex-col  items-center justify-center gap-2">
                        <p className="text-1xl md:text-4xl">ReactJS: over +2 year of experience</p>
                        <p className="text-1xl md:text-4xl">
                            Tailwind: Styling html pages, also Styled Components and Sass
                        </p>
                    </div>
                </div>
                <div className="h-40 text-center">a</div>
            </div>
        </>
    );
};

export default Experience;
