import './App.css'
import Step from './components/Step'
import Arrows from './components/Arrows';
import process from './datas/process'
import MousePosition from './components/MousePosition';
import { useEffect, useState } from 'react';

function App() {

  const [mouseHorizontalPosition, setMouseHorizontalPosition] = useState(0)
  const [mouseVerticalPosition, setMouseVerticalPosition] = useState(0)

  const [selectedArrows, setSelectedArrows] = useState<string[]>([])

  useEffect(() => {
    console.log(selectedArrows)
  }, [selectedArrows])

  const handleArrowClick = (arrowId: string) => {
    if (selectedArrows.includes(arrowId)) {
      setSelectedArrows(selectedArrows.filter((arrow) => arrow !== arrowId))
    } else {
      setSelectedArrows([...selectedArrows, arrowId])
    }
  }

  return (
    <>    
      {/* <div className="absolute right-0 top-0 w-[150px]">
        <MousePosition 
          mouseHorizontalPosition={mouseHorizontalPosition}
          mouseVerticalPosition={mouseVerticalPosition}
        />
        <button className="btn btn-sm absolute mt-[50px] z-[300]">Check</button>
      </div> */}

      <div className="" 
        onMouseMove={(e) => {
          setMouseHorizontalPosition(e.clientX)
          setMouseVerticalPosition(e.clientY)
        }
      }>
        <div 
          className="absolute left-0 top-0 w-[100vw] h-[100vh] z-0"
          id="arrows-layer"
        >
          <Arrows
            posX={process[0].posX}
            posY={process[0].posY}
            arrowTo={process[0].arrowTo}
            size={50}
            posStep={280} 
            handleArrowClick={handleArrowClick}
          />   
        </div>
        {process.map((step, index) => (
          <Step 
            key={index}
            posX={step.posX}
            posY={step.posY}
            faz={step.faz}
            fez={step.fez}
            ps={step.ps}
            pn={step.pn}
            pd={step.pd}
            gp={step.gp}
            fp={step.fp}
            saz={step.saz}
            sez={step.sez}
            arrowTo={step.arrowTo && step.arrowTo}
          />
        ))}
      </div>
      <div className="absolute right-0 top-0 w-[150px]">
        <MousePosition 
          mouseHorizontalPosition={mouseHorizontalPosition}
          mouseVerticalPosition={mouseVerticalPosition}
        />
        <button className="btn btn-sm absolute mt-[50px] z-[300]">Check</button>
      </div>
    </>
  )
}

export default App
