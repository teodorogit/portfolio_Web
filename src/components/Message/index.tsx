import React from 'react';

interface contentProp {
    content: string;
}

const Message = ({ content }: contentProp) => {
    return (
        <div className="flex justify-center items-center font-Nunito text-gray-800  text-3xl w-screen py-6">
            <p>{content}</p>
        </div>
    );
};

export default Message;
