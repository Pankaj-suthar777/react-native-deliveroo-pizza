import React, {useLayoutEffect, useState} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {
  ChevronDownIcon,
  UserIcon,
  MagnifyingGlassIcon,
  AdjustmentsHorizontalIcon,
} from 'react-native-heroicons/outline';
import Categories from '../components/Categories';

const Home = () => {
  const navigation = useNavigation();
  const [seacrh, setSearch] = useState('');

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView className="bg-white pt-5">
      {/*Header*/}
      <View className="flex-row pb-3 items-center mx-4 space-x-2">
        <Image
          source={{uri: 'https://links.papareact.com/wru'}}
          className="h-7 w-7 bg-gray-300 p-4 rounded-full"
        />
        <View className="flex-1">
          <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
          <Text className="font-bold text-xl">
            Current Location <ChevronDownIcon size={20} color="#00CCBB" />
          </Text>
        </View>
        <UserIcon size={35} color="#00CCBB" />
      </View>

      {/* Search */}
      <View className="flex-row pb-2 mx-4 space-x-2 items-center">
        <View className="flex-row space-x-2 items-center bg-gray-200 px-4  flex-1">
          <MagnifyingGlassIcon color="gray" size={20} />
          <TextInput placeholder="Restaurant and cuisines" />
        </View>
        <AdjustmentsHorizontalIcon color="gray" size={30} />
      </View>
      {/*body*/}
      <ScrollView className="bg-gray-100">
        {/*categories */}
        <Categories />
        {/*featured rows */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
