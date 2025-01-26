import React from 'react'


const Source = ({link}) => {
  return (
    <div>
      [{" "}
      <span className="source">
        <a href={link} target="_blank" rel='noreferrer'>
          SOURCE
        </a>
      </span>
      ]
    </div>
  );
}

export default Source