import React from 'react';

export type chat = {
  id: number;
  name: string;
  lastMessage: string;
  time: string;
  avatar: string;
  numberNotRead: number;
};

type Props = {
  chat: chat;
};

const Card = ({ chat }: Props) => {
  return (
    <>
      <div className="flex bg-white rounded-xl shadow-md p-2 hover:cursor-pointer hover:opacity-70 hover:-translate-y-2 transition-all">
        <img
          src={chat.avatar}
          alt="avatar"
          className="rounded-full p-4 w-20 h-20"
        />
        <div className="flex justify-evenly grow">
          <div className="flex flex-col content-start justify-center">
            <span className="text-black font-extrabold text-xl ">
              {chat.name}
            </span>
            <span className="text-black opacity-70 text-base">
              {chat.lastMessage}
            </span>
          </div>
          <div className="flex flex-col justify-center space-y-2 items-center">
            <span className="text-black text-sm font-medium">{chat.time}</span>
            <span className="text-white bg-purple-400 rounded-full h-5 w-5 flex justify-center items-center opacity-80 text-xs">
              {chat.numberNotRead}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
