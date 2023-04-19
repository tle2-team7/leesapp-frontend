import { useState } from "react";

function App() {
  const [hasStarted, setHasStarted] = useState<boolean>(false);

  const recognition: SpeechRecognition = new webkitSpeechRecognition() || new SpeechRecognition();
  recognition.interimResults = true;
  recognition.continuous = true;

  recognition.onresult = (event: SpeechRecognitionEvent) => {
    let index = event.results.length - 1;
    console.log(event.results[index]);
    const transcript = event.results[index][0].transcript;
    if (event.results[index].isFinal) {
      //place the spoken word in dom
      const transcriptElement = document.createElement("p");
      transcriptElement.innerText = transcript;
      document.querySelector(".wordContainer")?.appendChild(transcriptElement);
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
    <div className="App">
      <h1>Speech recognition test</h1>
      <button onClick={() => handleSwitchRecognition()}>
        {hasStarted ? "Stop" : "Start"} Speech Recognition {hasStarted}
      </button>
      <p>Lees voor:</p>
      <div className="wordContainer"></div>
    </div>
  );
}

export default App;
