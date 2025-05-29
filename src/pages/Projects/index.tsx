import React from 'react';
import Card from '@/components/ProjectsCard/index';
import { FaPython } from 'react-icons/fa';
import { FaReact } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';
import { RiNextjsFill } from 'react-icons/ri';
import { FaSass } from 'react-icons/fa';
import Message from '@/components/Message';

const Projects = () => {
    return (
        <div className="flex flex-col items-center justify-center w-full h-full bg-gray-100 p-4 ">
            <Message content="Tecnologies " />

            <div className="flex flex-col gap-6 md:flex md:flex-row md:w-screen justify-evenly md:px-12 mb-2 md:min-h-96">
                <Card
                    icon={<FaPython width={40} />}
                    text="Python"
                    description="Experience developing an RPA processing PDF, I developed a treatment for a JSON of +40,000 lines, I use python with OOP, I have already had contact with Flask and FastAPI"
                />
                <Card
                    icon={<FaReact />}
                    text="ReactJs "
                    description="I developed some mobile version screens of a fruit and vegetable sales application, I developed some screens with figma, I used nextJs in an internal company project, I have experiences with rest API"
                />
                <Card
                    icon={<IoLogoJavascript />}
                    text="JavaScript"
                    description="Where my studies began, I have already developed projects to test my skills and always update my knowledge base, I do Leetcode challenges, I have already ventured to create a Super Mario game and a todo-list with toggle and drop"
                />
                <Card icon={<RiNextjsFill />} text="NextJS" description="Use in company" />
                <Card icon={<FaSass />} text="Sass" description="Worked" />
            </div>
        </div>
    );
};

export default Projects;
