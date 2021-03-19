import Image from "image-js";
import "./ImageOptions.css";

function ImageOptions(props) {
  async function doGrey() {
    var image = await Image.load(
      props.downloadURL ? props.downloadURL : props.source
    );
    var newImage = image.grey();
    props.onOutputChange(newImage.toDataURL());
  }

  async function doRotate() {
    var image = await Image.load(
      props.downloadURL ? props.downloadURL : props.source
    );
    var angle = parseInt(window.prompt("Input angle(deg):", "0"));
    if (angle) {
      var newImage = image.rotate(angle);
      props.onOutputChange(newImage.toDataURL());
    }
  }

  async function doHFlip() {
    var image = await Image.load(
      props.downloadURL ? props.downloadURL : props.source
    );
    var newImage = image.flipX();
    props.onOutputChange(newImage.toDataURL());
  }

  async function doVFlip() {
    var image = await Image.load(
      props.downloadURL ? props.downloadURL : props.source
    );
    var newImage = image.flipY();
    props.onOutputChange(newImage.toDataURL());
  }

  async function doResize() {
    var image = await Image.load(
      props.downloadURL ? props.downloadURL : props.source
    );
    var width = parseInt(window.prompt("Input width(px): "));
    var height = parseInt(window.prompt("Input height(px): "));
    if (width && height) {
      var newImage = image.resize({ width: width, height: height });
      props.onOutputChange(newImage.toDataURL());
    }
  }

  async function doInvert() {
    var image = await Image.load(
      props.downloadURL ? props.downloadURL : props.source
    );
    var newImage = image.invert();
    props.onOutputChange(newImage.toDataURL());
  }

  async function doLighten() {
    var image = await Image.load(
      props.downloadURL ? props.downloadURL : props.source
    );
    var newImage = image.grey({
      algorithm: "lightness",
    });
    props.onOutputChange(newImage.toDataURL());
  }

  async function doBlur() {
    var image = await Image.load(
      props.downloadURL ? props.downloadURL : props.source
    );
    var radius = parseInt(window.prompt("Input radius:"));
    if (radius) {
      var newImage = image.blurFilter({ radius: radius });
      props.onOutputChange(newImage.toDataURL());
    }
  }

  async function doCrop() {
    var image = await Image.load(
      props.downloadURL ? props.downloadURL : props.source
    );
    var x = parseInt(window.prompt("Input X:"));
    var y = parseInt(window.prompt("Input Y:"));
    var width = parseInt(window.prompt("Input width(px):"));
    var height = parseInt(window.prompt("Input height(px):"));
    if (x && y && width && height) {
      var newImage = image.crop({
        x: x,
        y: y,
        width: width,
        height: height,
      });
      props.onOutputChange(newImage.toDataURL());
    }
  }

  async function doCyan() {
    var image = await Image.load(
      props.downloadURL ? props.downloadURL : props.source
    );
    var newImage = image.grey({
      algorithm: "saturation",
    });
    props.onOutputChange(newImage.toDataURL());
  }

  function refreshPage() {
    window.location.reload(false);
  }

  return (
    <div className="imageOptions">
      <p>Options</p>
      <button onClick={doCrop}>Crop</button>
      <button onClick={doResize}>Resize</button>
      <button onClick={doRotate}>Rotate</button>
      <button onClick={doHFlip}>H-Flip</button>
      <button onClick={doVFlip}>V-Flip</button>
      <button onClick={doLighten}>Grey</button>
      <button onClick={doGrey}>Light Grey</button>
      <button onClick={doCyan}>Cyan</button>
      <button onClick={doInvert}>Invert</button>
      <button onClick={doBlur}>Blur</button>
      <button>
        {props.downloadURL ? (
          <a href={props.downloadURL} download="image69.png">
            Download
          </a>
        ) : (
          "Download"
        )}
      </button>
      <button onClick={refreshPage}>Refresh</button>
    </div>
  );
}

export default ImageOptions;
