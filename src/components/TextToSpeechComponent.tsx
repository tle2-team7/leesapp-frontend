const synth = window.speechSynthesis;

export default function speak(event: React.MouseEvent<HTMLDivElement>) {
  const target = event.target as HTMLElement;
  if (target.nodeName != "DIV" && target.nodeName != "BUTTON" && target.nodeName != "DIALOG") {
    const sentence = target.textContent;
    if (sentence !== null) {
      const utterThis = new SpeechSynthesisUtterance(sentence);
      utterThis.lang = "nl";
      synth.speak(utterThis);
    }
  }
}
