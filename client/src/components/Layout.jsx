import react from 'react';
import Navbar from './Navbar';
// import flash from './flash';

export default function Layout ({children}){
    return (
        <>
        <Navbar/>
        <main>{children}</main>
        
      
        </>
    )
}