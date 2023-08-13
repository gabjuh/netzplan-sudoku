import React, {useState, useEffect} from 'react'

interface IField {
  value?: number | string;
  name: string;
  ps: string;
  error?: boolean;
}

const Field: React.FC<IField> = ({
  value,
  name,
  ps,
  error
}) => {

  const [isRed, setIsRed] = useState<boolean>(false)

  useEffect(() => {
    setIsRed(error ? true : false)
  }, [error])

  return (
    <input id={`${ps}-${name}`} type="text" maxLength={2} min="0" step="1" className={`w-10 text-center bg-transparent ${isRed ? 'border-[3px] border-red-500 box-content text-red-500' : ''}`} defaultValue={value}/>
  )
}

export default Field