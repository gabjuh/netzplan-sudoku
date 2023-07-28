import Arrow from "./Arrow"
import process from "../datas/process"

interface Arrows {
  posX: number;
  posY: number;
  arrowTo: string[] | undefined;
  size: number;
  posStep: number;
  handleArrowClick: (arrowId: string) => void;
}

const Arrows: React.FC<Arrows> = ({
  posX,
  posY,
  arrowTo,
  size,
  posStep,
  handleArrowClick
}) => {
  return (
    <>
      <Arrow 
        posX={posX}
        posY={posY}
        // arrowTo={arrowTo && arrowTo}
        ps={process.filter(step => step.posX === posX && step.posY === posY)[0].ps}
        arrowToPosX={arrowTo?.map((arrow) => process.filter(step => step.ps === arrow)[0].posX)}
        arrowToPosY={arrowTo?.map((arrow) => process.filter(step => step.ps === arrow)[0].posY)}
        size={size}
        posStep={posStep}
        handleArrowClick={handleArrowClick}
      />
    </>
  )
}

export default Arrows