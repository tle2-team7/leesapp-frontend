import { useEffect, useRef, useState } from "react";
import { TMessage } from "../App";
import { getStartMessage } from "../api/getStartMessage";
import loadingIcon from "../../public/loading.svg";

type TMessageProps = {
  message: TMessage;
};

export default function MessageComponent(props: TMessageProps) {
  const [content, setContent] = useState<String>("");

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
      const jsonData = await getStartMessage();
      setContent(jsonData.choices[0].message.content);
    }
  };

  return content ? <p className={props.message.isUser ? "speechOutput" : "sentenceToRead"}>{content}</p> : <img src={loadingIcon} alt="Loading icon" />;
}
