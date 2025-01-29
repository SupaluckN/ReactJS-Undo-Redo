//import './App.css';

import { useState  } from "react";

function App() {

  const [content, setContent] = useState("");
  const [step, setStep] = useState([]);

  return (
    <>
      <div>
        <h1>Input content</h1>
        <label htmlFor="content">Content Zone</label>
        <div>
         <textarea cols="30" rows="10"
         id="content"
         value={content}
         onChange={(event) => {
          setContent(event.target.value)
          setStep((latestStep) => [
            {content}, ...latestStep
          ])
         }}
         />
        </div>
        <button
          disabled={!step.length}
          onClick={() => {
            const previousStep = step[0];
           
            if(previousStep) {
              setContent(previousStep.content)
              console.log(previousStep.content)
              setStep((latestStep) => latestStep.slice(1))
              console.log((latestStep) => latestStep.slice(1))
            }
          }}
        >
          Undo
        </button>
      </div>
    </>
  );
}

export default App;
