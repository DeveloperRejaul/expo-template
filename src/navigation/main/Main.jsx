import setting from '../../../setting.json';
import TabScreen from '../tab/Tab';
import DrawerScreen from '../drawer/Drawer';
import StackScreen from '../stack/stack';

export default function Main(Stack) {
  if (setting.drawer && setting.tabBar) return <DrawerScreen />;
  if (!setting.drawer && setting.tabBar) return <TabScreen />;
  if (!setting.drawer && !setting.tabBar) return <>{StackScreen(Stack)}</>;
}
