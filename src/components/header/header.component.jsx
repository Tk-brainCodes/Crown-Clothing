import React, { useContext } from "react";
import { connect } from "react-redux";
import {
  HeaderStyledContainer,
  LogoContainer,
  OptionDiv,
  OptionLink,
  OptionsContainer,
} from "./header.styles";
import { signOutStart } from "../../redux/user/user.actions";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import CartIcon from "../cart-icons/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { CartContext } from "../../provider/cart.provider";

const Header = ({ currentUser, signOutUser }) => {
  const { hidden } = useContext(CartContext);
  return (
    <HeaderStyledContainer>
      <LogoContainer to="/">Apparel.</LogoContainer>
      <OptionsContainer>
        <OptionLink to="/shop">SHOP</OptionLink>
        <OptionLink to="/contact">CONTACT</OptionLink>
        {currentUser ? (
          <OptionDiv onClick={signOutUser}>SIGN OUT</OptionDiv>
        ) : (
          <OptionLink to="/signin">SIGN IN</OptionLink>
        )}
      </OptionsContainer>
      <CartIcon />
      {hidden ? null : <CartDropdown />}
    </HeaderStyledContainer>
  );
};
const mapStateToProps = ({ user: { currentUser } }) => ({
  currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  signOutUser: () => dispatch(signOutStart()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Header);
