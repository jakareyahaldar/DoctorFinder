import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";


export default function Dashboard() {
  return (
    <div className="flex gap-5">
        <Sidebar />
        <div className="w-full">
            <Outlet />
        </div>                                                                                                                                                                                                        
    </div>
  )
}
