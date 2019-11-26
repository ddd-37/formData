import React from "react";

const ImageList = props => {
  console.log(props);
  const images = props.images.map(({ description, id, urls }) => {
    return <img src={urls.regular} alt={description} key={id} />;
  });
  return <div>{images}</div>;
};

export default ImageList;
