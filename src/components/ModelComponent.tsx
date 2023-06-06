import { useRef, useState } from "react";

export default function ModelComponent() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div>
      <button className="w-8 h-8 p-0 rounded-full flex items-center justify-center text-center bg-secondary-dark-300 text-white" onClick={() => setIsOpen(!isOpen)}>
        i
      </button>
      <dialog open={isOpen}>
        <p>Deze zin is gegenereerd door een kunstmatige intelligentie. Er wordt gekeken naar:</p>
        <ul>
          <li>Vorige antwoorden</li>
          <li>Vorige fouten</li>
          <li>Het onderwerp</li>
        </ul>
      </dialog>
    </div>
  );
}
