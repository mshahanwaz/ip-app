import './App.css';
import Image from "image-js";
import { useEffect } from 'react';

function App() {
  var value;
  // execute().catch(console.error);
  
  async function execute() {
    let image = await Image.load('1.jpg');
    // let grey = image
    //   .grey() // convert the image to greyscale.
    //   .resize({ width: 200 }) // resize the image, forcing a width of 200 pixels. The height is computed automatically to preserve the aspect ratio.
    //   .rotate(30); // rotate the image clockwise by 30 degrees.
    value = image.grey().toDataURL();
    console.log(value);
  }

  return (
    <div className="app">
      <img src="./1.jpg" />
      <button onClick={execute()}>Click</button>
      <img src={value} />
    </div>
  );
}

export default App;
