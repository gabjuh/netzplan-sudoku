import './App.css'
import Step from './components/Step'
import Arrows from './components/Arrows';
import process from './datas/process'
import { IStep } from './components/Step'
import MousePosition from './components/MousePosition';
import { useEffect, useState } from 'react';

function App() {

  const [mouseHorizontalPosition, setMouseHorizontalPosition] = useState(0)
  const [mouseVerticalPosition, setMouseVerticalPosition] = useState(0)

  const [selectedArrows, setSelectedArrows] = useState<string[]>([])

  const [excersice, setExcersice] = useState<IStep[]>([]) 
  const [difficulty, setDifficulty] = useState(0.7) // 1, 1.5, 2.3, 3.5

  const genRantomBool = () => {
    return Math.random() < difficulty / 10 * 2
  }

  const setGame = () => {
    let newProcess = [...process]
    newProcess.map((step: IStep) => {
      genRantomBool() ? step.faz = '' : null
      genRantomBool() ? step.fez = '' : null
      genRantomBool() ? step.gp = '' : null
      genRantomBool() ? step.fp = '' : null
      genRantomBool() ? step.saz = '' : null
      genRantomBool() ? step.sez = '' : null
    })
    setExcersice(newProcess)
  }

  useEffect(() => {
    setGame()
  }, [difficulty])

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

  const handleCheck = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(excersice[0].faz)
    console.log(process[0].faz)
  }

  const handleSelectChange: React.ChangeEventHandler<HTMLSelectElement> = (event) => {
    setDifficulty(Number(event.target.value))
    // setGame()
  };

  useEffect(() => {
    setGame()
    console.log(difficulty)
  }, [difficulty])

  useEffect(() => {

  }, [excersice])

  return (
    <>    

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
        <form action="" onSubmit={handleCheck}>
          {excersice.map((step, index) => (
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
          <div className="absolute right-0 top-0 w-[150px]">
            <div className="">
              <MousePosition 
                mouseHorizontalPosition={mouseHorizontalPosition}
                mouseVerticalPosition={mouseVerticalPosition}
              />
              <select name="" id="" className="select select-sm bg-transparent border-[white] hover:border-[yellow] text-[white] select-bordered mt-3" onChange={handleSelectChange}>
                <option className="text-[#000]" value="1">Loki</option>
                <option className="text-[#000]" value="1.5">Doctor Octopus</option>
                <option className="text-[#000]" value="2.3">Ultron</option>
                <option className="text-[#000]" value="3.5">Thanos</option>
              </select>
              <button className="btn btn-sm bg-transparent border border-[white] hover:border-[yellow] mt-3 z-[300]">check</button>
            </div>
          </div>
        </form>
      </div>      
    </>
  )
}

export default App
