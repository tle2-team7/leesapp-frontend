import SpeechRecognitionComponent from "./components/SpeechRecognitionComponent";
function App() {
  return (
    <div className="App">
      <header className="p-4 items-center justify-center w-screen bg-sky-500">
        <h1 className="text-2xl">Speech recognition</h1>
      </header>
      <div id="speechRecognitionOutput" className="w-screen relative mb-24">
        <p className="sentenceToRead">Hier komt tekst te staan wat moet worden voorgelezen. Deze komt vanuit de back-end en is gegenereerd door chatGPT</p>
      </div>
      <footer className="fixed bottom-0 p-4 flex items-center justify-center w-screen bg-sky-600">
        <SpeechRecognitionComponent />
      </footer>
    </div>
  );
}

export default App;
