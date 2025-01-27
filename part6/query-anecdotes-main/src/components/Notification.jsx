import { useContext, useEffect } from "react";
import NotificationContext from "../NotificationContex"

const Notification = () => {
  const [ state, dispatch ] = useContext(NotificationContext);

  useEffect(() => {
    if (state.visible) {
      const timeout = setTimeout(() => {
        dispatch({ type: 'HIDE_NOTIFICATION' });
      }, 5000);

      return () => clearTimeout(timeout);
    }
  }, [state.visible, dispatch]);

  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
    marginBottom: 5
  }
  
  if (!state.visible) return null;

  return (
    <div style={style}>
      <p>{state.message}</p>
    </div>
  )
}

export default Notification
