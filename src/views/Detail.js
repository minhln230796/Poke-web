import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom"
import PokeApi from "../apis/PokeApi.js";
import Swal from 'sweetalert2'
import {useDispatch} from "react-redux";
import {add} from "../store/reducers/MyBag";
import {update} from "../store/reducers/Page";

export default function Detail () {
    const {id} = useParams()
    const [detail, setDetail] = useState([])
    const [catching, setCatching] = useState(false)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(update({
            status: true
        }))
        PokeApi.getPokemonDetail(id)
            .then(response => {
                setDetail(response.data);
                dispatch(update({
                    status: false
                }))
            })
    }, [])

    function uppercase1stLetter(name) {
        if (name) {
            return name.charAt(0).toUpperCase() + name.slice(1, name.length)
        }
        return name
    }

    function catchPoke() {
        setCatching(true);
        const number = parseInt(Math.random() * 100000);
        const success = number % 2 == 0
        setTimeout(() => {
            if (success) {
                Swal.fire({
                    icon: "success",
                    text: "Hooray!. You did it! Enter name:",
                    input: 'text',
                    inputLabel: "What will you call it?",
                    inputValue: '',
                    showCancelButton: true,
                    inputValidator: (value) => {
                        if (!value) {
                            return 'You need to enter the name'
                        }
                    }
                }).then((result) => {
                    if (result.isConfirmed) {
                        dispatch(add({
                            name: result.value,
                            id: id,
                            detail: detail
                        }))
                    }
                })
            } else {
                Swal.fire({
                    icon: 'error',
                    text: 'Sorry. It seems like you can not catch this pokemon. Try again!',
                })
            }
            setCatching(false)
        }, 1000)
    }
    return (
        <React.Fragment>
            <div className="container mx-auto mt-4">
                <div className="card">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-lg-2">
                                <div style={{ background: "#ededed", width: '200px', height: '200px'}}
                                    className="mx-auto rounded-circle">
                                    <img src={detail.sprites?.back_default} alt={detail.name}
                                         className="w-100 h-100"/>
                                </div>
                                <h3 className="text-center">{uppercase1stLetter(detail.name)}</h3>
                                <div className="text-center">
                                    <button className="btn btn-primary" onClick={catchPoke} disabled={catching}>
                                        {catching && <><div className="spinner-border spinner-border-sm" role="status"></div>&nbsp;</>}
                                        {catching ? 'Catching' : "Catch"}
                                    </button>
                                </div>
                            </div>
                            <div className="col-lg-10 mt-3">
                                <ul className="list-group">
                                    <li className="list-group-item">
                                        <label className="fw-bold">Height: </label> {detail.height}
                                    </li>
                                    <li className="list-group-item">
                                        <label className="fw-bold">Weight: </label> {detail.weight}
                                    </li>
                                    {
                                        detail.stats?.map((stat, index) => (
                                            <li className="list-group-item" key={index}>
                                                <label className="fw-bold">{uppercase1stLetter(stat.stat?.name)}: </label> {stat.base_stat}
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                        <div className="row mt-4">
                            <div className="col-lg-6">
                                <h4>Moves <span className="badge bg-primary">{detail.moves?.length}</span></h4>
                                <ul className="list-group">
                                    {
                                        detail.moves?.map((move,index) => (
                                            <li className="list-group-item" key={index}>
                                                <label className="fw-bold">{uppercase1stLetter(move.move?.name)}</label>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                            <div className="col-lg-6">
                                <h4>Abilities <span className="badge bg-primary">{detail.abilities?.length}</span></h4>
                                <ul className="list-group">
                                    {
                                        detail.abilities?.map((ability, index) => (
                                            <li className="list-group-item" key={index}>
                                                <label className="fw-bold">{uppercase1stLetter(ability.ability?.name)}</label>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}