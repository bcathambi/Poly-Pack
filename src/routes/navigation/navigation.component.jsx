import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import {ReactComponent as CrownLogo} from "../../asserts/crown.svg";
import "./navigation.styles.scss";

const Navigation = () => {
    return(
      <Fragment>
        <div className="navigation">
            <Link className="logo-container" to='/'>
                <CrownLogo className="logo"/>
            </Link>
        
            <div className="nav-links-container">
                <Link className="nav-shop" to='/shop'>
                    <h1>Shop</h1>
                </Link>
            </div>   
        </div>
      <Outlet />
    </Fragment>
    );
  };

  export default Navigation;