import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface SettingState {
  darkMode: boolean;
  setDarkMode: (prev: boolean) => void;
}

const useSettingStore = create<SettingState>()(
  devtools(
    persist(
      (set) => ({
        darkMode: false,
        setDarkMode: (prev: boolean) => {
          set({ darkMode: !prev });
        },
      }),
      { name: "settingStore" },
    ),
  ),
);

export default useSettingStore;
