import { useState } from "react";
import microphoneOn from "../img/microphoneOn.png";
import microphoneOff from "../img/microphoneOff.png";

export default function SpeechRecognitionComponent() {
  const [hasStarted, setHasStarted] = useState<boolean>(false);

  const recognition: SpeechRecognition = new webkitSpeechRecognition() || new SpeechRecognition();
  recognition.lang = "nl-NL";
  recognition.interimResults = true;
  recognition.continuous = true;

  recognition.onresult = (event: SpeechRecognitionEvent) => {
    let index = event.results.length - 1;
    const transcript = event.results[index][0].transcript;
    if (event.results[index].isFinal) {
      // place the spoken word in dom
      const transcriptElement = document.createElement("p");
      transcriptElement.classList.add("speechOutput");
      transcriptElement.innerText = transcript;
      document.getElementById("speechRecognitionOutput")?.appendChild(transcriptElement);
    }
  };

  recognition.onaudiostart = () => {
    console.log("Audio capturing started");
  };

  recognition.onend = () => {
    console.log("Speech recognition service disconnected");
  };

  recognition.onspeechend = () => {
    console.log("Speech has stopped being detected");
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
    setHasStarted(!hasStarted);
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
