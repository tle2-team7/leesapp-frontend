import { useRef } from "react";

export default function ModalComponent() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == dialogRef.current) {
      dialogRef.current?.close();
    }
  };
  return (
    <div>
      <button onClick={() => dialogRef.current?.showModal()} className="w-6 h-6 p-0 z-10 -bottom-2 left-72 absolute rounded-full flex items-center justify-center text-center bg-secondary-dark-300 text-white">
        i
      </button>
      <dialog ref={dialogRef}>
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
