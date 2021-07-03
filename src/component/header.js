import React  from "react";
import { Link } from 'react-router-dom'

const Header = () => {
  return(
    <div class="ui secondary pointing menu">
      <Link to='/' className='item'>
      Streamy
      </Link>
  
  <div className =' center menu'>
  <Link to='/' class="item">
    All Stream
  </Link>
  </div>
  <div class="right menu">
    <a class="ui item">
      Login
    </a>
  </div>
</div>
  )
}

export default Header