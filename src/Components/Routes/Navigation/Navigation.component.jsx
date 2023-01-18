import { Fragment, useContext } from 'react'
import { Outlet } from 'react-router-dom'
import { ReactComponent as CrownLogo } from '../../../assets/crown.svg'
import { UserContext } from '../../../Contexts/User.context';
import { CartContext } from '../../../Contexts/Cart.context';
import { signOutUser } from '../../../Utils/Firebase/Firebase.utils';
import CartDropdown from '../../Cart-dropdown/Cart-dropdown.component';
import CartIcon from '../../Cart-icon/Cart-icon.component';
import {NavigationContainer, LogoContainer, NavLinks, NavLink} from './Navigation.styles.jsx'
const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to='/'>
          <CrownLogo className='logo' />
        </LogoContainer>
        <NavLinks>
          <NavLink to='/shop'>
            SHOP
          </NavLink>

          {currentUser ? (
            <NavLink as='span' onClick={signOutUser}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to='/auth'>
              SIGN IN
            </NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;