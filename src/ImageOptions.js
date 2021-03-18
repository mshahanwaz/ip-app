import React from "react";
import Image from "image-js";

function ImageOptions(props) {
  
  const handleChange = async () => {
    var property = "grey";
    switch(property) {
      case "grey":
        var image = await Image.load(props.source);
        var grey = image.grey();
        props.onOutputChange(grey.toDataURL());
        break;
        case "rotate":
        var image = await Image.load(props.source);
        var grey = image.rotate(60);
        props.onOutputChange(grey.toDataURL());
        break;
      default:
    }
   
  };

  return (
    <div className="imageOptions">
      <button onClick={handleChange}>Grey</button>
      {/* <button onClick={handleChange_grey}>Rotate</button> */}
    </div>
  );
}

export default ImageOptions;
