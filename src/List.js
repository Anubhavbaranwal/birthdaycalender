import React from "react";

export const List = (dta) => {
  //   console.log(dta);
  const { data } = dta;
  console.log(data);
  return (
    <>
      {data.map((data2) => {
        const { id, name, age, image } = data2;
        console.log(data2);
        return (
          <div className="list" key={id}>
            <img src={image} class="img" />
            <div className="right">
              <h1>{name}</h1>
              <h3>{age}</h3>
            </div>
          </div>
        );
      })}
    </>
  );
};
