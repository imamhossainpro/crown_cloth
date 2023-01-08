import { Fragment, useContext } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { ReactComponent as CrownLogo } from '../../../assets/crown.svg'
import { UserContext } from '../../../Contexts/User.context';
import { CartContext } from '../../../Contexts/Cart.context';
import { signOutUser } from '../../../Utils/Firebase/Firebase.utils';
import CartDropdown from '../../Cart-dropdown/Cart-dropdown.component';
import CartIcon from '../../Cart-icon/Cart-icon.component';
import './navigation.styles.scss'
const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <Fragment>
      <div className='navigation'>
        <Link className='logo-container' to='/'>
          <CrownLogo className='logo' />
        </Link>
        <div className='nav-links-container'>
          <Link className='nav-link' to='/shop'>
            SHOP
          </Link>

          {currentUser ? (
            <span className='nav-link' onClick={signOutUser}>
              SIGN OUT
            </span>
          ) : (
            <Link className='nav-link' to='/auth'>
              SIGN IN
            </Link>
          )}
          <CartIcon />
        </div>
        {isCartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;