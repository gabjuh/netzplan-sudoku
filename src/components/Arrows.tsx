import Arrow from "./Arrow"
import process from "../datas/process"

interface Arrows {
  posX: number;
  posY: number;
  arrowTo: string[] | undefined;
  size: number;
  posStep: number;
}

const Arrows: React.FC<Arrows> = ({
  posX,
  posY,
  arrowTo,
  size,
  posStep
}) => {
  return (
    <>
      <Arrow 
        posX={posX}
        posY={posY}
        // arrowTo={arrowTo && arrowTo}
        arrowToPosX={arrowTo?.map((arrow) => process.filter(step => step.ps === arrow)[0].posX)}
        arrowToPosY={arrowTo?.map((arrow) => process.filter(step => step.ps === arrow)[0].posY)}
        size={size}
        posStep={posStep}
      />
    </>
  )
}

export default Arrows