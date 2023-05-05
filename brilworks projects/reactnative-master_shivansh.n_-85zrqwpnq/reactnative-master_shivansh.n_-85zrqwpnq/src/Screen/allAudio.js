import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Sound from 'react-native-sound';
import MyAudio from '../Assets/Audio/blueBirdNaruto.mp3';

Sound.setCategory('Playback');

let audio = new Sound(MyAudio, error => {
  if (error) {
    console.log('failed to load the sound', error);
    return;
  }
  console.log(
    'duration in seconds: ' +
      audio.getDuration() +
      'number of channels: ' +
      audio.getNumberOfChannels(),
  );
});
const AllAudio = () => {
  const [playAudio, setPlayAudio] = useState(null);

  const PlayPauseAudio = () => {
    if (audio.isPlaying()) {
      audio.pause();
      setPlayAudio(false);
    } else {
      setPlayAudio(true);
      audio.play(success => {
        if (success) {
          setPlayAudio(false);
          console.log('successfully finished playing');
        } else {
          setPlayAudio(false);
          console.log('playback failed due to audio decoding errors');
        }
      });
    }
  };

  return (
    <View style={{flex: 1}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignContent: 'center',
          marginTop: 100,
        }}>
        <Text style={{margin: 10, fontSize: 20}}>Naruto Blue Bird</Text>
        <TouchableOpacity onPress={PlayPauseAudio}>
          <Text style={{margin: 10, fontSize: 20, color: 'blue'}}>
            Play/Pause
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AllAudio;
