import { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route, NavLink, Navigate } from "react-router-dom";
import logo from '../logo.svg'
import {routes} from './routes';


export const Navigation = () => {
  return( 
    <Suspense fallback={<span>Loading...</span>}>  
    <BrowserRouter>
        <div className="main-layout">
            <nav>
                <img src={logo} alt="logo" />
                <ul>
                    {
                        routes.map(({path,name})=>(
                            <li key={path}>
                                <NavLink 
                                    to={path}
                                    className={({isActive})=> isActive ? 'nav-active' : ''}>
                                    {name}
                                </NavLink>
                            </li>
                        ))
                    }
                    
                </ul>
            </nav>
            <Routes>
                {
                    routes.map(({path,Component})=>(
                        <Route
                            key={path} 
                            path={path}
                            element={<Component/>} />
                    ))
                }
                <Route path="/*" element={<Navigate to={routes[0].to} replace/>} />
            </Routes>
        </div>
    </BrowserRouter>
    </Suspense>
  )
};
