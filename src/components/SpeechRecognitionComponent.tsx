import { useState } from "react";
import microphoneOn from "../img/microphoneOn.png";
import microphoneOff from "../img/microphoneOff.png";

type TSpeechRecognitionProps = {
  createMessage: Function;
  promptTranscript: Function;
};

export default function SpeechRecognitionComponent(props: TSpeechRecognitionProps) {
  const [hasStarted, setHasStarted] = useState<boolean>(false);

  const recognition: SpeechRecognition = new webkitSpeechRecognition() || new SpeechRecognition();
  recognition.lang = "nl-NL";
  recognition.interimResults = true;

  //if set to true, speech recognition wont turn off after a final sentence flag
  //if set to false, speech recognition turns off after a final flag

  //true breaks the ability to turn off the voice recognition, even after recognition.stop is called
  //if set to false, speech recognition keeps turning off after every sentence
  //TODO: add the ability to only listen for a voice when holding down the button.
  recognition.continuous = false;

  recognition.onresult = (event: SpeechRecognitionEvent) => {
    let index = event.results.length - 1;
    const transcript = event.results[index][0].transcript;
    if (event.results[index].isFinal) {
      //this is the function that creates a new MessageComponent, this function is in app.tsx
      props.createMessage(transcript, true, false);
      props.promptTranscript(transcript);
    }
  };

  recognition.onaudiostart = () => {
    setHasStarted(true);
    console.log("Audio capturing started");
  };

  recognition.onspeechend = () => {
    setHasStarted(false);
    console.log("Speech has stopped being detected");
  };

  recognition.onend = () => {
    setHasStarted(false);
    console.log("Speech recognition service disconnected");
  };

  recognition.onerror = (event: SpeechRecognitionErrorEvent) => {
    console.error(`Speech recognition error detected: ${event.error}`);
  };

  const handleSwitchRecognition = () => {
    if (!hasStarted) {
      recognition.start();
    } else {
      recognition.stop();
    }
  };

  return (
    <div>
      <button className="bg-white rounded-full w-18 h-18 flex justify-center items-center" onClick={() => handleSwitchRecognition()}>
        <img className="w-8" src={hasStarted ? microphoneOn : microphoneOff} alt="microphone" />
        {hasStarted}
      </button>
    </div>
  );
}
