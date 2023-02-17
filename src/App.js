import React, { useState, useCallback } from 'react'
import Child from './Child'


// useCallback are used when we pass the any function from parent component to child component through props in that case the child component is re-render .when child component is allredy memorized by using the memo .so to avoid the re-rendering of the component we are use the useCllback hook . the useCallback hook return the memorized function.
const App = () => {
    const [count, setCount] = useState(0);
    const [value, setValue] = useState(0);
    const increaseCount = () => {
        setCount(count + 1)
    }
    const parentFun = useCallback(() => {
        //somthing

        // if we want to render the child component on the click or extr.we are passing the value inside the dependencies.then it will render only when the one the props is udated 

    }, [value])
    return (
        <div>
            <h1>count:{count}</h1>
            <button onClick={increaseCount}>count</button>
            <Child parentFun={parentFun} value={value} />
            <button onClick={() => setValue(value + 1)}>forChildrender</button>
        </div>
    )
}

export default App