import  { useState } from 'react';

function App() {
  const [inputText, setInputText] = useState('');
  const [generatedSentence, setGeneratedSentence] = useState('');

  const handleGenerate = () => {
    // Replace this with the actual function to generate sentences
    setGeneratedSentence(`Generated sentence for: ${inputText}`);
  };

  const handleExample = (exampleText) => {
    setInputText(exampleText);
    handleGenerate();
  };

  return (
    <div className="relative min-h-screen flex flex-col justify-between items-center bg-gray-900 text-white">
      <div className="flex flex-col items-center justify-center flex-grow">
        <h1 className="text-4xl font-bold mb-8">Sentence Generator</h1>
        <div className="flex space-x-4 mb-16">
          <button
            onClick={() => handleExample('Example 1')}
            className="px-6 py-3 bg-gray-700 rounded-md hover:bg-gray-600"
          >
            Example 1
          </button>
          <button
            onClick={() => handleExample('Example 2')}
            className="px-6 py-3 bg-gray-700 rounded-md hover:bg-gray-600"
          >
            Example 2
          </button>
          <button
            onClick={() => handleExample('Example 3')}
            className="px-6 py-3 bg-gray-700 rounded-md hover:bg-gray-600"
          >
            Example 3
          </button>
        </div>
        <div className="flex mb-4">
          <p className="text-lg">{generatedSentence}</p>
        </div>
      </div>
      <div className="w-full px-6 py-8 bg-gray-800">
        <div className="flex max-w-3xl mx-auto">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Enter your text here..."
            className="flex-grow px-3 py-2 text-black rounded-md"
          />
          <button
            onClick={handleGenerate}
            className="ml-4 px-4 py-2 bg-indigo-500 rounded-md hover:bg-indigo-400"
          >
            Generate
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
