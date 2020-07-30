import React, {Component} from 'react';

function Footer(props){
    return(
        <div className="">
            <div className="footer">
                <div className="row justify-content-center">
                        <div className="col-5">
                        <h3>Links</h3>
                        <ul className="list-unstyled">
                            <li><a href="#" ></a>Home</li>
                            <li><a href="#" ></a>About</li>
                            <li><a href="#" ></a>Contact</li>
                        </ul>
                        </div>
                        <div className="col-5">
                                <h5>Our Address</h5>
                                <address>
                            121, Clear Water Bay Road<br />
                            Clear Water Bay, Kowloon<br />
                            HONG KONG<br />
                            +852 1234 5678<br />
                            +852 8765 4321<br />
                             <a href="mailto:confusion@food.net">
                                confusion@food.net</a>
                            </address>
                        </div>
                </div>
            </div>
        </div>
    )
}
export default Footer;