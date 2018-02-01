//React imports
import React,{Component} from 'react';
//Bootstrap imports
class Header extends Component{
    render(){
        return(
            <nav>
                <div className="nav-wrapper">
                    <a className="left brand-logo">Voting app</a>
                    <ul className="right">
                        <li>
                            <a onClick={this.props.regModal}>Login</a>
                        </li>
                    </ul>
                    <ul className="right">
                        <li>
                            <a onClick={this.props.createPoll}>CreatePoll</a>
                        </li>
                    </ul>
                </div>
             </nav>
        )
    }
}
export default Header;