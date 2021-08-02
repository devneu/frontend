import React from "react";
import "./ComingSoon.scss";
import {Input, Button, Typography} from 'antd';
import ReactPlayer from "react-player";
const {Title} = Typography;


const ComingSoon = () => {
    return (
        <div>
            <ReactPlayer className="bg-video" url='https://www.youtube.com/watch?v=sRE5iQCdRvE' loop muted
                         playing={true}/>
            <div className="coming-soon-page">
                <header className="coming-soon-header">
                    <div className="form-block-coming-soon">
                        <Title level={1}>Our Website is Coming Soon</Title>
                        <p>We're working hard to finish the development of the site.Sign up
                            below to receive updates and to be noticed when we launch!</p>
                        <div className="form">
                            <Input type="large" placeholder="Enter Email address..."></Input>
                            <Button type="primary">NOTIFY ME!</Button>
                        </div>
                    </div>
                    <div className="social-links">
                        <div className="social"><a href="#"><img
                            src="https://image.flaticon.com/icons/png/128/1384/1384017.png"
                            alt="twiter"/></a></div>
                        <div className="social"><a href="#"><img
                            src="https://image.flaticon.com/icons/png/128/2111/2111708.png"
                            alt="tel"/></a></div>
                    </div>
                </header>
            </div>
          </div>
    );
}

export default ComingSoon;
