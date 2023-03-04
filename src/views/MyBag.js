import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import ConfirmRelease from "./components/ConfirmRelease";
import {update} from "../store/reducers/Page";

export default function MyBag () {
    const list = useSelector(state => state.myBag.list)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(update({
            status: false
        }))
    }, [])

    return (
        <div className="container mt-4">
            <div className="card w-50 mx-auto">
                <div className="card-header">
                    <div className="card-title fw-bold">
                        My Bag
                    </div>
                </div>
                <div className="card-body">
                    {list.length > 0
                        &&
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
                                                data-bs-toggle="modal"
                                                data-bs-target="#confirmReleaseModal">Release</button>
                                    </td>
                                </tr>
                            ))
                        }
                        </tbody>
                    </table>
                    }
                    {
                        list.length == 0
                        &&
                        <h4>You dont have any Pokemon. Go catch some!</h4>
                    }
                </div>
            </div>
            <ConfirmRelease/>
        </div>
    )
}