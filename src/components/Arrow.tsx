import React from 'react'

interface Arrow {
  posX: number;
  posY: number;
  // arrowTo: string[] | undefined;
  arrowToPosX: number[] | undefined;
  arrowToPosY: number[] | undefined;
  size: number;
  posStep: number;
}

const Arrow: React.FC<Arrow> = ({
  posX,
  posY,
  arrowTo,
  arrowToPosX,
  arrowToPosY,
  size,
  posStep
}) => {

  const drawOneArrowUp = () => {
    return (
      <>
        <defs>
          <marker id="arrowhead" markerWidth="10" markerHeight="7" 
          refX="0" refY="3.5" orient="auto">
            <polygon points="0 1, 3 3.5, 0 6" fill="#ddd" />
          </marker>
        </defs>
        <line x1="250" y1="20" x2="200" y2="50" stroke="#ddd" 
        stroke-width="6" marker-end="url(#arrowhead)" />
      </>
    )
  }
  
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 100 100`} className="border border-red-500 absolute left-0 top-0">
      {drawOneArrowUp()}
      <defs>
        <marker id="arrowhead" markerWidth="10" markerHeight="7" 
        refX="0" refY="3.5" orient="auto">
          <polygon points="0 1, 3 3.5, 0 6" fill="#fff" />
        </marker>
      </defs>
      <line x1="100" y1="20" x2="100" y2="50" stroke="#fff" 
      stroke-width="6" marker-end="url(#arrowhead)" />
    </svg>
  )
}

export default Arrow