import { useEffect, useRef, useState } from "react";
import SpeechRecognitionComponent from "../components/SpeechRecognitionComponent";
import MessageComponent from "../components/MessageComponent";
import { postPrompt } from "../api/postPrompt";

export type TMessage = {
  text: string;
  isUser: boolean;
  isFirst: boolean;
};

function Assignment(){
  const [messages, setMessages] = useState<TMessage[]>([]);

  function createMessage(text: string, isUser: boolean, isFirst: boolean) {
    setMessages((prevMessages) => [...prevMessages, { text: text, isUser: isUser, isFirst: isFirst }]);
  }

  const promptTranscript = async (transcript: string) => {
    const response = await postPrompt(transcript);
    createMessage(response.choices[0].message.content, false, false);
  };

  //shouldRun ensures that the useEffect only runs once, without this the useEffect runs twice
  //because of react strict mode being used in tandem with npm run dev
  const shouldRun = useRef(true);
  useEffect(() => {
    if (shouldRun.current) {
      shouldRun.current = false;
      createMessage("", false, true);
    }
  }, []);

  return (
    <div className="Assignment">
      <header className="p-4 items-center justify-center w-screen bg-sky-600">
        <h1 className="text-2xl">Speech recognition</h1>
      </header>
      <div className="w-screen relative mb-24">
        {messages.map((message, idx) => (
          <MessageComponent key={idx} message={message} />
        ))}
      </div>
      <footer className="fixed bottom-0 p-4 flex items-center justify-center w-screen bg-sky-600">
        <SpeechRecognitionComponent createMessage={createMessage} promptTranscript={promptTranscript} />
      </footer>
    </div>
  );
}

export default Assignment;
