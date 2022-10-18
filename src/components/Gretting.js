import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import randomMessageRedux from '../data-api/messagesApi';

export default function ShowMessages() {
  const dispatch = useDispatch();

  const messages = useSelector((state) => state.messages);
  console.log(messages);

  useEffect(() => {
    dispatch(randomMessageRedux());
  }, []);

  return (
    <div>
      <h1>Hello World! </h1>
      <h2>
        {' '}
        {messages.message}
        {' '}
      </h2>
    </div>
  );
}
