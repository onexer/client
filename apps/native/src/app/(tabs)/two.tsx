import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from 'react-native';

export default function TabTwoScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-xl font-semibold text-gray-800">Tab Two</Text>
      <View className="h-8" />
      <EditScreenInfo path="app/(tabs)/two.tsx" />
    </View>
  );
}
