import { View, Text, TouchableOpacity } from 'react-native';
import React, { Dispatch, SetStateAction } from 'react';
import { DropdownIcon, MoreIcon } from '../../config/SVG';
import { Track } from 'react-native-track-player';

type PlayerHeader = {
    setShow: Dispatch<SetStateAction<boolean>>
    track: Track
}

const PlayerHeader = ({setShow, track}: PlayerHeader) => {
  return (
    <View className='flex-row p-2 items-center justify-between mt-[52px]'>
        <TouchableOpacity onPress={() => {
            setShow(false);
        }}>
            <View className='p-2'>
                <DropdownIcon fill={'white'} />
            </View>
        </TouchableOpacity>
        <View className='p-2'>
            <Text className='text-bbaby-text font-bold'>{track.artist}</Text>
        </View>
        <TouchableOpacity>
            <View className='p-2'>
                <MoreIcon
                    height={24}
                    width={24}
                    fill={'white'}
                />
            </View>
        </TouchableOpacity>
    </View>
    )
}

export default PlayerHeader;
