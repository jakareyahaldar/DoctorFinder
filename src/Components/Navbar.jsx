import React, { useState } from "react";
import logo from "../..//public/Logo.jpg"
import { Search } from 'lucide-react'
import Seaarch from "./Seaarch";

export default function Navbar() {

  const [isSearchActive, setSearch] = useState(false)

  function ToggleSearch(){
    setSearch(!isSearchActive)
  }


  return (
    <header className="flex justify-between items-center py-5 shadow-md">
      <Seaarch isOpen={isSearchActive} toggle={ToggleSearch}  />
      <div className="flex gap-10 items-center">
        <img className="w-[170] h-10" src={logo} alt="logo" />
        <Search className="hover:scale-125 duration-500" onClick={ToggleSearch} />
      </div>
      <nav className="flex gap-10">
        <a href="#">Home</a>
        <a href="#">Amader Kotha</a>
        <a href="#">Doctors</a>
      </nav>
    </header>
  );
}
