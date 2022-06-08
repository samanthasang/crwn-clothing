import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { ReactComponent as Logo} from "../../assets/crown.svg";
import { auth } from "../../firebase/firebase.utils"
import CartIcon from "../cart-icon/cart-icon";
import CartDropDown from "../cart-dropdown/cart-dropdown";

import "./header.scss";


const Header = ({ currentUser, hidden}) => (
    <div className="header">
        <Link className="logo-container" to='' >
            <Logo className="logo" />
        </Link>
        <div className="options">
            <Link className="option" to="/shop" >SHOP</Link>
            <Link className="option" to="/shop" >CONTACT</Link>
            { currentUser ? 
                <div className="option" onClick={() => auth.signOut()}>Sing Out</div> :
                <Link className="option" to='/signin'>Sign In</Link>
            }
            <CartIcon />
        </div>
        { hidden && <CartDropDown /> }
    </div>

)

const mapStateToProps = ({user: {currentUser}, cart: { hidden}}) => ({
    currentUser,
    hidden

})

export default connect(mapStateToProps)(Header);
