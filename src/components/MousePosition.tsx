
interface IMousePosition {
  mouseHorizontalPosition: number;
  mouseVerticalPosition: number;
}

const MousePosition: React.FC<IMousePosition> = ({
  mouseHorizontalPosition,
  mouseVerticalPosition
}) => {
  
  
  return (
    <div 
      className="pt-1 z-[50] absolute right-0" 
    >
      <small>
        <div>
          x:<span className="inline-block w-[3rem]">{mouseHorizontalPosition}</span>
        </div>
        <div>
          y:<span className="inline-block w-[3rem]">{mouseVerticalPosition}</span>
        </div>
      </small>
    </div>
  )
}

export default MousePosition