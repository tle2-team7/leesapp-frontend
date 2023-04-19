import SpeechRecognitionComponent from "./components/SpeechRecognitionComponent";
function App() {
  return (
    <div className="App">
      <header className="p-4 items-center justify-center w-screen bg-sky-500">
        <h1 className="text-2xl">Speech recognition</h1>
      </header>
      <div className="speechRecognitionOutput w-screen relative">{/* <p className="speechOutput">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem, inventore praesentium corrupti mollitia, dolor officiis deserunt esse perspiciatis officia rerum, reiciendis modi adipisci natus magnam?</p> */}</div>
      <footer className="absolute bottom-0 p-4 flex items-center justify-center w-screen bg-sky-600">
        <SpeechRecognitionComponent />
      </footer>
    </div>
  );
}

export default App;
