import React from 'react'
import {Link} from 'react-router-dom'
import './footer.css'

function Footer() {
  return (
    <div className="footer">
      <div className="footer-link">
        <Link to="/privacy" className="f-link">Privacy</Link>
        <Link to="/legal-note" className="f-link">Legal note</Link>
      </div>
      <p>&copy; {new Date().getFullYear()} Kox-systems</p>{" "}
    </div>
  )
}

export default Footer
