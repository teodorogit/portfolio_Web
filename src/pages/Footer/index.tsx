import React from 'react';
import Image from 'next/image';
import computer_svg from '../../../public/computer_svg.svg';

const Footer = () => {
    return (
        <div>
            <footer className="flex- flex-col gap-12  md:justify-evenly md:grid md:grid-cols-3 md:px-32 border-t-2 border-gray-300 items-center dark:bg-[#030712]  h-auto py-10">
                <Image src={computer_svg} alt="Man typing in a computer" width={100} />
                <div>
                    <h2 className="font-montserrat font-light text-slate-900/60 dark:text-slate-200 sm:mb-10">
                        This website was developed by Matheus Teodoro &copy; 2025
                    </h2>
                </div>
                <div>
                    <h2 className="font-nunito text-slate-900/70 font-light text-center">
                        Thanky you to visit my portfolio,It's rewarding to use technology to show the world a little
                        more about myself.feel free to contact me{' '}
                        <strong className="hover:cursor-pointer hover:text-green-950">
                            <a href="mailto:matheusteodoro200@gmail.com" target="_blank">
                                matheusteodoro200@gmail.com
                            </a>
                        </strong>
                    </h2>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
