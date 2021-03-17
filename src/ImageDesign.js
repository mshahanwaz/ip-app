import React from "react";
import Image from "image-js";
import "./ImageDesign.css";
import { useState } from "react";

function ImageDesign() {
  const [clicked, setClicked] = useState(false);

  async function loadingImage() {
    var image = await Image.load(document.getElementsByTagName("img")[0].src);
    var grey = image.grey();
    // console.log(grey);
    setClicked(true);
    document.getElementsByTagName("img")[1].src = grey.toDataURL();
  }

  return (
    <div className="imageDesign">
      <img
        className="imageDesign__input"
        src="https://cdn2.unrealengine.com/15br-mandoltm-social-newsheader-1920x1080-c670ddb2fea1.png"
        alt="input"
        width="500px"
      />
      <button onClick={() => loadingImage()}>Click</button>
      <img
        className={`imageDesign__output ${!clicked && "imageDesign__hide"}`}
        alt="output"
        width="500px"
      />
    </div>
  );
}

export default ImageDesign;
