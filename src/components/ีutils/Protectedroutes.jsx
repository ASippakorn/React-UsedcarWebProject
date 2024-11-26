import { Outlet,Navigate } from "react-router-dom";

const Protectedroutes =()=>{
    const user = null
    return user ? <Outlet/> :<Navigate to="/login"/>
}
export default Protectedroutes