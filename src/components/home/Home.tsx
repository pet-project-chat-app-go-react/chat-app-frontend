import React from 'react';
import Card from '../common/Card/Card';
import { chat } from '../common/Card/Card';

type Props = {};

const Home = (props: Props) => {
  const chats: Array<chat> = [
    {
      id: 1,
      name: 'Phat Nguyen',
      numberNotRead: 1,
      lastMessage: 'Ban an com chua',
      time: '12:00',
      avatar: 'https://picsum.photos/200',
    },
    {
      id: 2,
      name: 'Phat Nguyen',
      numberNotRead: 1,
      lastMessage: 'Ban an com chua',
      time: '12:00',
      avatar: 'https://picsum.photos/200',
    },
    {
      id: 3,
      name: 'Phat Nguyen',
      numberNotRead: 1,
      lastMessage: 'Ban an com chua',
      time: '12:00',
      avatar: 'https://picsum.photos/200',
    },
    {
      id: 4,
      name: 'Phat Nguyen',
      numberNotRead: 1,
      lastMessage: 'Ban an com chua',
      time: '12:00',
      avatar: 'https://picsum.photos/200',
    },
    {
      id: 5,
      name: 'Phat Nguyen',
      numberNotRead: 1,
      lastMessage: 'Ban an com chua',
      time: '12:00',
      avatar: 'https://picsum.photos/200',
    },
    {
      id: 5,
      name: 'Phat Nguyen',
      numberNotRead: 1,
      lastMessage: 'Ban an com chua',
      time: '12:00',
      avatar: 'https://picsum.photos/200',
    },
    {
      id: 5,
      name: 'Phat Nguyen',
      numberNotRead: 1,
      lastMessage: 'Ban an com chua',
      time: '12:00',
      avatar: 'https://picsum.photos/200',
    },
    {
      id: 5,
      name: 'Phat Nguyen',
      numberNotRead: 1,
      lastMessage: 'Ban an com chua',
      time: '12:00',
      avatar: 'https://picsum.photos/200',
    },
  ];

  return (
    <div className="flex flex-col">
      <h1>Chat</h1>
      <div className="flex space-x-2">
        <div className="space-y-4 rounded-xl w-1/3 shadow-xl p-2">
          {chats.map((chat, index) => {
            return <Card key={index} chat={chat}></Card>;
          })}
        </div>
        <div className="shadow-xl w-2/3 h-screen rounded-xl">xxx</div>
      </div>
    </div>
  );
};

export default Home;
