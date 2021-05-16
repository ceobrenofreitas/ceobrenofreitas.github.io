import React from 'react'

import ListCards from '../../ListCards/index.jsx'

import './Home.css'

const HomePage = () =>
    <div className="container centralized header">
        <img className="profile-pic" src="https://scontent.fjpa12-1.fna.fbcdn.net/v/t1.6435-9/183410820_764045377812380_9155120890782055473_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=POZwwDtMT5gAX9CIe_3&_nc_ht=scontent.fjpa12-1.fna&oh=22aca6eba22a98dffa48bfb85bbd9f6e&oe=60C57F49" alt="Foto de perfil" />
        <h1>Breno Freitas</h1>
        <p>#dev #ideias #projetos #ndprafaze</p>

        <ListCards />
    </div>

export default HomePage