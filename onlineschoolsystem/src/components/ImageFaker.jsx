import React from 'react';
import Avatar from 'react-avatar';

function ImageFaker() {
  const avatarUrl = <Avatar size="100" round={true} />;
  // console.log(avatarUrl);
  
  return (
    <div style={{display:"flex", flexDirection:"row",justifyContent:"center" }}>
      {avatarUrl}
    </div>
  );
}

export default ImageFaker;
