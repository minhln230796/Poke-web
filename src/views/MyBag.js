import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import Swal from "sweetalert2";
import {update} from "../store/reducers/Page";
import { remove } from "../store/reducers/MyBag";

export default function MyBag () {
    const list = useSelector(state => state.myBag.list)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(update({
            status: false
        }))
    }, [])

    function confirmRelease(index) {
        Swal.fire({
            icon: "question",
            text: "Confirm Release?",
            showCancelButton: true,
            confirmButtonText: 'Yeah',
            cancelButtonText: "Nope"
        }).then(result => {
            if (result.isConfirmed) {
                dispatch(remove({
                    index
                }))
                Swal.fire({
                    icon: "success",
                    text: "Released!"
                })
            }
        })
    }

    return (
        <div className="container mt-4">
            <div className="card mx-auto">
                <div className="card-header">
                    <div className="card-title fw-bold">
                        My Bag
                    </div>
                </div>
                <div className="card-body">
                    {list.length > 0
                        &&
                        <div className="table-responsive">
                            <table className="table">
                                <tbody>
                                {
                                    list.map((item, index) => (
                                        <tr key={index}>
                                            <td width="20%">
                                                <img src={item.detail.sprites?.back_default} alt={item.name}/>
                                            </td>
                                            <td className="align-middle">
                                                {item.name}
                                            </td>
                                            <td className="align-middle">
                                                <button className="btn btn-warning" data-idx={index}
                                                        onClick={() => confirmRelease(index)}>Release</button>
                                            </td>
                                        </tr>
                                    ))
                                }
                                </tbody>
                            </table>
                        </div>
                    }
                    {
                        list.length == 0
                        &&
                        <h4>You dont have any Pokemon. Go catch some!</h4>
                    }
                </div>
            </div>
        </div>
    )
}