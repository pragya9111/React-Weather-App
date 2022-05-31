import React from 'react';
import './navbar.css';
import RefreshIcon from '@material-ui/icons/Refresh';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import PushPinIcon from '@mui/icons-material/PushPin';
import LightModeIcon from '@mui/icons-material/LightMode';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import logo from '../Navbar/logo.png'

const Navbar = (props) => {
console.log(props);
const cityname = (elem) =>{
  props.city(elem.target.value)
}

  return <div>
      <div className="nav">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="rht">
          <RefreshIcon className='rhtelem'/>
          <StarBorderIcon className='rhtelem'/>
          <PushPinIcon className='rhtelem'/>
          <LightModeIcon className='rhtelem'/>
          <MenuIcon className='rhtelem'/>
          <SearchIcon className='rhtelem search'/>
          <input onChange={cityname} type="text" name='city' className='inputval' placeholder='Enter city' />
          <input onClick={props.callApi} type="submit"/>
        </div>
      </div>
  </div>;
};

export default Navbar;

