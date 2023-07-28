
export interface IStep {
  posX: number;
  posY: number;
  faz: number | string;
  fez: number | string;
  ps: string;
  pn: string;
  pd: number;
  gp: number | string;
  fp: number | string;
  saz: number | string;
  sez: number | string;
  arrowTo?: string[];
}

const Step: React.FC<IStep> = ({
  posX,
  posY,
  faz,
  fez,
  ps,
  // pn,
  pd,
  gp,
  fp,
  saz,
  sez,
  // arrowTo,
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
    left: `${posX && posX + ((posX - 1) * posStep)}px`,
  };

  const posYStyle: posYStyle = {
    top: `${posY && posY + ((posY - 1) * posStep)}px`,
  };
  
  const sizeStyle: sizeStyle = {
    width: size + 'px',
    height: size + 'px',
    minWidth: size + 'px',
  };

  return (
    
    <div 
      className="absolute p-[1rem] z-1"
      style={{...posXStyle, ...posYStyle}}
    >
      <table>
        <tbody>
          <tr>
            {/* <td className="border text-3xl w-[100%]" style={sizeStyle}>{faz}</td> */}
            <td className="border text-3xl w-[100%]" style={sizeStyle}>
              <input type="text" maxLength={2} min="0" step="1" className="w-10 text-center bg-transparent" defaultValue={faz}/>
            </td>
            <td></td>
            <td className="border text-3xl w-[100%]" style={sizeStyle}>
              <input type="text" maxLength={2} min="0" step="1" className="w-10 text-center bg-transparent" defaultValue={fez}/>  
            </td>
          </tr>
          <tr>
            <td className="border text-3xl w-[100%]" style={sizeStyle}>
              <input type="text" maxLength={2} min="0" step="1" className="w-10 text-center bg-transparent" defaultValue={ps}/>
            </td>
            <td className="border border-r-0 text-3xl w-[100%]" style={sizeStyle}>
              {/* <input type="text" maxLength={2} min="0" step="1" className="w-10 text-center bg-transparent" defaultValue={pn}/> */}
            </td>
            <td className="border border-l-0 w-[100%]" style={sizeStyle}></td>
          </tr>
          <tr>
            <td className="border text-3xl w-[100%]" style={sizeStyle}>
              <input type="text" maxLength={2} min="0" step="1" className="w-10 text-center bg-transparent" defaultValue={pd} />
            </td>
            <td className="border text-3xl w-[100%]" style={sizeStyle}>
              <input type="text" maxLength={2} min="0" step="1" className="w-10 text-center bg-transparent" defaultValue={gp}/>
            </td>
            <td className="border text-3xl w-[100%]" style={sizeStyle}>
              <input type="text" maxLength={2} min="0" step="1" className="w-10 text-center bg-transparent" defaultValue={fp}/>
            </td>
          </tr>
          <tr>
            <td className="border text-3xl w-[100%]" style={sizeStyle}>
              <input type="text" maxLength={2} min="0" step="1" className="w-10 text-center bg-transparent" defaultValue={saz}/>
            </td>
            <td></td>
            <td className="border text-3xl w-[100%]" style={sizeStyle}>
              <input type="text" maxLength={2} min="0" step="1" className="w-10 text-center bg-transparent" defaultValue={sez}/>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Step