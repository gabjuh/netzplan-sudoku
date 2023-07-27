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
    minWidth: string;
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
    minWidth: size + 'px',
  };

  return (
    
    <div 
      className="absolute p-[1rem]"
      style={{...posXStyle, ...posYStyle}}
    >
      <table>
        <tr>
          <td className="border text-3xl w-[100%]" style={sizeStyle}>{faz}</td>
          <td></td>
          <td className="border text-3xl w-[100%]" style={sizeStyle}>{fez}</td>
        </tr>
        <tr>
          <td className="border text-3xl w-[100%]" style={sizeStyle}>{ps}</td>
          <td className="border border-r-0 text-3xl w-[100%]" style={sizeStyle}>{pn}</td>
          <td className="border border-l-0 w-[100%]" style={sizeStyle}></td>
        </tr>
        <tr>
          <td className="border text-3xl w-[100%]" style={sizeStyle}>{pd}</td>
          <td className="border text-3xl w-[100%]" style={sizeStyle}>{gp}</td>
          <td className="border text-3xl w-[100%]" style={sizeStyle}>{fp}</td>
        </tr>
        <tr>
          <td className="border text-3xl w-[100%]" style={sizeStyle}>{saz}</td>
          <td></td>
          <td className="border text-3xl w-[100%]" style={sizeStyle}>{sez}</td>
        </tr>
      </table>
    </div>
  )
}

export default Step