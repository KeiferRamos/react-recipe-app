import React, { useEffect } from "react";
import { useState } from "react";
import { connect } from "react-redux";
import "../styles/slider.css";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

function Slider({ useCases, screenWidth }) {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState(null);

  const selectAccordion = (i) => {
    if (i == selected) {
      setSelected(null);
    } else {
      setSelected(i);
    }
  };

  useEffect(() => {
    if (screenWidth > 500) {
      setSelected(null);
    }
  }, [screenWidth]);

  if (screenWidth > 500) {
    return (
      <div className="use-cases">
        <h3>Use Cases</h3>
        <div className="use-case">
          {useCases.map(({ link: { logo, name } }, i) => {
            return (
              <div
                style={{
                  background: `${index == i ? "#304b51" : "#628086"}`,
                }}
                onClick={() => setIndex(i)}
                key={i}
              >
                <img src={logo} alt="item logo" />
                <p>{name}</p>
              </div>
            );
          })}
        </div>
        <div className="information">
          <img src={useCases[index].img} alt="" />
          <div>
            {useCases[index].details.map(({ title, detail }, i) => {
              return (
                <div key={i} className="detail">
                  <h3>{title}</h3>
                  <p>{detail}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="accordion-container">
      {useCases.map(({ link: { logo, name }, img, details }, i) => {
        return (
          <div className="accordion" key={i}>
            <div className="title">
              <img src={logo} alt="title logo" />
              <h3>{name}</h3>
              <div className="arrow" onClick={() => selectAccordion(i)}>
                {i == selected ? <FiChevronUp /> : <FiChevronDown />}
              </div>
            </div>
            {i == selected && (
              <div className="accordion-details">
                <img src={img} alt="use-case-img" />
                {details.map(({ title, detail }, i) => {
                  return (
                    <div key={i}>
                      <h3>{title}</h3>
                      <p>{detail}</p>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default connect((state) => state)(Slider);
