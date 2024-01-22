import { Navigate } from "react-router-dom"

export const OpenRoute = ({ children }) => {
    const getTokenFromLocalStorage = JSON.parse(localStorage.getItem("Customer"))

    return getTokenFromLocalStorage?.token === undefined ? children : (<Navigate to="/" replace={true}></Navigate>)
}