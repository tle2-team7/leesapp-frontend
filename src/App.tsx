import { useEffect, useRef, useState } from "react";
import SpeechRecognitionComponent from "./components/SpeechRecognitionComponent";
import MessageComponent from "./components/MessageComponent";

export type TMessage = {
  text: string; //user message
  prompt: string; //prompt to make a gpt response
  isUser: boolean;
  isFirst: boolean;
};

function App() {
  const [messages, setMessages] = useState<TMessage[]>([]);

  //shouldrun ensures that the useEffect only runs once, without this the useEffect runs twice
  //because of react strict mode being used in tandem with npm run dev
  const shouldRun = useRef(true);
  useEffect(() => {
    if (shouldRun.current) {
      shouldRun.current = false;
      createMessage("", "", false, true);
    }
  }, []);

  function createMessage(text: string, prompt: string, isUser: boolean, isFirst: boolean) {
    setMessages((prevMessages) => [...prevMessages, { text: text, prompt: prompt, isUser: isUser, isFirst: isFirst }]);
  }

  return (
    <div className="App">
      <header className="p-4 items-center justify-center w-screen bg-sky-600">
        <h1 className="text-2xl text-center">Leer lezen met GPT</h1>
      </header>
      <div className="w-screen relative mb-24">
        {messages.map((message, idx) => (
          <MessageComponent key={idx} text={message.text} prompt={message.prompt} isUser={message.isUser} isFirst={message.isFirst} />
        ))}
      </div>
      <footer className="fixed bottom-0 p-4 flex items-center justify-center w-screen bg-sky-600">
        <SpeechRecognitionComponent createMessage={createMessage} />
      </footer>
    </div>
  );
}

export default App;
