import React from 'react'
import { Link } from 'react-router-dom'
import { Route } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import Register from './Register'
import Login from './Login'
import Home from './Home'
import Account from './Account'
import TaskContainer from './TaskContainer'

const NavBar = (props) => {
    const token = localStorage.getItem('token')

    return(
        <div >
            {token ? (
                     <div className="m-6 pb-9  ">
                     <nav className="navbar   bg-dark navbar-dark">
                         <div className="container-fluid">
                             <ul className="navbar-nav">
                                 <li className='nav-item'>
                                      <Link to="/account" href="#" className='nav-link  text-white'>Account</Link>
                                 </li>
                                 <li>
                                      <Link to="/task" href="#" className='nav-link  text-white'>Tasks</Link> 
                                 </li>
                                 <li>
                                     <Link to="/logout" href="#" className='nav-link  text-white' 
                                     onClick={() => {
                                     localStorage.removeItem('token')
                                     alert('succefully loggedout')
                                     props.history.push("/register") }}> Logout</Link>
                                 </li>
                             </ul>
                         </div>
                     </nav>
                 </div>
                 ) : 
                    (
                    <div className="m-6 pb-9  "> 
                    <nav  className="navbar   bg-dark navbar-dark">
                        <div  className="container-fluid">
                            <ul className="navbar-nav">
                                <li className='nav-item' > 
                                        <Link to="/register" href="#" className='nav-link  text-white'> Register  </Link>                                            
                                </li>
                                <li className='nav-item' >
                                         <Link to="/login"  href="#" className='nav-link text-white'> Login </Link>
                                </li>
                                <li className='nav-item' >
                                         <Link to="/"  href="#" className='nav-link text-white'> Home </Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>  
            )}
         

            <Route  path="/register"  component={Register} exact={true} />
            <Route path="/login" render= {(props) => {
               return <Login {...props} />
            }} />
            <Route path="/" component={Home} exact={true} />
            <Route path="/account" component={Account} exact={true} />
            <Route path="/task" component={TaskContainer} exact={true} />
        </div>
    )
}

export default withRouter(NavBar)