import { View, Modal, TouchableWithoutFeedback } from 'react-native';
import React, { Dispatch, SetStateAction, useState } from 'react';
import video from '../../assets/video.mp4';
import Video from 'react-native-video';
import { useAudioContext } from '../components/audio/AudioProvider';
import PlayerHeader from '../components/player/PlayerHeader';
import PlayerControl from '../components/player/PlayerControl';

type ModalProp = {
  show: boolean
  setShow: Dispatch<SetStateAction<boolean>>
}

const SongModal = ({show, setShow}: ModalProp) => {
  const {playing} = useAudioContext();
  const [showControl, setShowControl] = useState(true);

  return (
     <Modal
      animationType='slide'
      presentationStyle='fullScreen'
      visible={show}
    >
        <View className='flex-1'>
          <View className='flex-1 w-full justify-center relative h-full'>
            <View className='absolute bottom-0 top-0 left-0 right-0 bg-black'>
              <Video
                className='w-full h-full'
                source={video}
                repeat
                playWhenInactive={false}
                pictureInPicture={false}
                resizeMode='cover'
                muted
                ignoreSilentSwitch={'ignore'}
                volume={0}
                paused={!playing}
                allowsExternalPlayback={false}
                playInBackground={false}
              />
            </View>
            <View className='flex-1 w-full'>
              <TouchableWithoutFeedback
                onPress={() => {
                  setShowControl(!showControl);
                }}
              >
                <View className='flex-1 w-full h-full'>
                  {showControl && (
                    <View className='flex-1 w-full h-full' style={{backgroundColor: 'rgba(0, 0, 0, 0.4)'}}>
                      <PlayerHeader setShow={setShow} />
                      <PlayerControl />
                    </View>
                  )}
                </View>
              </TouchableWithoutFeedback>
            </View>
          </View>
        </View>
    </Modal>
  )
}

export default SongModal;