import { useState } from 'react'

export const useMayus = (text) => {
    const [mytext, setMytext] = useState(text);
    const mayus = () => {
        setMytext(text.toUpperCase());
    }
    const minus = () => {
        setMytext(text.toLowerCase());
    }
    const concat = (added) => {
        setMytext(text + added);
    }

    return {mytext, mayus, minus, concat};
}