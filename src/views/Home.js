import React from "react";
import {useEffect, useState} from "react";
import PokeApi from "../apis/PokeApi.js";
import PokeDetail from "./components/PokeDetail";
import {update} from "../store/reducers/Page";
import {useDispatch} from "react-redux";

export default function Home () {
    const [pokeList, setPokeList] = useState([])
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(update({
            status: true
        }))
        PokeApi.listPokemon(0, 30)
            .then(response => {
                setPokeList(response.data.results)
                dispatch(update({
                    status: false
                }))
            })

    }, [])
    return (
        <div className="container">
            <div className="row">
                {
                    pokeList.map((item) => (
                        <PokeDetail key={item.name} url={item.url}/>
                    ))
                }
            </div>
        </div>
    )
}