import React from 'react'

const InputControl = ({label ,name,errors,register,...props}) => {

  return (
    <div className='form-input-box'>
        <label htmlFor="name">{label}</label>
        <input  {...props} name={name} {...register(name)}></input>
        {errors && errors[name] && (
        <span className="error-message">{errors[name].message}</span>
      )}
    </div>
  )
}

export default InputControl
