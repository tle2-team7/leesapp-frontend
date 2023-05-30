import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function AssignmentSelection() {
  const [assignmentTopic, setAssignmentTopic] = useState([]);

  // const assignmentTopic = [
  //   { title: 'begroetingen', progress: 7 },
  //   { title: 'familie', progress: 5 },
  //   { title: 'boodschappen', progress: 9 },
  //   { title: 'vervoer', progress: 8 },
  //   { title: 'vrijetijd', progress: 0 },
  //   { title: 'wonen', progress: 0 },
  //   { title: 'werk', progress: 0 },
  //   { title: 'eten', progress: 0 },
  // ];

  const navigate = useNavigate();

  useEffect(() => {
    // Fetch JSON data from external file
    fetch("data.json")
      .then((response) => response.json())
      .then((data) => setAssignmentTopic(data))
      .catch((error) => console.error(error));
  }, []);

    /**
   * Handle click event for a topic button.
   * Navigates to the assignment page with the selected topic.
   * Gives the selected topic type in the get request so the topic can be worked into the prompt to gpt as a variable.
   * @param {object} topic - The selected topic object.
   */
  const handleTopicClick = (topic) => {
    navigate(`/assignment?topic=${topic.title}`);
  };

  /**
   * Capitalize the first letter of a word.
   * Topics will be saved without capitalisation
   * @param {string} word - The word to capitalize.
   * @returns {string} The word with the first letter capitalized.
   */
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
              <p className="text-black">{capitalizeFirstLetter(topic.title)}</p>
            </div>
            <div className="text-center text-black text-sm">
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
