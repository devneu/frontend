import React from 'react';
import './ComingSoon.scss';
import {Input, Button, Typography} from 'antd';
import ReactPlayer from 'react-player';
import telegram from './images/telegram.png';
import twitter from './images/twitter.png';




const {Title} = Typography;
const ComingSoon = () => {
    return (
        <div className="coming-soon-page" >
            <ReactPlayer className="bg-video" url='https://www.youtube.com/watch?v=sRE5iQCdRvE' loop muted
                         playing={true}/>
                <header className="coming-soon-header">
                    <div className="subscribe-form">
                        <Title level={1}>Our Website is Coming Soon</Title>
                        <p>We're working hard to finish the development of the site.Sign up
                            below to receive updates and to be noticed when we launch!</p>
                        <div className="row-input-mail">
                            <Input type="large" placeholder="Enter Email address..."></Input>
                            <Button type="primary">NOTIFY ME!</Button>
                        </div>
                    </div>
                    <div className="social-links">
                        <div className="social-link"><a href="#"><img
                            src={twitter}
                            alt="twitter"/></a></div>

                        <div className="social-link"><a href="#"><img
                            src={telegram}
                            alt="telegram"/></a></div>
                    </div>
                </header>
        </div>
    );
}

export default ComingSoon;
