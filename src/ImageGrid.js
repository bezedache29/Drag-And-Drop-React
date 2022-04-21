import React from 'react'
import Image from './Image';

const ImageGrid = ({ images }) => {

  const renderImage = (image, index) => {
    return <Image image={image} key={`${image.id}-image`} />;
  };
  
  return (
    <section className="file-list">{images.map(renderImage)}</section>
  )
}

export default ImageGrid