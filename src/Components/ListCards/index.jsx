/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

import './ListCards.css'

import { Link } from 'react-router-dom'

const ListCards = () =>
    <div className="ListCards container centralized">
        <ul >
            <a href="https://medium.com/@ceobrenofreitas">BLOG PESSOAL</a>
            <Link to="*">PROJETOS</Link>
            <Link to="*">INDICAÇÕES DO MÊS</Link>
            <Link to="*">ME PAGUE UM CAFÉ</Link>
        </ul>
    </div>


export default ListCards