import React, {useEffect, useState} from "react";
import {remove} from "../../store/reducers/MyBag";
import {useDispatch} from "react-redux";
import {Modal} from "bootstrap";

export default function ConfirmRelease () {
    const [index, setIndex] = useState()
    const dispatch = useDispatch()
    let myModal;
    useEffect(() => {
        const myModalEl = document.getElementById('confirmReleaseModal')
        myModalEl.addEventListener('show.bs.modal', function (event) {
            setIndex(event.relatedTarget.dataset.idx)
        })
        myModal = new Modal(document.getElementById('confirmReleaseModal'))
    }, [])

    function confirmRelease() {
        dispatch(remove({
            index: index
        }))
        myModal.hide();
    }

    return (
        <div id="confirmReleaseModal" className="modal fade" aria-hidden="true"> tabIndex="-1">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Confirm Release</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <p>Are you sure?</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary" onClick={confirmRelease}>Yes</button>
                    </div>
                </div>
            </div>
        </div>
    )
}