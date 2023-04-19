import { View, Text } from 'react-native'
import React from 'react'

const PriorityCard = ({ level }) => {
    const types = ['Low', 'Medium', 'High'];
    // const color = [];
  return (
    <View className='bg-low/10 rounded-lg py-4 px-2'>
        <View className="w-14 rounded-md justify-center items-center mx-4 bg-low/20">
            <Text className='text-2xl text-low' numberOfLines={1}>{1}</Text>
        </View>
        <Text className='text-center text-low'>{types[level]}</Text>
    </View>
  )
}

export default PriorityCard