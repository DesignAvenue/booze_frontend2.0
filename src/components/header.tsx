
import {Component} from "react";
import SideBarComponent from "./sidebar";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {openSideBar} from "../state/actions/side_bar_action";

class HeaderComponent extends Component<any, any>{
    state = {
    };
    render() {
        return (
            <div>
                <div className="header-area" id="headerArea">
                    <div className="container">
                        <div
                            className="header-content header-style-five position-relative d-flex align-items-center justify-content-between">
                            <div className="logo-wrapper">
                                <Link to="/">
                                    <img src="img/core-img/logo.png" alt=""/>
                                </Link>
                            </div>
                            <div onClick={()=>{this.props.openSideBar()}} className="navbar--toggler" id="affanNavbarToggler"><span
                                className="d-block"></span><span className="d-block"></span><span
                                className="d-block"></span>
                            </div>
                        </div>

                    </div>
                </div>
                <SideBarComponent/>
            </div>
        );
    }
}

const mapStateToProps =(state:any)=>{

}

const mapDispatchToProps = (dispatch:any )=>{
    return{
        openSideBar: ()=> dispatch(openSideBar())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(HeaderComponent);