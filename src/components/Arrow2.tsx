import React from 'react'
import { IArrowTo } from './Step'

interface IArrow2 {
  id: string;
  arrowTo?: IArrowTo[]
}

const Arrow2: React.FC<IArrow2> = ({
  id,
  arrowTo
}) => {

  const start = arrowTo && arrowTo[0].pathCoords.start;
  const end = arrowTo && arrowTo[0].pathCoords.end;

  const width = arrowTo && arrowTo[0].pathCoords.end[0] - arrowTo[0].pathCoords.start[0];
  const height = arrowTo && arrowTo[0].pathCoords.end[1] - arrowTo[0].pathCoords.start[1];

  return (
    <div className="absolute" id={id}>
      <div className="relative">
        <div 
          className="absolute"
          style={{
            left: `${start && start[0]}px`,
            top: `${start && start[1]}px`
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg" 
            viewBox={`${start && start[0]} ${start && start[1]} ${end && end[0]} ${end && end[1]}`} 
            className="border border-red-600"
            style={{
              width: `${width}px`,
              height: `${height}px}`,
            }}
          >
            <path
              d={`M 50 50 l 25 25`}
              stroke="#0ff" strokeWidth="3" fill="none"
            />
          </svg>

        </div>
      </div>
    </div>
  )
}

export default Arrow2