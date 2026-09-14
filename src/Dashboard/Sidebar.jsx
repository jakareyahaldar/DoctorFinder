import {
  CalendarCheck,
  DoorClosedIcon,
  LayoutDashboard,
  Menu,
  Stethoscope,
  UserPlus,
  Users,
  X,
} from "lucide-react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Sidebar() {
  const [isOpen, setOpen] = useState(false);
  const navigate = useNavigate()
  const location = useLocation()

  const items = [
    { key: "dashboard", label: "Dashboard", icon: LayoutDashboard, path:"" },
    { key: "add", label: "Add Doctor", icon: UserPlus, path:"add-doctor" },
    { key: "doctors", label: "Manage Doctors", icon: Users, path:"doctors" },
    { key: "appointments", label: "Appointments", icon: CalendarCheck, path:"appoinment" },
  ];

  return (
    <div>
      { !isOpen && <Menu className="md:hidden mt-6 hover:rotate-180 duration-700" onClick={()=>setOpen(!isOpen)} /> }
      <aside className={`${isOpen ? "flex":" hidden md:flex"} fixed md:static w-60 h-dvh shrink-0 flex flex-col text-white bg-black`}>
        <div
          className="h-16 flex items-center justify-between gap-2 px-5 border-b"
          style={{ borderColor: "rgba(255,255,255,0.08)" }}
        >
          <Stethoscope size={20} style={{ color: "var(--accent)" }} />
          <X onClick={()=>setOpen(!isOpen)} className="md:hidden hover:rotate-180 duration-700" />
        </div>
        <nav className="flex-1 py-4">
          {items.map(({ key, label, icon: Icon, path }) => {
            const isActive = location.pathname.includes(path)
            return (
              <button
                onClick={()=> navigate(path)}
                key={key}
                className="w-full flex items-center gap-3 px-5 py-3 text-sm transition-colors"
                style={{
                  color: isActive ? "var(--accent)" : "rgba(255,255,255,0.75)",
                  background: isActive
                    ? "rgba(184,134,43,0.12)"
                    : "transparent",
                  borderLeft: isActive
                    ? "3px solid var(--accent)"
                    : "3px solid transparent",
                }}
              >
                <Icon size={17} />
                {label}
              </button>
            );
          })}
        </nav>
        <div className="p-5 text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>
          Admin panel · v1.0
        </div>
      </aside>
    </div>
  );
}
