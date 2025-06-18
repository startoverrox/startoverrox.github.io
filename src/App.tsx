import Route from "./Router.tsx";
import useSettingStore from "@/store/settingStore.ts";
import { cn } from "./utils/cn.ts";

function App() {
  const darkMode = useSettingStore((state) => state.darkMode);

  return (
    <div className={cn(darkMode && "dark")}>
      <Route />
    </div>
  );
}

export default App;
