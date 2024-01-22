import { Navigate } from "react-router-dom"



export const PrivateRoute = ({ children }) => {
    const getTokenFromLocalStorage = JSON.parse(localStorage.getItem("customer"))

    return getTokenFromLocalStorage?.token !== undefined ? children : (<Navigate to="/Login" replace={true}></Navigate>)
}