import React from "react";
import "./ImageDesign.css";
import { useState } from "react";
import ImageOptions from "./ImageOptions";
import bgimg from "./bgimg.png";

function ImageDesign() {
  const [clicked, setClicked] = useState(false);
  const [image, setImage] = useState("");
  const [source, setSource] = useState("");
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [downloadURL, setDownloadURL] = useState("");

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
      document.getElementsByTagName("label")[0].innerText = `${
        e.target.files[0].name
      } ${(e.target.files[0].size / 1000).toFixed(2)}KB`;
    }
  };

  const handleUpload = () => {
    if (image) {
      setSource(URL.createObjectURL(image));
      setInput(URL.createObjectURL(image));
      setClicked(true);
    }
  };

  const outputChange = (outputValue) => {
    setDownloadURL(outputValue);
    setOutput(outputValue);
  };

  return (
    <div className="imageDesign">
      {clicked ? (
        <div className="imageDesign__image">
          <div className="imageDesign__input">
            <p>original</p>
            <img src={input} alt="input" />
          </div>
          {output && (
            <div className="imageDesign__output">
              <p>editted</p>
              <img src={output} alt="output" />
            </div>
          )}
        </div>
      ) : (
        <div className="imageDesign__upload">
          <div className="imageDesign__inputFile">
            <input
              type="file"
              id="imageDesign__fileUpload"
              accept="image/*"
              onChange={handleChange}
            />
            <label for="imageDesign__fileUpload">Select image</label>
          </div>
          <button onClick={handleUpload}>Upload</button>
        </div>
      )}
      <div className="imageDesign__options">
        <ImageOptions
          source={source}
          onOutputChange={outputChange}
          downloadURL={downloadURL}
        />
      </div>
    </div>
  );
}

export default ImageDesign;
