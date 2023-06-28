import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Home() {

    const navigate = useNavigate();

    const handleMenuClick= () => {
        navigate(`/select`);
    };


  return (
    <div className="AssignmentSelection flex flex-col min-h-screen">
      <header className="bg-surface-main-150 text-center py-4">
        <h1 className="text-3xl font-bold">Uitlegvideo</h1>
      </header>
        <div className= "videoDiv">
        <iframe classnName= "video" width="840" height="472,5" src="https://www.youtube.com/embed/LmxtPAqbwsI" 
        title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; 
        encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
      <div className="homeNextStep">
          <button
            className="bg-surface-main-150 hover:bg-surface-dark-100 text-black font-bold py-2 px-4 rounded"
            onClick={() => handleMenuClick()}
            >
              Ga verder
          </button>
      </div>

      <footer className="bg-surface-main-150 py-4 text-center">
        GewoonLezen door <i>LanguageLeap</i>
      </footer>
    </div>
  );
  }

export default Home;

