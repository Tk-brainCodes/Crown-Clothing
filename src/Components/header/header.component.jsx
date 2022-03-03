import React from 'react';
import {connect} from 'react-redux';
import { auth } from '../../firebase/firebase.utils';
import { HeaderStyledContainer, LogoContainer, OptionDiv,OptionLink,OptionsContainer } from './header.styles';
import {ReactComponent as Logo} from '../../assets/crown.svg'
import CartIcon from '../cart-icons/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import './header.styles.scss';


const Header = ({currentUser, hidden}) => {
    return (
        <HeaderStyledContainer>
            <LogoContainer to="/">
              <Logo className="logo"/>
            </LogoContainer>
            <OptionsContainer>
                <OptionLink to="/shop">SHOP</OptionLink>
                 <OptionLink to="/contact">CONTACT</OptionLink>
                 {
                     currentUser === true ?
                     (
                     <OptionDiv onClick={() => auth.signOut()}>
                        SIGN OUT
                     </OptionDiv>
                     ) :
                     <OptionLink to="/signin">SIGN IN</OptionLink>
                 }
                 <CartIcon/>            
                 </OptionsContainer> 
                  {hidden ? null : <CartDropdown />}
        </HeaderStyledContainer>
    );
}
const mapStateToProps = ({user: {currentUser}, cart: {hidden}}) => ({
  currentUser,
  hidden
});
export default connect(mapStateToProps)(Header);
