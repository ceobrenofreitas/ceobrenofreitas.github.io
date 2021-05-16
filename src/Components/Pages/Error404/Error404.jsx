import React from 'react'

import './Error404.css'

import { Link } from 'react-router-dom'

const Error404 = () =>
    <div className="cenetralized container error404">
        <h1 > Error 404 </h1>
        <h2>Essa página não existe ou está em desenvolvimento!</h2>
        <Link to="/"><button className="Erro404-link">Me leva de volta</button></Link>
    </div>

export default Error404