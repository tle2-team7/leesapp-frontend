import { useState } from "react";
import SpeechRecognitionComponent from "./components/SpeechRecognitionComponent";
import MessageComponent from "./components/MessageComponent";

export type TMessage = {
  isUser: boolean;
  text: String;
};

function App() {
  const [messages, setMessages] = useState<TMessage[]>([]);

  function createMessage(text: string, isUser: boolean) {
    setMessages([...messages, { text: text, isUser: isUser }]);
  }

  return (
    <div className="App">
      <header className="p-4 items-center justify-center w-screen bg-sky-600">
        <h1 className="text-2xl">Speech recognition</h1>
      </header>
      <div id="speechRecognitionOutput" className="w-screen relative mb-24">
        <p className="sentenceToRead">Hier komt tekst te staan wat moet worden voorgelezen. Deze komt vanuit de back-end en is gegenereerd door chatGPT</p>
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
