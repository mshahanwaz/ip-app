import React from "react";
import Image from "image-js";

function ImageOptions(props) {
  const handleChange = async () => {
    var image = await Image.load(props.source);
    var grey = image.grey();
    props.onOutputChange(grey.toDataURL());
  };

  return (
    <div className="imageOptions">
      <button onClick={handleChange}>Grey</button>
    </div>
  );
}

export default ImageOptions;
