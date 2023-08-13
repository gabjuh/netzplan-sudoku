import Field from "./Field";

export interface IPathCoords {
  start: number[];
  breakPoints?: number[][];
  end: number[];
}

export interface IArrowTo {
  id: string;
  pathCoords: IPathCoords
}

export interface IStep {
  [x: string]: any;
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
  arrowTo?: IArrowTo[];
  errors?: string[];
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
  errors
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
            <td className="border border-[#222] dark:border-[#eee] text-3xl w-[100%]" style={sizeStyle}>
              <Field
                value={faz}
                name={'faz'}
                ps={ps}
                error={errors && errors.includes(`${ps}-faz`)}
              />
            </td>
            <td></td>
            <td className="border border-[#222] dark:border-[#eee] text-3xl w-[100%]" style={sizeStyle}>
              <Field
                value={fez}
                name={'fez'}
                ps={ps}
                error={errors && errors.includes(`${ps}-fez`)}
              />
            </td>
          </tr>
          <tr>
            <td className="border border-[#222] dark:border-[#eee] text-3xl w-[100%]" style={sizeStyle}>
              {/* ps */}
              <input id={`${ps}-ps`} type="text" maxLength={2} min="0" step="1" className="w-10 text-center bg-transparent" defaultValue={ps}/>
            </td>
            <td className="border border-[#222] dark:border-[#eee] border-r-0 text-3xl w-[100%]" style={sizeStyle}>
              {/* <input type="text" maxLength={2} min="0" step="1" className="w-10 text-center bg-transparent" defaultValue={pn}/> */}
            </td>
            <td className="border border-[#222] dark:border-[#eee] border-l-0 w-[100%]" style={sizeStyle}></td>
          </tr>
          <tr>
            <td className="border border-[#222] dark:border-[#eee] text-3xl w-[100%]" style={sizeStyle}>
              <Field
                value={pd}
                name={'pd'}
                ps={ps}
                error={errors && errors.includes(`${ps}-pd`)}
              />
              {/* <input id={`${ps}-pd`} type="text" maxLength={2} min="0" step="1" className="w-10 text-center bg-transparent" defaultValue={pd} /> */}
            </td>
            <td className="border border-[#222] dark:border-[#eee] text-3xl w-[100%]" style={sizeStyle}>
              <Field
                value={gp}
                name={'gp'}
                ps={ps}
                error={errors && errors.includes(`${ps}-gp`)}
              />
              {/* <input id={`${ps}-gp`} type="text" maxLength={2} min="0" step="1" className="w-10 text-center bg-transparent" defaultValue={gp}/> */}
            </td>
            <td className="border border-[#222] dark:border-[#eee] text-3xl w-[100%]" style={sizeStyle}>
              <Field
                value={fp}
                name={'fp'}
                ps={ps}
                error={errors && errors.includes(`${ps}-fp`)}
              />
              {/* <input id={`${ps}-fp`} type="text" maxLength={2} min="0" step="1" className="w-10 text-center bg-transparent" defaultValue={fp}/> */}
            </td>
          </tr>
          <tr>
            <td className="border border-[#222] dark:border-[#eee] text-3xl w-[100%]" style={sizeStyle}>
              <Field
                value={saz}
                name={'saz'}
                ps={ps}
                error={errors && errors.includes(`${ps}-saz`)}
              />
              {/* <input id={`${ps}-saz`} type="text" maxLength={2} min="0" step="1" className="w-10 text-center bg-transparent" defaultValue={saz}/> */}
            </td>
            <td></td>
            <td className="border border-[#222] dark:border-[#eee] text-3xl w-[100%]" style={sizeStyle}>
              <Field
                value={sez}
                name={'sez'}
                ps={ps}
                error={errors && errors.includes(`${ps}-sez`)}
              />
              {/* <input id={`${ps}-sez`} type="text" maxLength={2} min="0" step="1" className="w-10 text-center bg-transparent" defaultValue={sez}/> */}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Step