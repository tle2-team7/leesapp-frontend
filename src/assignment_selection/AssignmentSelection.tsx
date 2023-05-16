import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AssignmentSelection() {
  const assignmentTopic = [
    { title: 'begroetingen', progress: 7 },
    { title: 'familie', progress: 5 },
    { title: 'boodschappen', progress: 9 },
    { title: 'vervoer', progress: 8 },
    { title: 'vrijetijd', progress: 0 },
    { title: 'wonen', progress: 0 },
    { title: 'werk', progress: 0 },
    { title: 'eten', progress: 0 },
  ];


  const navigate = useNavigate();

  const handleTopicClick = (topic) => {
    navigate(`/assignment?topic=${topic.title}`);
  };

  const capitalizeFirstLetter = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  };


  return (
    <div className="AssignmentSelection flex flex-col min-h-screen">
      <header className="bg-surface-main-150 text-center py-4">
        <h1 className="text-3xl font-bold">Kies een opdracht onderwerp</h1>
      </header>

      <div className="grid grid-cols-2 gap-4 p-8 flex-grow">
        {assignmentTopic.map((topic, index) => (
          <button
            key={index}
            className="bg-surface-main-150 hover:bg-surface-dark-100 text-black font-bold py-2 px-4 rounded"
            onClick={() => handleTopicClick(topic)}
          >
            <div>
              <p>{capitalizeFirstLetter(topic.title)}</p>
            </div>
            <div className="text-center text-gray-500 text-sm">
              <p>{topic.progress}/10</p>
            </div>
          </button>
        ))}
      </div>

      <footer className="bg-surface-main-150 py-4 text-center">
        TLE Team 7
      </footer>
    </div>
  );
}

export default AssignmentSelection;
