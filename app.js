// src/App.js
import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [text, setText] = useState('');
  const [searchText, setSearchText] = useState('');
  const [replaceText, setReplaceText] = useState('');

  // Helper function to get unique word count
  const getUniqueWordCount = (inputText) => {
    const words = inputText.toLowerCase().match(/\b\w+\b/g) || [];
    const uniqueWords = new Set(words);
    return uniqueWords.size;
  };

  // Helper function to get character count excluding spaces and punctuation
  const getCharacterCount = (inputText) => {
    return (inputText.match(/[a-zA-Z0-9]/g) || []).length;
  };

  // Function to handle string replacement
  const handleReplaceAll = () => {
    setText(text.split(searchText).join(replaceText));
  };

  return (
    <div className="container">
      <h1>Real-Time Text Analysis</h1>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type here..."
      />
      <div className="stats">
        <p>Unique Words: {getUniqueWordCount(text)}</p>
        <p>Characters (excluding spaces and punctuation): {getCharacterCount(text)}</p>
      </div>
      <div className="replacement">
        <input
          type="text"
          placeholder="Search for..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <input
          type="text"
          placeholder="Replace with..."
          value={replaceText}
          onChange={(e) => setReplaceText(e.target.value)}
        />
        <button onClick={handleReplaceAll}>Replace All</button>
      </div>
    </div>
  );
};

export default App;
