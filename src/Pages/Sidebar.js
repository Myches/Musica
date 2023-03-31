import React from "react"
import {BsPerson} from 'react-icons/bs'
import {RiPlayListLine} from 'react-icons/ri'
import {AiOutlineHome, AiOutlinePlayCircle ,AiOutlineMenu} from 'react-icons/ai'
import {MdOutlineAlbum} from 'react-icons/md'
import { Link } from "react-router-dom"
import { IconContext } from 'react-icons/lib'
import { useState } from 'react'


function Sidebar() {

  const [showIcons, setShowIcons] = useState(false);



    return (
      <div className="w-[10%] h-[90vh] sm:px-4 flex-col flex items-center justify-center border-none border rounded-tl-3xl border rounded-bl-3xl text-white">
        <button
          className="md:hidden absolute top-5 text-30 text-cyan-300"
          onClick={() => setShowIcons(!showIcons)}
        >
          <AiOutlineMenu />
        </button>
  
        <IconContext.Provider
          value={{ size: '20px', color: 'cyan', className: showIcons ? '' : 'hidden md:block' }}
        >
          <p className="pb-8">
            <Link to="/">
              <AiOutlineHome />
            </Link>
          </p>
          <p className="pb-8">
            <Link to="/Library">
              <RiPlayListLine />
            </Link>
          </p>
          <p className="pb-8">
            <Link to="/Album">
              <MdOutlineAlbum />
            </Link>
          </p>
        </IconContext.Provider>
  
        <button
          className="block sm:hidden"
          onClick={() => setShowIcons(!showIcons)}
        >
        </button>
      </div>
    );}
  

export default Sidebar;