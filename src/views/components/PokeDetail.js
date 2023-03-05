import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";

export default function PokeDetail (props) {
    const [pokeDetail, setPokeDetail] = useState([])

    useEffect(() => {
        fetch(props.url)
            .then((data) => data.json())
            .then((data) => {
                setPokeDetail(data)
            })
    }, [props.url])
    return (
        <div className="pokeDetail p-1 col-lg-2 mb-3">
            <Link to={`/detail/${pokeDetail.id}`}>
                <div className="rounded-circle mx-auto" style={{background: "#bbc19b",width : '150px', height: '150px'}}>
                    <img src={pokeDetail.sprites?.front_default} className="w-100 h-100"/>
                </div>
                <div>
                    <h4 className="text-center">{pokeDetail.name}</h4>
                </div>
            </Link>
        </div>
    )
}