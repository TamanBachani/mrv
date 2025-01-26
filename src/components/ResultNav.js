import React from 'react'
import { Link } from 'react-router-dom';

const ResultNav = ({print}) => {
  return (
    <div className="result-nav">
      <div className="back result-nav-link">
        <Link to='/'>
          <i className="fas fa-reply"></i>TAKE ME HOME
        </Link>
      </div>
      <div className="print result-nav-link" onClick={print}>
        PRINT THIS<i className="fas fa-share"></i>
      </div>
    </div>
  );
}

export default ResultNav