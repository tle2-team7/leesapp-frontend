import { useEffect, useRef, useState } from "react";
import { TMessage } from "../App";
import { getStartMessage } from "../api/getStartMessage";
import loadingIcon from "../../public/loading2.svg";

type TMessageProps = {
  message: TMessage;
};

// to save money, only turn this variable on when working on the API of gpt functionality
// this is basically a switch for development that turns api calls off since every api call
// costs us money
let runAPICalls = false;

export default function MessageComponent(props: TMessageProps) {
  const [content, setContent] = useState<String>("");

  //shouldrun ensures that the useEffect only runs once, without this the useEffect runs twice
  //because of react strict mode being used in tandem with npm run dev
  const shouldRun = useRef(true);
  useEffect(() => {
    if (shouldRun.current) {
      shouldRun.current = false;

      start();
    }
  }, []);

  const start = async () => {
    if (props.message.isUser) {
      setContent(props.message.text);
    } else {
      if (runAPICalls) {
        const jsonData = await getStartMessage();
        setContent(jsonData.choices[0].message.content);
      } else {
        setContent("runAPICalls boolean has been set to false. Set to true to run api calls. Only set to true when working on the API, GPT, or for testing purposes");
      }
    }
  };

  //show loading animation until content been received from api.
  //if the message is from a user show speechOutput styling, else show sentenceToRead styling
  return content ? <p className={props.message.isUser ? "speechOutput" : "sentenceToRead"}>{content}</p> : <img className="w-16 m-8" src={loadingIcon} alt="Loading icon" />;
}
