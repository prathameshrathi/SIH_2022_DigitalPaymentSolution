import React, { useState } from "react";
import "./cards.css";
const Cards = () => {
  const cardItems = [
    "Aadhar Enrollment",
    ,
    "Mandatory Boimetric Update(MBU)",
    "Biometric Update",
    "Demographic Update",
    "E-Aadhar Download",
  ];

  const [items, setItems] = useState({
    ...cardItems.map((item) => {
      return { item, selected: false };
    }),
  });

  function handleClick(e) {
    if ("card-false" == e.currentTarget.className) {
      const idx = e.currentTarget.getAttribute("data-idx");
      const item = e.currentTarget.getAttribute("data-item");
      setItems({ ...items, [idx]: { item: item, selected: true } });
    } else {
      const idx = e.currentTarget.getAttribute("data-idx");
      const item = e.currentTarget.getAttribute("data-item");
      setItems({ ...items, [idx]: { item: item, selected: false } });
    }
  }
  function handleSubmit() {
    console.log(items);
  }
  return (
    <div className="Main-container">
      <div className="card-container">
        {Object.keys(items).map((item, idx) => {
          const classnamex = "card-" + items[item].selected;
          return (
            <div
              className="carditems"
              id={classnamex}
              onClick={handleClick}
              data-item={items[item].item}
              data-idx={idx}
            >
              <h1>{items[item].item}</h1>
              <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <button onClick={handleSubmit}> More</button>
            </div>
          );
        })}
      </div>
      <button onClick={handleSubmit}> Submit</button>;
    </div>
  );
};

function Card(props) {
  const classnamex = "card" + props.props.selected;
  return <div className={classnamex}>{props.props.item}</div>;
}
export default Cards;
