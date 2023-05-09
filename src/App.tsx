import { useEffect, useRef, useState } from "react";
import SpeechRecognitionComponent from "./components/SpeechRecognitionComponent";
import MessageComponent from "./components/MessageComponent";
import { getStartMessage } from "./api/getStartMessage";

// to save money, only turn this variable on when working on the API of gpt functionality
// this is basically a switch for development that turns api calls off since every api call
// costs us money
let runAPICalls = false;

export type TMessage = {
  isUser: boolean;
  text: String;
};

function App() {
  const [messages, setMessages] = useState<TMessage[]>([]);

  function createMessage(text: string, isUser: boolean) {
    if (!isUser) {
      setMessages([...messages, { text: "", isUser: isUser }]);
    } else {
      setMessages([...messages, { text: text, isUser: isUser }]);
    }
  }

  const shouldRun = useRef(true);
  useEffect(() => {
    if (shouldRun.current) {
      shouldRun.current = false;
      start();
    }
  }, []);

  const start = async () => {
    createMessage("", false);
  };

  return (
    <div className="App">
      <header className="p-4 items-center justify-center w-screen bg-sky-600">
        <h1 className="text-2xl">Speech recognition</h1>
      </header>
      <div className="w-screen relative mb-24">
        {messages.map((message, idx) => (
          <MessageComponent key={idx} message={message} />
        ))}
      </div>
      <footer className="fixed bottom-0 p-4 flex items-center justify-center w-screen bg-sky-600">
        <SpeechRecognitionComponent createMessage={createMessage} />
      </footer>
    </div>
  );
}

export default App;
