import PropTypes from "prop-types";

const DisplayGeneratedText = ({ response }) => {
  if (!response) return null;

  const { story, key_points, main_topics = [], simplified_text, mnemonic, summary } = response;

  return (
    <div>
      <h2>Generated Story</h2>
      <p>{story}</p>

      <h2>Key Points</h2>
      <ul>
        {key_points.map((point, i) => (
          <li key={i}>{point}</li>
        ))}
      </ul>

      <h2>Main Topics</h2>
      <p>{main_topics.join(", ")}</p>

      <h2>Simplified Text</h2>
      <p>{simplified_text}</p>

      <h2>Generated Mnemonic</h2>
      <p>{mnemonic}</p>

      <h2>Generated Summary</h2>
      <p>{summary}</p>
    </div>
  );
};

// ✅ Add PropTypes validation
DisplayGeneratedText.propTypes = {
  response: PropTypes.shape({
    story: PropTypes.string,
    key_points: PropTypes.arrayOf(PropTypes.string),
    main_topics: PropTypes.arrayOf(PropTypes.string), // Ensuring array type
    simplified_text: PropTypes.string,
    mnemonic: PropTypes.string,
    summary: PropTypes.string,
  }),
};

export default DisplayGeneratedText;
