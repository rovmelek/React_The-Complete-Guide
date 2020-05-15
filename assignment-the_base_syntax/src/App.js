import React, { useState } from 'react';
import './App.css';
import './lib/HPM.css';
import { userInput as UserInput, userOutput as UserOutput } from './UserInterface/InputOutput';

const getBaseAttr = (tagName) =>
{
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
  const [highlightsState, setHighlightsState] = useState(
    {
      formID: "highlights",
      labelText: "Highlights",
      name: "highlights",
      value: ""
    }
  );

  const [peopleState, setPeopleState] = useState(
    {
      formID: "people",
      labelText: "People",
      name: "people",
      value: ""
    }
  );

  const [meState, setMeState] = useState(
    {
      formID: "me",
      labelText: "Me",
      name: "me",
      value: ""
    }
  );

  const setState = (event) =>
  {
    if (event.target.name === 'highlights')
    {
      setHighlightsState(
        {
          formID: "highlights",
          labelText: "Highlights",
          name: "highlights",
          value: event.target.value
        }
      );
    }
  
    if (event.target.name === 'people')
    {
      setPeopleState(
        {
          formID: "people",
          labelText: "People",
          name: "people",
          value: event.target.value
        }
      );      
    }
  
    if (event.target.name === 'me')
    {
      setMeState(
        {
          formID: "me",
          labelText: "Me",
          name: "me",
          value: event.target.value
        }
      );      
    }
  }

  return (
    <div className="App">
      <UserInput
        baseTagAttr={getBaseAttr('baseTagAttr')}
        attr={highlightsState}
        change={setState}
      />
      <UserOutput
        baseTagAttr={getBaseAttr('baseTagAttr')}
        attr={highlightsState}
      />
      <hr
        className="hrStyle"
      />
      <UserInput
        baseTagAttr={getBaseAttr('baseTagAttr')}
        attr={peopleState}
        change={setState}
      />
      <UserOutput
        baseTagAttr={getBaseAttr('baseTagAttr')}
        attr={peopleState}
      />
      <hr
        className="hrStyle"
      />
      <UserInput
        baseTagAttr={getBaseAttr('baseTagAttr')}
        attr={meState}
        change={setState}
      />
      <UserOutput
        baseTagAttr={getBaseAttr('baseTagAttr')}
        attr={meState}
      />
    </div>
  );
}

export default App;
