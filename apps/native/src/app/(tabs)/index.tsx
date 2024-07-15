import EditScreenInfo from '@/components/EditScreenInfo';
import { useTranslation } from 'react-i18next';
import { Text, View } from 'react-native';

export default function TabOneScreen() {
  const { t } = useTranslation();
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-xl font-semibold text-gray-800">Tab One</Text>
      <Text className="text-xl font-semibold text-gray-800">{t('register.title')}</Text>
      <View className="h-8" />
      <EditScreenInfo path="app/(tabs)/index.tsx" />
    </View>
  );
}
