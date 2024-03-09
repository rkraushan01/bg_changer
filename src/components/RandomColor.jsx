import React, {useState} from 'react'

function RandomColor() {
    const [color, setColor] = useState("grey")

    function changeBackgroundColor() {
      const newColor = getRandonColor();
      console.log(newColor);
      setColor(newColor)
    }
    function getRandonColor() {
      // generate random color
      return '#' + Math.floor(Math.random() * 16777215).toString(16);
    }
  
  return (
    <div
    style={{backgroundColor: color}}
    className='h-screen'
    >
      <h1 className='font-bold text-4xl text-center'>Random color generator</h1>
      <div className='text-center'>
        <button
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5'
          onClick={changeBackgroundColor}
        >Select Random Background Color</button>

        <h2
        className='font-bold bg-gray-500'
        >Hex Code Generated: {color}</h2>
      </div>
    </div>
  )
}

export default RandomColor
