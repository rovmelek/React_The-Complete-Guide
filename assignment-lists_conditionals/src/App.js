import React, { useState } from 'react';
import { userInput as UserInput } from './component/UserInput';
import { validateLength as ValidateLength } from './component/ValidationComponent';
import { displayByChar as DisplayByChar } from './component/CharComponent';
import './App.css';
import './lib/HPM.css';

const getBaseAttr = (tagName) => {
  const tagAttr =
  {
    baseTagAttr:
    {
      rows: 5,
      cols: 80,
    }
  }

  return tagAttr[tagName]
}

function App() {
  const [inputState, setInputState] = useState(
    {
      inputText: '',
    }
  );

  const deleteCharHandler = (charIndex) => {
    let updatedInput = [...inputState.inputText];
    updatedInput.splice(charIndex, 1);

    setInputState(
      {
        inputText: updatedInput.join(''),
        count: updatedInput.length,
      }
    );
  }

  const inputChangeHandler = (event) => {
    setInputState(
      {
        inputText: event.target.value,
        count: event.target.value.length,
      }
    )
  }

  const displaycbyc = (
    <div>
      {inputState.inputText.split('').map((char, index) => {
        return <DisplayByChar
          value={char}
          key={char+index}
          click={() => deleteCharHandler(index)}
        />
      })}
    </div>
  );

  return (
    <div className="App">
      <UserInput
        baseTagAttr={getBaseAttr('baseTagAttr')}
        state={inputState}
        change={inputChangeHandler}
      />
      <p>Characters: {inputState.inputText.length}</p>
      <p> User input: {inputState.inputText}</p>
      <ValidateLength input={inputState} />
      {displaycbyc}
    </div>
  );
}

export default App;
