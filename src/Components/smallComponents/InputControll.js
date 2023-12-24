import React from 'react'

const InputControl = ({label ,name,register,...props}) => {
  console.log(props)
  return (
    <div className='form-input-box'>
        <label htmlFor="name">{label}</label>
        <input  {...props} name={name} {...register(name)}></input>
    </div>
  )
}

export default InputControl
