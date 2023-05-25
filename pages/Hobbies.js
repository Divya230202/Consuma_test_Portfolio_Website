import React, { useState } from 'react';

const Hobbies = () => {
  const [hobbies, setHobbies] = useState(['Drawing', 'Cooking']);
  const [newHobby, setNewHobby] = useState('');

  const handleDeleteHobby = (index) => {
    const updatedHobbies = [...hobbies];
    updatedHobbies.splice(index, 1);
    setHobbies(updatedHobbies);
  };

  const handleAddHobby = () => {
    if (newHobby.trim() !== '') {
      setHobbies([...hobbies, newHobby]);
      setNewHobby('');
    }
  };

  return (
    <div>
      <div className="hobbies">Hobbies</div>
      <div>
      <div className="hob1-box"></div>
        <div className="hob1-txt">{hobbies[0]}</div>
        <div className="hd1" onClick={() => handleDeleteHobby(0)}>
          &#128465;
        </div>
      </div>
      <div className="hob2-box"></div>
        <div className="hob2-txt">{hobbies[1]}</div>
        <div className="hd2" onClick={() => handleDeleteHobby(1)}>
          &#128465;
        </div>
      {hobbies.length < 3 && (
        <div>
        <div className="add-skill-box"></div>
          <input
            type="text"
            className="add-skill-txt"
            value={newHobby}
            onChange={(e) => setNewHobby(e.target.value)}
          />
          <button className="add-skill-symbol" onClick={handleAddHobby}>
            +  Add Hobby
          </button>
        </div>
      )}
      {hobbies.length >= 3 && (
        <div className="max-hobbies-message">You have reached the maximum number of hobbies.</div>
      )}
    </div>
  );
};

export default Hobbies;