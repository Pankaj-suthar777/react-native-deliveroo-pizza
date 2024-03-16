import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import {ArrowRightIcon} from 'react-native-heroicons/outline';
import RestaurantCard from './RestaurantCard';

const FeaturedRow = ({title, id, description}) => {
  return (
    <View>
      <View className="mt-5 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon color="#00CCBB" />
      </View>
      <Text className="text-xs text-gray-500 px-4">{description}</Text>
      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        showsHorizontalScrollIndicator={false}
        className="pt-4">
        <RestaurantCard
          id={1}
          imgUrl="https://links.papareact.com/gn7"
          title="Yo! Sushi"
          rating={4.5}
          genre="japanese"
          address="123 main St"
          dishes={[]}
          long={20}
          lat={0}
          short_description="This is a test description"
        />
        <RestaurantCard
          id={1}
          imgUrl="https://links.papareact.com/gn7"
          title="Yo! Sushi"
          rating={4.5}
          genre="japanese"
          address="123 main St"
          dishes={[]}
          long={20}
          lat={0}
          short_description="This is a test description"
        />
        <RestaurantCard
          id={1}
          imgUrl="https://links.papareact.com/gn7"
          title="Yo! Sushi"
          rating={4.5}
          genre="japanese"
          address="123 main St"
          dishes={[]}
          long={20}
          lat={0}
          short_description="This is a test description"
        />
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
