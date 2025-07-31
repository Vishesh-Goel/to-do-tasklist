import './App.css'
// import { useState } from 'react'
import Todo from './components/comp/todo.jsx'

function App() {
    // const [displayRecipe, setDisplay] = useState(false)
    
    return (
        <>
            {/*
            <Counter handleClick={handleClick} clicks={count} text={text} />
            <br />
            <br />
            <button onClick={() => setDisplay(!displayRecipe)}>Click here to {displayRecipe ? "hide" : "see"} recipes!</button>
            {displayRecipe ? <Recipelist/> : <br />} */}
            <Todo />
            
        </>
    )
}

export default App