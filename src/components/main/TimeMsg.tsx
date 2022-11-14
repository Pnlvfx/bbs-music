import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { useMessage} from './TimeMsgProvider'

const TimeMsg = () => {
    const { message, setMessage } = useMessage();

    useEffect(() => {
        if (!message.value) return;
        const ms = message.time ? message.time : 8000;
        setTimeout(() => {
            setMessage({value: ''})
        }, ms);
    }, [message])

    if (!message.value) return null;

  return (
    <View className='absolute bg-[#073abb] right-0 bottom-[96px] top-auto left-0 z-[100]'>
        <View className={`w-5 bg-bbaby-blue`} />
        <View className='p-3 pl-4 flex-row'>
            <Text className='text-bbaby-text ml-2'>{message.value}</Text>
        </View>
    </View>
  )
}

export default TimeMsg;