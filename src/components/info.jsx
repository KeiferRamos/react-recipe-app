import React from "react";

function MoreInfo({ name, img, count, infos }) {
  return (
    <div>
      <img src={img} alt="product image" />
      <h3>{name}</h3>
      <p>{count}</p>
      {infos.map((info, i) => {
        return <p key={i}>{info}</p>;
      })}
    </div>
  );
}

export default MoreInfo;
