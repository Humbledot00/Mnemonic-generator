import { useState, useEffect } from 'react';
import Typewriter from 'typewriter-effect';

const contentArray = [
  { id: 1, title: 'Great Lakes Mnemonic ', content: '<b>The acronym "HOMES" is a mnemonic device used to remember the names of the five Great Lakes in North America.<br><br><ul><li><b>H</b>uron</li><li><b>O</b>ntario</li><li><b>M</b>ichigan</li><li><b>E</b>rie</li><li><b>S</b>uperior</li></ul>' },

  { id: 2, title: 'Planets Mnemonic ',  content: '<b>The mnemonic "My Very Educated Mother Just Sent Us Nine Pizzas" is used to remember the names of the nine planets in our solar system.<br><br><ul><li><b>M</b>ercury</li><li><b>V</b>enus</li><li><b>E</b>arth</li><li><b>M</b>ars</li><li><b>J</b>upiter</li><li><b>S</b>aturn</li><li><b>U</b>ranus</li><li><b>N</b>eptune</li><li><b>P</b>luto</li></ul>',
  },

  { id: 3, title: 'Periodic Table Elements Mnemonic ',     content: '<b>The mnemonic "Happy Henry Lives Beside Boron Cottage" is used to remember the names of the first six elements in the periodic table.<br><br><ul><li><b>H</b>ydrogen</li><li><b>He</b>lium</li><li><b>Li</b>thium</li><li><b>Be</b>ryllium</li><li><b>B</b>oron</li><li><b>C</b>arbon</li></ul>',
 },

  { id: 4, title: 'Cell Cycle Phases Mnemonic ',     content: '<b>The mnemonic "Go Sally Go! Make Children" is used to remember the phases of the cell cycle.<br><br><ul><li><b>G1</b> Growth phase 1</li><li><b>S</b> Synthetic phase</li><li><b>G2</b> Growth phase 2</li><li><b>M</b> Mitosis/Meiosis</li><li><b>C</b> Cytokinesis</li></ul>',
 },

  { id: 5, title: 'Skull Bones Mnemonic ',     content: '<b>The mnemonic "Old People From Texas Eat Spiders" is used to remember the six most important bones in the skull.<br><br><ul><li><b>O</b>ccipital</li><li><b>P</b>arietal</li><li><b>F</b>rontal</li><li><b>T</b>emporal</li><li><b>E</b>thmoid</li><li><b>S</b>phenoid</li></ul>',
 },

  { id: 6, title: 'Chemical Elements Mnemonic ',     content: '<b>The mnemonic "heena meena aur kareena xerox rani" can be used to remember the elements Helium (He), Manganese (Mn), Argon (Ar), and Radon (Rn).</b>',
 },
];

const getRandomContent = (arr, num) => {
  const shuffled = [...arr].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, num);
};

const MyComponent = () => {
  const [selectedContent, setSelectedContent] = useState(null);
  const [displayedContent, setDisplayedContent] = useState([]);

  useEffect(() => {
    const randomContent = getRandomContent(contentArray, 3);
    setDisplayedContent(randomContent);
  }, []);

  const handleExample = (content) => {
    setSelectedContent(content);
  };

  return (
    <div className="relative  flex flex-col justify-center items-center">
      {!selectedContent ? (
        <div className="flex space-x-4 mb-8">
          {displayedContent.map((item) => (
            <button
              key={item.id}
              onClick={() => handleExample(item.content)}
              className="px-12 py-10 bg-gray-700 bg-opacity-50 border border-gray-600 rounded-md hover:bg-gray-600 hover:bg-opacity-50 glass-effect focus:ring-1 focus:ring-indigo-600 focus:outline-none font-medium text-white-700"
            >
              {item.title}
            </button>
          ))}
        </div>
      ) : (
        <div className="max-w-2xl mt-4 p-4 text-white rounded-md">
          <Typewriter
            options={{
              strings: [selectedContent],
              autoStart: true,
              loop: false,
              delay: 25,
              deleteSpeed: 999999999999999,
              html: true,
            }}
          />
        </div>
      )}
    </div>
  );
};

export default MyComponent;
