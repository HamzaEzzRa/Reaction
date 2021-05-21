import { useState } from 'react';
import { Player, Chat } from './components';

import * as TEST from './constants/test-data';

const testData = {
  users: TEST.users, // Room users
  messages: TEST.messages, // Room chat messages
  currentUser: TEST.currentUser, // Current logged in user
  friends: TEST.friends, // Current user friends
  media: TEST.media, // Media info
};

export default function App() {
  const [state, setState] = useState({
    chatVisible: true,
  });

  const toggleChat = () => {
    setState({ ...state, chatVisible: !state.chatVisible });
  };

  return (
    <>
      <Player
        onFullscreen={toggleChat}
        title={testData.media.title}
        src={testData.media.src}
      />
      <Chat
        users={testData.users}
        currentUser={testData.currentUser}
        friends={testData.friends}
        messages={testData.messages}
        style={state.chatVisible ? { visibility: 'visible' } : { visibility: 'hidden' }}
      />
    </>
  );
}
