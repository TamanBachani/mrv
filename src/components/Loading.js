import React from 'react'

const Loading = ({loadingText}) => {
  return (
    <div className="loading">
      <div className="loadingio-spinner-ripple-oh4hlwv992d">
        <div className="ldio-8ktl3hhezfi">
          <div></div>
          <div></div>
        </div>
      </div>
      <p className='sans-text extraction-loading'>{loadingText}</p>
    </div>
  );
}

export default Loading