import React from 'react'
import { Link } from 'react-router-dom'
import {HashLink} from "react-router-hash-link"

const Header = () => {
  return (<nav>
    <h1>TechyStar</h1>
    <main>
        <HashLink to={"/#home"}>Home</HashLink>
        <Link to={"/contact"}>Contact</Link>
        <HashLink to={"/#about"}>About</HashLink>
        <HashLink to={"/#brands"}>Brands</HashLink>
        <Link to={"/services"}>Services</Link>
    </main></nav>
  )
}

export default Header

// Note---> <Link/> is used to make the pages such a way that they don't get loaded everytime the pages are switched

//          <HashLink/> is used to make the pages in such a way that they use the property of <Link/> component that the pages don't get loaded everytime they are switched and furthermore the <HashLink/> allows us to make the pages use the properties of anchor tag that it take to the required section such as #about and #brands in this case