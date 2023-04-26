import React from "react";

import FeedbackCounter from './feedbackCounter/FeedbackCounter'

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
<FeedbackCounter 
 />
    </div>
  );
};
