import React from 'react';

const backdrop = props => (
  <>
    <div className="backdrop" onClick={props.click} />
    <style 
      jsx="true"
      global="true" 
      suppressHydrationWarning>{`
      .backdrop {
        position: fixed;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background: rgba(0, 0, 0, 0.3);
        z-index: 100;
      }
    `}</style>
  </>
);

export default backdrop;
