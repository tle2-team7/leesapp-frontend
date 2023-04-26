import { TMessage } from "../App";

type TMessageProps = {
  message: TMessage;
};

export default function MessageComponent(props: TMessageProps) {
  return <p className={props.message.isUser ? "speechOutput" : "messageToRead"}>{props.message.text}</p>;
}
