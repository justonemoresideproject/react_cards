import React, { useState } from "react"
import axios from "axios"
import { v4 as uuid } from "uuid";

const useFlip = ({conditional}) => {
    const [isFacingUp, setIsFacingUp] = useState(conditional)

    const flipCard = () => {
        isFacingUp(isFacingUp => !isFacingUp)
    }

    return [isFacingUp, flipCard]
}

const useAxios = () => {
    const [array, setArray] = useState([])

    const addObject = async (url, name=false) => {
        if(name===false){
            const res = await axios.get(url)

            return setArray(array => [...array, { ...res.data, id: uuid()}])
        }
        const url = `https://pokeapi.co/api/v2/pokemon/${name}/`
        const res = await axios.get(url)

        return setArray(array => [...array], res.data)
    }

    return [array, addObject]
}

export default {useFlip, useAxios}