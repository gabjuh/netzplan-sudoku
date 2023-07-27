import process from "../datas/process";
import Arrow from "./Arrow";

interface Step {
  posX: number;
  posY: number;
  faz: number;
  fez: number;
  ps: string;
  pn: string;
  pd: number;
  gp: number;
  fp: number;
  saz: number;
  sez: number;
  arrowTo: string[] | undefined;
}

const Step: React.FC<Step> = ({
  posX,
  posY,
  faz,
  fez,
  ps,
  pn,
  pd,
  gp,
  fp,
  saz,
  sez,
  arrowTo,
}) => {

  interface sizeStyle {
    width: string;
    height: string;
  }

  interface posXStyle {
    left: string;
  }

  interface posYStyle {
    top: string;
  }

  const size: number = 50;
  const posStep: number = 280;
  
  const posXStyle: posXStyle = {
    left: `${posX + ((posX - 1) * posStep)}px`,
  };

  const posYStyle: posYStyle = {
    top: `${posY + ((posY - 1) * posStep)}px`,
  };
  
  const sizeStyle: sizeStyle = {
    width: size + 'px',
    height: size + 'px',
  };

  return (
    
    <div 
      className="absolute p-[1rem]"
      style={{...posXStyle, ...posYStyle}}
    >
      <table>
        <tr>
          <td className="border text-3xl" style={sizeStyle}>{faz}</td>
          <td></td>
          <td className="border text-3xl" style={sizeStyle}>{fez}</td>
        </tr>
        <tr>
          <td className="border text-3xl" style={sizeStyle}>{ps}</td>
          <td className="border border-r-0 text-3xl" style={sizeStyle}>{pn}</td>
          <td className="border border-l-0" style={sizeStyle}></td>
        </tr>
        <tr>
          <td className="border text-3xl" style={sizeStyle}>{pd}</td>
          <td className="border text-3xl" style={sizeStyle}>{gp}</td>
          <td className="border text-3xl" style={sizeStyle}>{fp}</td>
        </tr>
        <tr>
          <td className="border text-3xl" style={sizeStyle}>{saz}</td>
          <td></td>
          <td className="border text-3xl" style={sizeStyle}>{sez}</td>
        </tr>
      </table>
      {/* <p>{arrowTo && arrowTo}</p> */}
      <Arrow 
        posX={posX}
        posY={posY}
        // arrowTo={arrowTo && arrowTo}
        arrowToPosX={arrowTo?.map((arrow) => process.filter(step => step.ps === arrow)[0].posX)}
        arrowToPosY={arrowTo?.map((arrow) => process.filter(step => step.ps === arrow)[0].posY)}
        size={size}
        posStep={posStep}
      />
      {/* {arrowTo && arrowTo.length > 0 && arrowTo.map((arrow, index) => (
        <span key={index}>{arrow}</span>
      ))} */}
    </div>
  )
}

export default Step