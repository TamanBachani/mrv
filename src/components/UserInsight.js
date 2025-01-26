import React from 'react'
import Source from './Source'

const UserInsight = ({data}) => {
  return (
          <div className="range-fact inside-insight">
        <div className="space-div">
          <h3 className="sans-text range-text">
            {data.beforeHigh}
            <span className={`${data.color} range-value`}>
              {data.high}
            </span>{" "}
            {data.afterHigh}
        </h3>
        </div>
        <div className="space-div">
          <div className="fact">{data.shine}</div>
        </div>
        <div className="space-div">
          <h3 className="sans-text range-text">
            {data.fact}
          </h3>
      </div>
      <Source link={data.source}/>
      </div>
  )
}

export default UserInsight