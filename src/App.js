import React from 'react'
import addNotification from 'react-push-notification';
const App = () => {
    const buttonClick = () => {
        addNotification({
            title: 'Hello Ji',
            subtitle: 'This is a subtitle',
            message: 'This is a very long message',
            theme: 'darkblue',
            native: true // when using native, your OS will handle theming.
        });
    };
  return (
    <div> <button onClick={buttonClick} className="button">
    Hello 
   </button></div>
  )
}

export default Push