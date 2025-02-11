import  { useState } from 'react';
import axios from 'axios';
import Typewriter from 'typewriter-effect';
import  DropdownComponent  from './Components/DropdownComponent ';
import MyComponent from "./Components/MyComponent"; // Correct the import statement
 // Adjust the path as necessary


function App() {
  const [inputText, setInputText] = useState('');
  const [generatedSentence, setGeneratedSentence] = useState('');
  const [selectedModel, setSelectedModel] = useState('');
  const [isMyComponentActive, setIsMyComponentActive] = useState(true);

  const handleGenerate = async () => {
  try {
    const response = await axios.post('http://127.0.0.1:5000/generate', { 
      input_text: inputText,
      model: selectedModel, 
    });

    // Ensure the response structure is correct
    let responseData = response.data;
    
    // If the response is a JSON string, parse it
    if (typeof responseData === "string") {
      try {
        responseData = JSON.parse(responseData);
      } catch (parseError) {
        console.error("Error parsing JSON string:", parseError);
        setGeneratedSentence("<b style='color:red;'>Error: Invalid JSON string response.</b>");
        return;
      }
    }
  
    // Check if the response is valid structured data
    if (!responseData.generated_sentence && typeof responseData.generated_sentence !== "object") {
      console.error("Invalid response format");
      setGeneratedSentence("<b style='color:red;'>Error: Invalid response from server.</b>");
      return;
    }

    // Extract all the required fields from structured data or parsed JSON
    const { mnemonic, summary, story, key_points, main_topics } = responseData.generated_sentence || responseData;

    // Check if only the mnemonic is present
    if (mnemonic && !summary && !story && !key_points && !main_topics) {
      // If only mnemonic is present, display it
      setGeneratedSentence(`
        <b style="font-size:24px; color:#4CAF50;">Generated Result:</b><br><br>
        <b>Mnemonic:</b> ${mnemonic}
      `);
    } else {
    const formattedResponse = `
      <b style="font-size:24px; color:#4CAF50;">Generated Results:</b><br><br>
      <b>Mnemonic:</b> ${mnemonic || "N/A"}<br><br>
      <b>Summary:</b> ${summary || "N/A"}<br><br>
      <b>Story:</b> ${story || "N/A"}<br><br>
      <b>Key Points:</b> <ul style="margin-left:20px;">${key_points?.map(point => `<li>${point}</li>`).join("") || "N/A"}</ul><br>
      <b>Main Topics:</b> <ul style="margin-left:20px;">${main_topics?.map(topic => `<li>${topic}</li>`).join("") || "N/A"}</ul>
    `;
  
    setGeneratedSentence(formattedResponse);
    }
    setInputText('');
    setIsMyComponentActive(false);
  
  } catch (error) {
    console.error('Error generating sentence:', error);
    setGeneratedSentence("<b style='color:red;'>Error: Failed to generate text.</b>");
  }
};

  
  
  
  
  
  

  return (
    <div className="relative min-h-screen flex flex-col justify-between items-center bg-gray-900 text-white">
      <div className="flex flex-col items-center justify-center flex-grow">
        <h1 className="absolute text-4xl font-bold mb-6 -mt-60"><span style={{ color: 'blue' }}>Bodhi</span><span>Ment</span></h1>
        {isMyComponentActive ? (
          <div className="relative flex space-x-4 mb-0 top-10 max-w-2xl">
            <button>
              <MyComponent />
            </button>
          </div>
        ) : (
          <div className="flex flex-col mb-2">
            <div className="fixed top-48 left-80 max-w-2xl h-80 overflow-y-auto p-2 rounded-md custom-scroll">
            {generatedSentence && (
                <Typewriter
                  options={{
                    strings: [generatedSentence],
                    autoStart: true,
                    loop: false,
                    delay: 25,
                    deleteSpeed: 999999999999999,
                  }}
                />
              )}
            </div>
          </div>
        )}
      </div>
      <div className="w-full px-6 py-8 ">
        <div className="flex max-w-3xl mx-auto">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Enter your text here..."
            className="flex-grow px-3 py-2 text-black rounded-md bg-gray-800"
          />
          <button
            onClick={handleGenerate}
            className="ml-4 px-4 py-2 bg-indigo-500 font-medium text-gray-700 rounded-md hover:bg-indigo-400"
          >
            Generate
          </button>
          <div className="ml-4">
          <DropdownComponent onModelSelect={setSelectedModel} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
