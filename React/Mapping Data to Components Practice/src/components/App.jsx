import React from "react";
import Entry from "./Entry.jsx";
import emojipedia from "../emojipedia.js";

//1.Create Entry Component
//2. Create Props to Replace Hard Coded Data
//3. Map through the emojipedia array and render Entry components
//4. Import Emojipedia const.

function createEntry(emojiTerm) {
  return (
    <Entry
      key={emojiTerm.id}
      emoji={emojiTerm.emoji}
      name={emojiTerm.name}
      description={emojiTerm.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{emojipedia.map(createEntry)}</dl>
    </div>
  );
}

export default App;
