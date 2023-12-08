import React from 'react'

function Input1({ type, label, placeholder, selectOptions }) {
  return (
    <div className='h-10 w-1/3 p-5 text-black'>
    <label>{label}</label>
    {type === 'select' ? (
      <select>
        {selectOptions.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    ) : (
      <input type={type} placeholder={placeholder} className="custom-input" />
    )}
  </div>
  )
}

export default Input1
