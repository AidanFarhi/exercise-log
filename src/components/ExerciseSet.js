import { useState, useEffect } from "react";
import ExerciseItem from "./ExerciseItem";

export default function ExerciseSet() {
    const [items, setItems] = useState([])

    const generateItems = () => {
        const items = []
        for (let i = 0; i < 10; i++) {
            items.push(<ExerciseItem />)
        }
        return items
    }

    useEffect(() => {
        setItems(generateItems())
    }, [])

    return (
        <div>
            {items}
        </div>
    )
}