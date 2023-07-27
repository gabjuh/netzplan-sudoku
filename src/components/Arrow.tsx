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
  // posX,
  // posY,
  // // arrowTo,
  // arrowToPosX,
  // arrowToPosY,
  size,
  posStep
}) => {

  
  // Draw an arrow, that ends with the arrow in the right direction
  // The arrow is drawn from the startCoords to the endCoords
  // The breakPoints are the points where the arrow changes direction
  // The red parameter is used to draw the arrow in red
  const drawArrowRight = (startCoords: number[], endCoords: number[], breakPoints: string, red = false) => {
    return (
      <>
        <path d={`
          M ${startCoords[0]} ${startCoords[1]} 
          ${breakPoints}
          L ${endCoords[0]} ${endCoords[1]} 
          L ${endCoords[0]} ${endCoords[1] - 1.1} 
          L ${endCoords[0] + 1.2} ${endCoords[1]} 
          L ${endCoords[0]} ${endCoords[1] + 1.1}
          L ${endCoords[0]} ${endCoords[1]}
        `}
          stroke={`${red ? '#f00' : '#ff0'}`} stroke-width="0.3" fill="none" />
      </>
    )
  }

  const drawArrowDown = (startCoords: number[], endCoords: number[], red = false) => {
    return (
      <>
        <path d={`
          M ${startCoords[0]} ${startCoords[1]} 
          L ${endCoords[0]} ${endCoords[1]} 
          L ${endCoords[0] + 1.1} ${endCoords[1]} 
          L ${endCoords[0]} ${endCoords[1] + 1.1} 
          L ${endCoords[0] - 1.1} ${endCoords[1]} 
          L ${endCoords[0]} ${endCoords[1]} 
          
        `}
          stroke={`${red ? '#f00' : '#ff0'}`} stroke-width="0.3" fill="none" />
      </>
    )
  }

  const drawArrowUp = (startCoords: number[], endCoords: number[],  red = false) => {
    return (
      <>
        <path d={`
          M ${startCoords[0]} ${startCoords[1]} 
          L ${endCoords[0]} ${endCoords[1]} 
          L ${endCoords[0] + 1.1} ${endCoords[1]} 
          L ${endCoords[0]} ${endCoords[1] - 1.1} 
          L ${endCoords[0] - 1.1} ${endCoords[1]} 
          L ${endCoords[0]} ${endCoords[1]}          
        `}
          stroke={`${red ? '#f00' : '#ff0'}`} stroke-width="0.3" fill="none" />
      </>
    )
  }
  
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 100 100`} 
      className="absolute top-0 mx-auto"
      style={{
        left: `0px`,
        height: `${(4 * size) + (2 * posStep) + 50}px`,
        width: `${(3 * size) * 5 + 2 * posStep}px`,
      }}
    >
      {/* A - B */}
      {drawArrowRight([-9, 14.6], [3, 14.6], '', true )}
      {/* B - I */}
      {drawArrowRight([-9, 49.3], [38, 49.3], '' )}
      {/* C - E */}
      {drawArrowRight([-9, 84], [3, 84], '' )}
      {/* D - G */}
      {drawArrowRight([26, 11.5], [38, 11.5], '', true )}
      {/* D - H */}
      {drawArrowRight([15, 28], [73, 81], 'L 15 68 L 67 68 L 67 81' )}
      {/* E - F */}
      {drawArrowRight([26, 87], [38, 87], '' )}
      {/* E - G */}
      {drawArrowRight([26, 80.7], [38, 17.5], 'L 32.5 80.7 L 32.5 17.5' )}
      {/* F - H */}
      {drawArrowRight([60.5, 87], [73, 87], '' )}
      {/* G - I */}
      {drawArrowDown([49.9, 28], [49.9, 34], true )}
      {/* H - J */}
      {drawArrowRight([95.2, 84], [107.5, 84], '' )}
      {/* I - K */}
      {drawArrowRight([60.5, 49.3], [108, 49.3], '', true )}
      {/* J - K */}
      {drawArrowUp([119.6, 70], [119.6, 64] )}
    </svg>
  )
}

export default Arrow