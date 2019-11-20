import React from 'react';

const Images = props=>{
  const {imaegBorder} = styles;
  return props.images.map(image=>{
    return  <img style={imaegBorder} key={image.id} alt={image.description} src={image.urls.regular} width="300px" height="300px" />;
  });
}
const styles={
  imaegBorder:{
    borderRadius:'65%'
  }
}
export {Images}