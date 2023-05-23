import { useEffect, useRef, useState } from "react";
import { TMessage } from "../App";
import { postPrompt } from "../api/postPrompt";
import loadingIcon from "../../public/loading2.svg";

// to save money, only turn this variable on when working on the API of gpt functionality
// this is basically a switch for development that turns api calls off since every api call
// costs us money
const runAPICalls = true;

export default function MessageComponent(props: TMessage) {
  const [text, setText] = useState<string>(props.text);
  const [prompt] = useState<string>(props.prompt);
  const [isUser] = useState<boolean>(props.isUser);

  const [isLoading, setIsLoading] = useState<boolean>(true);

  //shouldrun ensures that the useEffect only runs once, without this the useEffect runs twice
  //because of react strict mode being used in tandem with npm run dev
  const shouldRun = useRef(true);
  useEffect(() => {
    if (shouldRun.current) {
      shouldRun.current = false;
      if (!prompt && !text) {
        //initial message, start message
        generateGPTMessage("");
      } else if (prompt) {
        //gpt responds to user
        generateGPTMessage(prompt);
      } else if (text) {
        //user message
        setIsLoading(false);
      } else {
        //error
        setIsLoading(false);
        setText("An error occurred");
        console.error(`An error occurred, prompt: ${prompt}, text: ${text}, isUser: ${isUser}`);
      }
    }
  }, []);

  const generateGPTMessage = async (prompt: string) => {
    if (!runAPICalls) {
      setText("runAPICalls boolean has been set to false. Set to true to run api calls. Only set to true when working on the API, GPT, or for testing purposes");
      return;
    }
    postPrompt(prompt)
      .then((response) => {
        setText(response.choices[0].message.content);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  //show loading animation until content been received from api.
  //if the message is from a user show speechOutput styling, else show sentenceToRead styling
  return isLoading ? <img className="w-16 m-8" src={loadingIcon} alt="Loading icon" /> : <p className={isUser ? "message messageUser" : "message messageGpt"}>{text}</p>;
}
