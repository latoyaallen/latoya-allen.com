import React from 'react';
import { ThemeProvider } from 'styled-components';
import ChatBot from 'react-simple-chatbot';
import steps from '../data/steps';

const theme = {
  background: 'white',
  fontFamily: 'Helvetica Neue',
  headerBgColor: 'white',
  headerFontColor: 'orange',
  headerFontSize: '15px',
  botBubbleColor: '#b4c2cd',
  botFontColor: 'white',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a',
};

const Chat = () => (
  <ThemeProvider theme={theme}>
    <ChatBot steps={steps} />
  </ThemeProvider>
);

export default Chat;
