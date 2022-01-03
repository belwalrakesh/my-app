import React from 'react'

export default function Footer(props) {
    return (
        <nav className={`navbar text-center bottom navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
       
       
        <h5 style={{ color: props.mode === 'dark' ? 'white' : 'black' }}> @belwalrakesh </h5>
      </nav>
    )
}
