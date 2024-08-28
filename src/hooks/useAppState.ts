import {useContext} from 'react';
import {AppStateContext, AppStateContextValue} from '../state/AppState';

export const useAppState = (): AppStateContextValue => {
  const context = useContext(AppStateContext);

  if (!context) {
    throw new Error('useAppState must be used within an AppStateProvider');
  }

  return context;
};
