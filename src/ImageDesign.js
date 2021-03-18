import React from "react";
import "./ImageDesign.css";
import { useState } from "react";
import ImageOptions from "./ImageOptions";

function ImageDesign() {
  const [clicked, setClicked] = useState(false);
  const [image, setImage] = useState("");
  const [source, setSource] = useState("");
  const [output, setOutput] = useState("");

  //

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    setSource(URL.createObjectURL(image));
    setClicked(true);
  };

  const outputChange = (outputValue) => {
    setOutput(outputValue);
  };

  return (
    <div className="imageDesign">
      {clicked ? (
        <div className="imageDesign__image">
          <img id="imageDesign__input" src={source} alt="input" width="500px" />
          {output && (
            <img
              id={`imageDesign__output`}
              src={output}
              alt="output"
              width="500px"
            />
          )}
        </div>
      ) : (
        <div className="imageDesign__image">
          <input type="file" accept="image/*" onChange={handleChange} />
          <button onClick={handleUpload}>Upload</button>
        </div>
      )}
      <div className="imageDesign__options">
        <ImageOptions source={source} onOutputChange={outputChange} />
      </div>
    </div>
  );
}

export default ImageDesign;
