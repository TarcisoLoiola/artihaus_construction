import React from "react";
import ImageRoleHandler from '../components/ImageRoleHandler'
import image from '../Assets/gallery41.jpeg'

const Component = () => {
  return (
    <ImageRoleHandler src={image} alt='test image component' role='carousel' />
  )
};
export default Component;
