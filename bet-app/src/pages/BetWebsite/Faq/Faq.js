import React from 'react';
import Data from './FaqData'
import WebsiteHeader from '../../../components/WebsiteHeader';
import Footer from "../Footer";
const questions = [
    {
        id: 0,
        title: 'What is the purpose of this betting app?',
        answer: 'Our app allows users to place bets on various sports games, play sports games, and earn referral rewards by inviting friends to join the platform. Users can also challenge others by posting a match request.',
    },
    {
        id: 1,
        title: 'How do I place a bet on a sports game?',
        answer: 'To place a bet, select the sports game you’re interested in, choose your bet type, enter the amount you wish to bet, and confirm your bet. You can track your bets and results in your account dashboard.',
    },
    {
        id: 2,
        title: 'How to contact MeetInGround?',
        answer: (
            <div>
                Our committed team is available to assist you during daytime hours, ensuring personalized support and attention. English-speaking assistance is available 24/7.
                <br /><br />
                Email: <a href="mailto:meetinground@gmail.com">info@meetinground</a>
                <br />
                Phone: <a href="https://wa.me/+916381475573">+91 6381475573</a>
            </div>
        )
    },
    {
        id: 3,
        title: 'What are referral rewards, and how can I earn them?',
        answer: 'Referral rewards are bonuses you receive for inviting friends to join the app. When your referred friend signs up and makes their first bet, you’ll receive a referral bonus credited to your account.'
    },
    {
        id: 4,
        title: 'How do I post a bet match request?',
        answer: 'To post a bet match request, navigate to the Post a Match section, fill in the match details, set the terms, and submit your request. Other users can then see your request and challenge you to play.'
    },
    {
        id: 5,
        title: 'How can I accept a bet match request?',
        answer: 'To accept a match request, go to the Match Request’s section, find a match that interests you, and click on ‘Accept Request’. Both parties will be notified, and you can proceed to play the match according to the agreed terms.'
    },
    {
        id: 6,
        title: 'How do I play a sports game on the app?',
        answer: 'Once you’ve accepted a match request or created one, follow the instructions provided in the app to play the game. The specifics will vary depending on the sport and game format. Ensure you adhere to the rules and guidelines provided.'
    },
    {
        id: 7,
        title:
          'Is my personal and financial information safe on this app?',
        answer:
          'Yes, your security is our top priority. We use advanced encryption technology to protect your personal and financial information. Additionally, our app complies with industry-standard regulations to ensure your data is safe and secure.',
      },
];
const Faq = () => {
  return (
    <div>
      <WebsiteHeader/>
      <Data questions={questions} />
      <Footer />
    </div>
  );
};
export default Faq;