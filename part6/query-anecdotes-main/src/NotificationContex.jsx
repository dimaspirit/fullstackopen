import { createContext, useReducer, useContext } from 'react';

const notificationReducer = (state, action) => {
  switch (action.type) {
    case 'SHOW_NOTIFICATION':
      return { ...state, message: action.payload, visible: true };
    case 'HIDE_NOTIFICATION':
      return { ...state, message: '', visible: false };
    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
};

const NotificationContext = createContext();

export const NotificationContextProvider = (props) => {
  const [state, dispatch] = useReducer(notificationReducer, {
    message: '',
    visible: false,
  });

  return (
    <NotificationContext.Provider value={[ state, dispatch ]}>
      {props.children}
    </NotificationContext.Provider>
  );
};

export default NotificationContext;