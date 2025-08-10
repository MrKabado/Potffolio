import React from 'react'
import { Link } from 'react-router-dom'

function Button({to, className, text, divclassName, icon, onClick}) {
  return (
    <div className={divclassName}>
      <Link to={to} className={className} onClick={onClick}>
        {text}
        {icon}
      </Link>
    </div>
  )
}

export default Button