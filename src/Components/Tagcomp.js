import React, { useState } from 'react';
import TagsInput from 'react-tagsinput';
import 'react-tagsinput/react-tagsinput.css'; // Import the default styles

function TagInputComponent() {
  const [tags, setTags] = useState([]);

  const handleTagChange = (tags) => {
    setTags(tags);
  };

  return (
    <div>
      <label>Tags:</label>
      <TagsInput value={tags} onChange={handleTagChange} />
      <div>
        {tags.map((tag, index) => (
          <span key={index} className="tag">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export default TagInputComponent;
