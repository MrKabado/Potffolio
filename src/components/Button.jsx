import React from 'react'
import { Link } from 'react-router-dom'

function Button({to, className, text, divclassName}) {
  return (
    <div className={divclassName}>
      <Link to={to} className={className}>{text}</Link>
    </div>
  )
}

export default Button
