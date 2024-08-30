import React, { useState } from "react";
import Confetti from "react-confetti";

export default function Poem() {
  const poemLines = [
    "To feel the absence",
    "To yearn the touch",
    "To name the void",
    "To understand an ending",
    "To familiarize with ghosts",
    "To endure the cold",
    "To smell the repetition",
    "To wake at dusk",
    "To trace the time",
    "To water a memory",
    "To search in emptiness",
    "To accompany the vacuum",
    "To love without an aim",
    "To sing a forgotten melody",
    "To remember to forget",
    "To stay at the departure",
    "To live you again",
    "To write a poem",
  ];

  const [checkedItems, setCheckedItems] = useState(
    new Array(poemLines.length).fill(false)
  );
  const [otherText, setOtherText] = useState("");
  const [otherChecked, setOtherChecked] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const handleCheckboxChange = (index) => {
    const updatedCheckedItems = [...checkedItems];

    // Count the number of checked checkboxes
    const checkedCount = updatedCheckedItems.filter(item => item).length;

    // Allow checking/unchecking if the limit hasn't been reached or if unchecking
    if (checkedCount < 2 || updatedCheckedItems[index]) {
      updatedCheckedItems[index] = !updatedCheckedItems[index];
      setCheckedItems(updatedCheckedItems);
    } else {
      alert("You can only select a maximum of two options.");
    }
  };

  const handleOtherCheckboxChange = () => {
    setOtherChecked(!otherChecked);
  };

  const handleOtherTextChange = (event) => {
    setOtherText(event.target.value);
  };

  const handleSubmit = () => {
    setShowConfetti(true);
    setShowMessage(true);

    const selections = {
      checkedItems,
      otherChecked,
      otherText,
    };
    console.log("Form submission:", selections);
  };

  return (
    <div className="Poem">
      <h1>Questions on the Memory</h1>
      <h4>An Interactive Poem</h4>
      <h2>What Is It To Miss?</h2>

      <div>
        {poemLines.map((line, index) => (
          <div key={index} style={{ marginBottom: "10px" }}>
            <label style={{ display: "inline-flex", alignItems: "center" }}>
              <input
                type="checkbox"
                checked={checkedItems[index]}
                onChange={() => handleCheckboxChange(index)}
              />
              {line}
            </label>
          </div>
        ))}

        <div className="custom-checkbox" style={{ marginBottom: "10px" }}>
          <label style={{ display: "inline-flex", alignItems: "center" }}>
            <input
              type="checkbox"
              checked={otherChecked}
              onChange={handleOtherCheckboxChange}
            />
            Other:
          </label>
          {otherChecked && (
            <textarea
              value={otherText}
              onChange={handleOtherTextChange}
              placeholder="Specify other..."
              style={{ marginLeft: "10px" }}
              rows="3"
            />
          )}
        </div>

        <button onClick={handleSubmit} style={{ marginTop: "20px" }}>
          Submit
        </button>
      </div>

      {showConfetti && <Confetti />}
      {showMessage && (
        <div style={{ marginTop: "20px", fontStyle: "italic" }}>
          To miss is to find all the pieces that belong together but are too far apart to enjoin.
        </div>
      )}
    </div>
  );
}