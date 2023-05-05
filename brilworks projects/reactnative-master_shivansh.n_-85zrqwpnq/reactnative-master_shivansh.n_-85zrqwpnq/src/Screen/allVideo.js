import React from 'react';
import Video from 'react-native-video';

function AllVideo(props) {
  return (
    <Video
      style={{width: 395, height: 500}}
      source={require('../Assets/Video/blueBirdNaruto.mp4')}
      resizeMode="contain"
      controls={true}
    />
  );
}

export default AllVideo;
