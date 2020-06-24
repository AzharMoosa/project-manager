import React from "react";

const Image = ({ url }) => {
  return (
    <div className='box'>
      <img src={url} alt='image' />
    </div>
  );
};

export default Image;
