import React from 'react'
import './Button.css'

// const Button = (props) => {
//     console.log(props, 'Name')
//   return (
//     <div>
//         <button>{props.name}</button>
//     </div>
//   )
// }
const Button = ({name, bgcolor, textSize, onClick}) => {
    // console.log(props, 'Name')
  return (
    <div onClick ={onClick} className='buttonContainer'>
        <button className='btn' style={{backgroundColor:`${bgcolor}`, fontSize: `${textSize}`}}>{name}</button>
    </div>
  )
}

export default Button