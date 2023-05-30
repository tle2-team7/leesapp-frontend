import { useEffect, useRef, useState } from "react";
import SpeechRecognitionComponent from "../components/SpeechRecognitionComponent";
import MessageComponent from "../components/MessageComponent";
import { postPrompt } from "../api/postPrompt";

export type TMessage = {
  text: string;
  prompt: string;
  isUser: boolean;
};

function Assignment(){
  const [messages, setMessages] = useState<TMessage[]>([]);
  const messagesContainerRef = useRef<HTMLDivElement>(null);

  function createMessage(text: string, isUser: boolean, isFirst: boolean) {
    setMessages((prevMessages) => [...prevMessages, { text: text, isUser: isUser, isFirst: isFirst }]);
  }

  const promptTranscript = async (transcript: string) => {
    const response = await postPrompt(transcript);
    createMessage(response.choices[0].message.content, false, false);
  };

  //shouldrun ensures that the useEffect only runs once, without this the useEffect runs twice
  //because of react strict mode being used in tandem with npm run dev
  const shouldRun = useRef(true);
  useEffect(() => {
    if (shouldRun.current) {
      shouldRun.current = false;
      createMessage("", "", false);
    }
  }, []);

  useEffect(() => {
    scrollToBottom();
    console.log(messages);
  }, [messages]);

  function scrollToBottom() {
    if (messagesContainerRef.current) {
      setTimeout(() => {
        messagesContainerRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
      }, 100);
    }
  }

  function createMessage(text: string, prompt: string, isUser: boolean) {
    setMessages((prevMessages) => [...prevMessages, { text: text, prompt: prompt, isUser: isUser }]);
  }

  return (
    <div className="Assignment">
      <header className="p-4 items-center justify-center w-screen bg-sky-600">
        <h1 className="text-2xl text-center">Leer lezen met GPT</h1>
      </header>
      <div className="w-screen relative mb-24" ref={messagesContainerRef}>
        {messages.map((message, idx) => (
          <MessageComponent key={idx} text={message.text} prompt={message.prompt} isUser={message.isUser} />
        ))}
      </div>
      <footer className="fixed bottom-0 p-4 flex items-center justify-center w-screen bg-secondary-main-500">
        <SpeechRecognitionComponent createMessage={createMessage} />
      </footer>
    </div>
  );
}

export default Assignment;
