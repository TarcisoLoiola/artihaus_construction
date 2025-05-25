import React from "react";
import classNames from "classnames";

const ImageHandler = ({ src, alt, role = "default", customClass = "" }) => {
  const imageClass = classNames("image-role", `image-${role}`, customClass);
  return (
    <img src={src} alt={alt} className={imageClass} />
  )
};
export default ImageHandler;
