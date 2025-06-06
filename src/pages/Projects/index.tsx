import React from 'react';
import Card from '@/components/ProjectsCard/index';
import { FaPython } from 'react-icons/fa';
import { FaReact } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';
import { RiNextjsFill } from 'react-icons/ri';
import { FaSass } from 'react-icons/fa';

const Projects = () => {
    return (
        <div className="flex flex-col items-center justify-center w-full h-full bg-gray-100 p-4 ">
            <div className="flex flex-col gap-6 md:flex md:flex-row md:w-screen justify-evenly md:px-12 mb-2 md:min-h-96">
                <Card
                    icon={<FaPython width={40} />}
                    text="Python"
                    description="I have over 1 year of experience developing with Python. In my latest project, I wrote code to process PDF documents and upload them to a blob storage. I also developed a solution to handle a JSON file with over 40,000 lines. I use Python with object-oriented programming (OOP), and I’ve already had some experience with Flask and FastAPI."
                />{' '}
                <Card
                    icon={<IoLogoJavascript />}
                    text="JavaScript"
                    description="I started studying programming around 2 years ago, and that’s when my journey began. Since then, I’ve been constantly learning and improving my skills. I regularly practice logic and algorithms through challenges on platforms like LeetCode. I’ve also developed personal projects to strengthen my knowledge, such as a Super Mario-style game and a to-do list application with toggle and drag-and-drop functionality."
                />
                <Card
                    icon={<FaReact />}
                    text="ReactJs "
                    description="I have around 1.5 years of experience. Currently, I’m working on an internal company project using Tailwind CSS, Next.js, React.js, TypeScript, and other libraries. I’ve also developed some mobile version screens for a fruit and vegetable sales application, including designing screens in Figma. I have experience working with REST APIs.I"
                />
                <Card
                    icon={<RiNextjsFill />}
                    text="NextJS"
                    description="I use Next.js in an internal company project and also study the framework in my spare time to deepen my understanding. "
                />
                <Card
                    icon={<FaSass />}
                    text="Sass and CSS Components"
                    description="I have experience working with Sass using variables mixins etc, and CSS Modules , which I used while developing the interface of a fruit and vegetable sales application. These tools helped me organize and modularize the styling in a scalable and maintainable way, especially for handling responsive layouts and custom UI components."
                />
                <Card
                    icon={<FaSass />}
                    text="Tailwind"
                    description="I’ve been actively studying Tailwind CSS on my own and applying it in several personal projects to strengthen my understanding of utility-first styling. In addition to that, I also use Tailwind CSS in a real-world project at the company where I work, which has helped me gain practical experience in building responsive and consistent user interfaces more efficiently."
                />
            </div>
        </div>
    );
};

export default Projects;
