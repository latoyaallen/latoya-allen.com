import React from 'react';

const MiniMax = () => (
  <a
    href="https://rubygems.org/gems/minimax_ttt"
    target="_blank"
    rel="noopener noreferrer">
    this gem.
  </a>
);

const Email = () => (
  <a
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
    delay: 3000,
    trigger: 'whatDoYouWantToKnowOptions',
  },
  {
    id: 'whatDoYouWantToKnowOptions',
    options: [
      { value: 1, label: 'Does LaToya have any testing experience?', trigger: 'absolutely' },
      { value: 3, label: 'Does LaToya work in React?', trigger: 'react' },
      { value: 4, label: 'Does LaToya have any back-end experience?', trigger: 'backEnd' },
      { value: 5, label: 'Her answers to comment interview questions', trigger: 'comingSoon' },
      { value: 6, label: 'Something else', trigger: 'comingSoon' },
    ],
    delay: 2500,
  },
  {
    id: 'absolutely',
    component: (
      <div>
        <iframe
          src={"https://giphy.com/embed/LSvB8JdEf4yascdXf1"}
          height={150}
          width={268}
          title={"whatDoYouWantToKnowOptions"}
        />
      </div>
    ),
    delay: 2500,
    trigger: 'testing',
  },
  {
    id: 'react',
    message: "Yes.  She has 3 years of experience working in React and Redux.  She has 5 years of experience workin in Rails.",
    delay: 2500,
    trigger: 'whatDoYouWantToKnowOptions',
  },
  {
    id: 'testing',
    message: "She has 5 years of TDD experience.  She's strongest in Jest, Enzyme, and RSpec.",
    delay: 4500,
    trigger: 'whatDoYouWantToKnowOptions',
  },
  {
    id: 'backEnd',
    message: "She does.  She used to work in Rails, Clojure, and Java on the backend. If you're into artificial intelligence, alpha-beta algorithms, decision theory, or game theory, checkout",
    delay: 4500,
    trigger: 'minimax',
  },
  {
    id: 'minimax',
    component: (
      <div>
        <MiniMax />
      </div>
    ),
    delay: 3000,
    trigger: 'whatDoYouWantToKnowOptions',
  },
  {
    id: 'comingSoon',
    message: "So...I haven't been programed to do that yet. 🤦🏾‍♀️",
    delay: 3000,
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

export default steps;
