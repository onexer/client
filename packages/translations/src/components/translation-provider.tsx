import { I18nextProvider } from 'react-i18next';
import { View } from 'react-native';
import i18n from './i18n';

export function TranslationProvider({ children }: any) {
  return (
    <I18nextProvider i18n={i18n} defaultNS={'translation'}>
        {children}
    </I18nextProvider>
  );
}
