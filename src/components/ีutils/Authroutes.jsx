import { Outlet,Navigate } from "react-router-dom";

const Authroutes =()=>{
    const currentUser=null
    return currentUser ? <Outlet/> :<Navigate to="/login"/>
}
export default Authroutes;