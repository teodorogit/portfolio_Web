import React from 'react';
import { Card, CardBody } from '@heroui/react';
import { Button } from '@heroui/react';
import Image from 'next/image';

const index = ({ title, image = '', link = '', width = '' }) => {
    return (
        <div>
            <Card className="w-90 h-40 flex flex-col justify-evenly py-4 px-4">
                <CardBody className="font-nunito text-slate-700 dark:text-slate-200">
                    <p className={`text-[${width}]`}>{title}</p>
                </CardBody>

                <Button
                    href={link}
                    className="font-nunito text-slate-800 bg-orange-100 shadow-sm dark:text-black hover:bg-transparent hover:border-1"
                >
                    Details
                </Button>
            </Card>
        </div>
    );
};

export default index;
