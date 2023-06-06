const synth = window.speechSynthesis;

export default function speak(event: React.MouseEvent<HTMLDivElement>) {
  if ((event.target as HTMLElement).nodeName != "DIV") {
    const sentence = (event.target as HTMLElement).textContent;
    if (sentence !== null) {
      const utterThis = new SpeechSynthesisUtterance(sentence);
      utterThis.lang = "nl";
      synth.speak(utterThis);
    }
  }
}
