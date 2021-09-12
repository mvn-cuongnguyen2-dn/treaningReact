import React, { useState, useEffect } from 'react';
import logo from './../../assets/image/logo.svg';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { deleteAccount } from '../../stores/account'

function Header() {
  const [list, setList] = useState([]);
  const [show, setShow] = useState(false);

  const favourite = useSelector((state) => state.favourite.value)
  const account = useSelector((state) => state.account.accounts)
  const names = useSelector((state) => state.favourite.names)
  const dispatch = useDispatch()


  useEffect(() => {
    console.log(names);
    const list = names.map((item, index) => {
      return (
        <div className="item" key={index}>
          <span className="name-favourite">
            { item }
          </span>
        </div>
      )
    })
    setList(list)
  }, [names])
  
  return (
    <header className="page-header bg-dark">
      <div className="container">
        <NavLink to="/" className="logo"><img src={logo}  alt="logo" /></NavLink>
        <ul className="navbar navbar-dark m-0">
          <li className="nav-item">
            <NavLink exact activeClassName="active" className="nav-link" to="/">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink exact activeClassName="active" className="nav-link" to="/About">About US</NavLink>
          </li>
        </ul>
        <ul className="header-account m-0">
          <li className={account.user ? 'hidden' : 'show'}><NavLink className="nav-link" to="/Login">Login</NavLink></li>
          <li className={account.user ? 'show wrap-account' : 'hidden'}>
            <span className="name-account">Hi!: {account.user}</span>
            <a className="nav-link logout" onClick={() => dispatch(deleteAccount())}>Logout</a>
          </li>
          <li>
            <a className="nav-link wrap-fas">
              <div 
                className="wrap-favourite"
                onClick={()=>setShow(!show)}
              >
                <span className={favourite? 'number' : 'hidden'}>{favourite}</span>
                <i className="fa fa-heart"></i>
              </div>
              <div className={show ? 'show list-favourite' : 'hidden' }>
                { list }
              </div>
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
