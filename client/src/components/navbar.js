import React from 'react';
import {
Nav,
NavLink,
Bars,
NavMenu,
} from './NavbarElements';

const Navbar = () => {
return (
	<>
	<Nav className='justify-align-center'>
		<Bars />

		<NavMenu>
		<NavLink to='/' activeStyle>
			Home
		</NavLink>
		<NavLink to='/Profile' activeStyle>
			Profile
		</NavLink>
		<NavLink to='/Register' activeStyle>
			Login
		</NavLink>
		<NavLink to='/About' activeStyle>
			About Us
		</NavLink>
		
		{/* Second Nav */}
		{/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
		</NavMenu>
		
	</Nav>
	</>
);
};

export default Navbar;