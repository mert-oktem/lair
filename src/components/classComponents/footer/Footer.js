import React, {Component} from 'react'
import Footer1 from "./Footer1";
import Footer2 from "./Footer2";

class Footer extends Component{
    render(){
        return (
            <footer className="site-footer">
                <Footer1 />
                <Footer2 />
            </footer>
        )
    }

}
export default Footer