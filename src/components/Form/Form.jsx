import React from 'react'

const Form = () => {
  return (
    <div className='card'>
        <title>Investment Calculator</title>
        <div className='input'>
            <p>CURRENT SAVINGS</p>
            <input type="number" defaultValue={10000}/>
        </div>
        <div className='input'>
            <p>YEARLY SAVINGS</p>
            <input type="number" defaultValue={1000}/>
        </div>
        <div className='input'>
            <p>EXPECTED INTEREST (% PER YEAR)</p>
            <input type="number" defaultValue={10}/>
        </div>
        <div className='input'>
            <p>INVESTMENT DURARTION (YEARS)</p>
            <input type="number" defaultValue={10}/>
        </div>
    </div>
  )
}

export default Form
