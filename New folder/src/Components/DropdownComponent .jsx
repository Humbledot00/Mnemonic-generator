import  { useState } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes

const DropdownComponent = ({ onModelSelect }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (model) => {
    setIsOpen(false);
    onModelSelect(model);
  };

  const items = [
    { icon: '🤖', label: 'Lite', id: 'lite' },
    { icon: '🧠', label: 'Base', id: 'base' },
    { icon: '⚙️', label: 'Each Word', id: 'each_word' },
  ];

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          onClick={toggleDropdown}
        >
          Model
          <svg
            className="-mr-1 ml-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="origin-bottom-right absolute right-0 bottom-full mb-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            {items.map((item, index) => (
              <button
                key={index}
                className="text-gray-700 font-medium  block px-4 py-2 text-sm hover:bg-gray-100 w-full text-left"
                role="menuitem"
                onClick={() => handleItemClick(item.id)}
              >
                <span className="mr-3">{item.icon}</span>
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

// PropTypes validation
DropdownComponent.propTypes = {
  onModelSelect: PropTypes.func.isRequired, // Validate onModelSelect as a required function
};

export default DropdownComponent;
