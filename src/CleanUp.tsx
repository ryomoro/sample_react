import React, {useState, useEffect} from 'react'

const CleanUp:React.FC = () => {
    const [currentNum, setCurrentNum] = useState(0);
    const incrementNum = () => {
        console.log("mouse event envolked!");
        setCurrentNum((preNumber) => preNumber + 1)
    }

    useEffect(() => {
        console.log("useEffect in cleanUp");
        window.addEventListener("mousedown", incrementNum);
        return () => {
            console.log("cleanUP involked!")
            window.removeEventListener("mousedown", incrementNum)
        }
    }, [])

    return (
        <div>{currentNum}</div>
    )
}

export default CleanUp
