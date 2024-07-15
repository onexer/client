import { create } from 'zustand';
import { createJSONStorage, devtools, persist } from 'zustand/middleware';
import { mmkvStorage } from './mmkvStorage';

export type mode = 'dark' | 'light';

interface ThemeInterface {
  scheme: mode;
  setSchema: (mode: mode) => void;
  getSchemaColor: () => string;
}

const getDefaultState = {
  scheme: 'light' as mode,
};

const createThemeStore = create<ThemeInterface>()(
  devtools(
    persist(
      (set, get) => ({
        ...getDefaultState,
        setSchema: (mode: mode) => {
          set({ scheme: mode });
        },
        getSchemaColor: () => {
          return get().scheme === 'dark' ? 'dark' : 'light';
        },
      }),
      {
        name: 'scheme',
        storage: createJSONStorage(() => mmkvStorage),
      }
    ),
    { enabled: false }
  )
);

export const useThemeStore = () => {
  return createThemeStore((store) => ({
    scheme: store.scheme,
    setSchema: store.setSchema,
    getSchemaColor: store.getSchemaColor,
  }));
};
