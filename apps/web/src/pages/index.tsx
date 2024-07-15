import { useTranslation } from 'react-i18next';
import { Text, View } from 'react-native';

export default function Home() {
  const { t } = useTranslation();

  return (
    <View className="bg-blue-100 p-6 shadow-xl">
      <Text className="text-blue-950 text-2xl">Welcome to next.js</Text>
      <Text className="text-blue-950 text-2xl">{t('register.title')}</Text>
    </View>
  );
}
