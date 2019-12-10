import React from 'react';
import { ThemeProvider } from 'styled-components';
import ChatBot from 'react-simple-chatbot';
import { StyleSheet, css } from 'aphrodite';

const theme = {
  background: 'white',
  fontFamily: 'Helvetica Neue',
  headerBgColor: 'white',
  headerFontColor: 'white',
  headerFontSize: '15px',
  botBubbleColor: '#b4c2cd',
  botFontColor: 'white',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a',
};

const styles = StyleSheet.create({
  links: {
    textDecoration: 'none',
  },
});

const Email = () => (
  <a
    className={css(styles.links)}
    href="mailto:me@allen-labs.com"
    target="_blank"
    rel="noopener noreferrer">
    Send an email for more information.
  </a>
);

const steps = [
  {
    id: '1',
    message: "Hi I'm Janet.  I'm a resume bot built by LaToya Allen.",
    trigger: 'notAPerson',
  },
  {
    id: 'notAPerson',
    component: (
      <div>
        <iframe
          src={"https://giphy.com/embed/3ohs7Yw7tA7JwHppF6"}
          height={150}
          width={268}
          title={"notAPerson"}
        />
      </div>
    ),
    delay: 3000,
    trigger: 'whatsYourName',
  },
  {
    id: 'whatsYourName',
    message: "What is your name?",
    trigger: '2',
  },
  {
    id: '2',
    user: true,
    trigger: '3',
  },
  {
    id: '3',
    message: 'Hi {previousValue}, nice to meet you! ',
    trigger: 'whatDoYouWantToKnow',
  },
  {
    id: 'whatDoYouWantToKnow',
    message: 'What should we talk about?',
    delay: 4000,
    trigger: 'whatDoYouWantToKnowOptions',
  },
  {
    id: 'whatDoYouWantToKnowOptions',
    options: [
      { value: 1, label: 'Does LaToya work in React?', trigger: 'comingSoon' },
      { value: 2, label: 'Does LaToya have any back-end experience?', trigger: 'comingSoon' },
    ],
  },
  {
    id: 'comingSoon',
    message: "So...I haven't been programed to do that yet. 🤦🏾‍♀️",
    delay: 4500,
    trigger: 'email',
  },
  {
    id: 'email',
    component: (
      <div>
        <Email />
      </div>
    ),
    delay: 3000,
    end: true,
  },
];

const Chat = () => (
  <ThemeProvider theme={theme}>
    <ChatBot steps={steps} />
  </ThemeProvider>
);

export default Chat;
