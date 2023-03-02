import React from 'react';
import { useParams } from 'react-router-dom';

type Props = {};

const ChatBox = (props: Props) => {
  // get id from react router dom v6 useParams
  const { id } = useParams();
  return <div>{id}</div>;
};

export default ChatBox;
