import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';

const CategoryCard = ({imgUrl, title}) => {
  return (
    <TouchableOpacity className="mr-2 relative">
      <Image source={{uri: imgUrl}} className="h-20 w-20 rounded" />
      <Text className="absolute bottom-1 left-1 text-white">{title}</Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;
