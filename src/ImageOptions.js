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
        case "flipX":
        var image = await Image.load(props.source);
        var grey = image.flipX();
        props.onOutputChange(grey.toDataURL());
        break;
        case "flipY":
          var image = await Image.load(props.source);
          var grey = image.flipY();
          props.onOutputChange(grey.toDataURL());
          break;
          case "resize":
            var image = await Image.load(props.source);
            var grey = image.resize({width:200,
              height:200});
            props.onOutputChange(grey.toDataURL());
            break;
            case "invert":
            var image = await Image.load(props.source);
            var grey = image.invert();
            props.onOutputChange(grey.toDataURL());
            break;
            case "bandw":
              var image = await Image.load(props.source);
              var grey = image.grey({
                algorithm:'lightness'
              });
              props.onOutputChange(grey.toDataURL());
              break;
              case "blur":
                var image = await Image.load(props.source);
                var grey = image.blurFilter({radius:5});
                props.onOutputChange(grey.toDataURL());
                break;
                case "crop":
                  var image = await Image.load(props.source);
                  var grey = image.crop({x:20,
                    y:10,
                    width:600,
                    height:220});
                  props.onOutputChange(grey.toDataURL());
                  break;
        
      default:
    }
   
  };

  const newLocal = 0;
  return (
    <div className="imageOptions">
      <button onClick={handleChange}>Grey</button>
      
    </div>
  );
}

export default ImageOptions;
