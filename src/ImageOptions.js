import React from "react";
import Image from "image-js";

function ImageOptions(props) {
  
  const handleChange = async () => {
    var property = "cyan";
    var grey;
    var image;
    switch(property) {
      case "grey":
        image = await Image.load(props.source);
        grey = image.grey();
        props.onOutputChange(grey.toDataURL());
        break;
        case "rotate":
        image = await Image.load(props.source);
        grey = image.rotate(60);
        props.onOutputChange(grey.toDataURL());
        break;
        case "flipX":
        image = await Image.load(props.source);
        grey = image.flipX();
        props.onOutputChange(grey.toDataURL());
        break;
        case "flipY":
        image = await Image.load(props.source);
        grey = image.flipY();
          props.onOutputChange(grey.toDataURL());
          break;
          case "resize":
          image = await Image.load(props.source);
          grey = image.resize({width:200,
              height:200});
            props.onOutputChange(grey.toDataURL());
            break;
            case "invert":
            image = await Image.load(props.source);
            grey = image.invert();
            props.onOutputChange(grey.toDataURL());
            break;
            case "bandw":
            image = await Image.load(props.source);
            grey = image.grey({
                algorithm:'lightness'
              });
              props.onOutputChange(grey.toDataURL());
              break;
              case "blur":
              image = await Image.load(props.source);
              grey = image.blurFilter({radius:5});
                props.onOutputChange(grey.toDataURL());
                break;
                case "crop":
                image = await Image.load(props.source);
                grey = image.crop({x:20,
                    y:10,
                    width:600,
                    height:220});
                  props.onOutputChange(grey.toDataURL());
                  break;
                  case "cyan":
                  image = await Image.load(props.source);
                  grey = image.grey({
                      algorithm:'cyan'
                    });
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
