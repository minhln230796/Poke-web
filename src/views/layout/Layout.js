import Header from "./Header";
import {Outlet} from "react-router-dom"
import React from "react";
import {useSelector} from "react-redux";

export default function Layout () {
    const loading = useSelector(state => state.page.loading)

    return (
        <React.Fragment>
            <Header/>
            <div id="content">
                <Outlet/>
            </div>
            {
                loading
                &&
                <div id="loader" className="justify-content-center d-flex">
                    <div className="align-self-center">
                        <div className="spinner-grow text-primary" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                        <div className="spinner-grow text-primary ms-3" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                        <div className="spinner-grow text-primary ms-3" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                </div>
            }
        </React.Fragment>
    )
}