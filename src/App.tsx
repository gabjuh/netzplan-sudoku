import './App.css'
import Step from './components/Step'
import Arrows from './components/Arrows';
import process from './datas/process'
import { IStep } from './components/Step'
import MousePosition from './components/MousePosition';
import { useEffect, useState } from 'react';
import Arrow2 from './components/Arrow2';

function App() {

  const [mouseHorizontalPosition, setMouseHorizontalPosition] = useState(0)
  const [mouseVerticalPosition, setMouseVerticalPosition] = useState(0)

  const [selectedArrows, setSelectedArrows] = useState<string[]>([])
  const fields = ['faz', 'fez', 'gp', 'fp', 'saz', 'sez']

  const [excersice, setExcersice] = useState<IStep[]>([]) 
  const [errors, setErrors] = useState<string[]>([])
  const difficulties: number[] = [4, 2, 1]
  const [selectedDifficulty, setSelectedDifficulty] = useState<number>(difficulties[0])
  const [bools, setBools] = useState<boolean[]>([])

  const getRandomBool = () => {
    return Math.random() < selectedDifficulty / 10 * 3
  }

  const get6RandomBools = () => {
    let bools: boolean[] = []
    let count = 0
    for (let i = 0; i < 6; i++) {
      if (Math.random() < 0.5) {
        bools.push(true)
        count++
      } else {
        bools.push(false)
        count++
      }
    }
    setBools(bools)
  }

  const setGame = () => {
    // In order to clone the process array properly, we need to stringify it and parse it back to JSON
    let newProcess = JSON.parse(JSON.stringify(process))
    newProcess.forEach((step: IStep) => {

      // get6RandomBools()
      // console.log(bools)
      // bools[0] ? step.faz = '' : null
      // bools[1] ? step.fez = '' : null
      // bools[2] ? step.gp  = '' : null
      // bools[3] ? step.fp = '' : null
      // bools[4] ? step.saz = '' : null
      // bools[5] ? step.sez = '' : null
      // setBools([])


      getRandomBool() ? step.faz = '' : null
      getRandomBool() ? step.fez = '' : null
      getRandomBool() ? step.gp = '' : null
      getRandomBool() ? step.fp = '' : null
      getRandomBool() ? step.saz = '' : null
      getRandomBool() ? step.sez = '' : null
    })
    setExcersice(newProcess)
  }

  useEffect(() => {
    setGame()
  }, [selectedDifficulty])

  useEffect(() => {
    // console.log(selectedArrows)
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
    // console.log(document.getElementById('A-faz')?.value)
    // let newErrors = [...process]
    let newErrors: any = []
    setErrors(newErrors)
    process.forEach((origVals: any, index: number) => {
      fields.map((field: string) => {
        const actualVal: string | number | undefined = (document.getElementById(`${origVals.ps}-${field}`) as HTMLInputElement)?.value
        console.log(actualVal, Number(origVals[field]))
        // if (Number(actualVal) !== origVals[field]) {
        if (Number(actualVal) !== Number(origVals[field]) || actualVal === '') {
          newErrors.push(`${origVals.ps}-${field}`)
        }
      }) 
    })
    setErrors(newErrors)
  }

  const resetFields = () => {
    process.forEach((origVals: any, index: number) => {
      fields.forEach((field: string) => {
        const input = document.getElementById(`${origVals.ps}-${field}`) as HTMLInputElement
        if (input && input.value !== '') {
          input.value = ''
        }
      })
    })
  }

  const handleSelectChange: React.ChangeEventHandler<HTMLSelectElement> = (event) => {
    // resetFields()
    // setErrors([])
    // setSelectedDifficulty(difficulties[Number(event.target.value)])
    // setGame()

    const userConfirmed = confirm('Willst Du wirklich die aktuelle Aufgabe abbrechen?')

    if (userConfirmed) {
      console.log(event.target.value)
      resetFields()
      // setTimeout(() => {
        setSelectedDifficulty(-1)
        setSelectedDifficulty(difficulties[Number(event.target.value)])
        setErrors([])
        setGame()
      // }, 500)
    } else {
      console.log('not confirmed')
    }
  };

  useEffect(() => {
    setGame()
    // console.log('game set')
  }, [])

  useEffect(() => {
    // console.log(errors);
    // console.log(excersice)
    // console.log(process)
  }, [errors]);

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
        {excersice.map((step, index) => (
          <Arrow2
            key={index}
            id={`bla-${index}`}
            arrowTo={step.arrowTo}
            // posX={step.posX}
          />
        ))}

          {/* <Arrows
            posX={process[0].posX}
            posY={process[0].posY}
            arrowTo={process[0].arrowTo}
            size={50}
            posStep={280} 
            handleArrowClick={handleArrowClick}
          />    */}
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
              errors={errors}
            />
          ))}
          <div className="absolute right-0 top-0 w-[150px]">
            <div className="">
              <MousePosition 
                mouseHorizontalPosition={mouseHorizontalPosition}
                mouseVerticalPosition={mouseVerticalPosition}
              />
              <select name="" id="" className="select select-sm bg-transparent dark:border-[white] hover:border-[yellow] dark:text-[white] select-bordered mt-3" onChange={handleSelectChange}>
                <option className="text-[#000]" value="0">Thanos</option>
                <option className="text-[#000]" value="1">Ultron</option>
                <option className="text-[#000]" value="2">Loki</option>
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
