const Notification = ({ type, message }) => {
  if (message === null) {
    return null;
  }

  if(type === 'error') {
    return (
      <div className="notification error">
        {message}
      </div>
    );
  }

  return (
    <div className="notification success">
      {message}
    </div>
  );
}

export default Notification;