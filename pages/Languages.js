import React, { useState } from 'react';

const Languages = () => {
  const [Languages, setLanguages] = useState(['Kannada', 'English']);
  const [newLanguage, setnewLanguage] = useState('');

  const handleDeleteLanguage = (index) => {
    const updatedLanguages = [...Languages];
    updatedLanguages.splice(index, 1);
    setLanguages(updatedLanguages);
  };

  const handleAddLanguage = () => {
    if (newLanguage.trim() !== '') {
      setLanguages([...Languages, newLanguage]);
      setnewLanguage('');
    }
  };

  return (
    <div>
      <div className="language">Languages</div>
      <div>
      <div className="lang1-box"></div>
        <div className="lang1-txt">{Languages[0]}</div>
        <div className="ld1" onClick={() => handleDeleteLanguage(0)}>
          &#128465;
        </div>
      </div>
      <div className="lang2-box"></div>
        <div className="lang2-txt">{Languages[1]}</div>
        <div className="ld2" onClick={() => handleDeleteLanguage(1)}>
          &#128465;
        </div>
      {Languages.length < 3 && (
        <div>
        <div className="add-language-box"></div>
          <input
            type="text"
            className="add-language-txt"
            value={newLanguage}
            onChange={(e) => setnewLanguage(e.target.value)}
          />
          <button className="add-language-symbol" onClick={handleAddLanguage}>
            +  Add Language
          </button>
        </div>
      )}
      {Languages.length >= 3 && (
        <div className="max-Languages-message">You have reached the maximum number of Languages.</div>
      )}
    </div>
  );
};

export default Languages;