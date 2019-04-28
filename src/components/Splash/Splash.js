import React, { Component } from 'react';
import chart from './chart.png';
import './style.css';
import daily from './daily.png'
import badges from './badges.png'

class Splash extends Component {
    render() {
        return (
                <div style={{display: 'flex', flexDirection: 'column'}}>
                    <div id='title'>
                        <h1>How it Works</h1>
                    </div>
                    <div className="home-div" id='sect1'style={{display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap'}}>
                   
                        <div className="sub-div green">
                            <p className="home-text">Track your energy usage and daily energy cost in real time</p>
                        </div>
                         <div className="sub-div">
                           <img src={daily} alt="Daily" />
                        </div>
                        <div className="sub-div green">
                            <p className="home-text">View your progress for the current week</p>
                        </div>
                         <div className="sub-div">
                           <img src={chart} alt="Chart" />
                        </div>
                         <div className="sub-div green">
                            <p className="home-text">Compete in monthly energy saving challenges with neighbors and friends</p>
                        </div>
                         <div className="sub-div">
                           <img src={badges} alt="Badges" />
                        </div>
                    </div>
                    
    
                </div>
            )
    }
}

export default Splash 