import React from 'react';
import Logo from '../assets/spacexlogo.png';
import { Link } from 'react-router-dom';

 const Home = () => {
   return(
    <>
    <header className="v-header container">
    <div className="fullscreen-video-wrap">
      <video src="https://res.cloudinary.com/dalnnaod7/video/upload/v1578785064/CrewDragonAnimation_h8qxkj.mp4" autoplay="true" loop="" muted>
    </video>
    </div>
    <div className="header-overlay"></div>
    <div className="header-content text-md-center">
      <img src={Logo} width="200"/>
      <h1>Bienvenido</h1>
      <p>Desarrollé este sitio web para que puedas tener  la información acerca de las misiones y lanzamientos de SpaceX</p>
      <Link to="/misiones">
        <button className="btn">Misiones</button>
      </Link>
      <Link to="/lanzamientos">
        <button className="btn2">Lanzamientos</button>
      </Link>
      <Link to="/cohetes">
        <button className="btn">Cohetes</button>
      </Link>
      
    </div>
  </header>

  
    </>
   )
 }

  export default Home