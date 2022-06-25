import { useContext } from 'react';
import { StateContext } from '../contexts/StateManager';

export default function useStateManager() {
  return useContext(StateContext);
}
