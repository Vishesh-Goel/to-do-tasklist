import { useState } from "react"

const Form = () => {
    const [person, setPerson] = useState({
        first: '',
        second: '',
        phone: 0
    })

    const handlefirstchange = (e) => {
        setPerson({
            ...person,
            first: e.target.value
        })
    }

    const handlesecondchange = (e) => {
        setPerson({
            ...person,
            second: e.target.value
        })
    }

    const handlephonechange = (e) => {
        setPerson({
            ...person,
            phone: e.target.value
        })
    }

    const handleSubmit = () => {
        alert('form has been submitted')
    }

    return (
        <>
            <h2>Input form example: </h2>
            <form onSubmit={(e) => {
                e.preventDefault()
                handleSubmit()
            }}>
                <label>First name: <input style={{display: "block", marginBottom: 10 }} placeholder='Enter first name...'
                value={person.first} onChange={handlefirstchange} required /> </label>
                
                <label>second name: <input style={{display: "block", marginBottom: 10 }} placeholder='Enter second name...' 
                value={person.second} onChange={handlesecondchange} /> </label>
                
                <label>phone: <input style={{display: "block", marginBottom: 10 }} placeholder="enter phone number..." 
                type="number" value={person.phone} onChange={handlephonechange} required/> </label>
                
                <button type='submit'>Submit</button>
            </form>
            
        </>
    )
}

export default Form