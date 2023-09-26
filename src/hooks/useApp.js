import { io } from 'socket.io-client';
import { SOCKET_URL } from '../constant/constant';
import setting from '../../setting.json';

const socket = setting.socket && io(SOCKET_URL);
export const useApp = () => ({ socket: setting.socket && socket });
