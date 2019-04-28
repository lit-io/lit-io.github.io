import React, { Component } from 'react';
import chart from './chart.png';
import './style.css';
import daily from './daily.png'
import badges from './badges.png'
const imageURL = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAM1BMVEXMzMzPz8+vr6/Ly8vAwMCRkZHDw8PGxsaWlpaenp6Tk5PFxcW2trahoaG+vr66urqoqKhkZDrBAAAFEklEQVR4nO2d23akOAxFLdn4Ar79/9e2ZFNAJZNK90Nq6Jmzs0IokImOZcvmRWUMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgRyHh5emLdvTZ+Nt2b6f1NRZn9XTjuPZtXLWcluJeNCPX45qy/Wjc0hqb/VmX/4wWl6RO6XlaYlrScI/1NL6QuMU1prjwB+MmsmPMP+/3b0NpzSG0pQRDbel+62uWUeYkrCGv5csBR33tPtSkui7GoawuuDWFd2p4jR9RII7e2KSO2SJBtH3ZSGNzeLpPrkNxSBprqtIfF2PpJOmfebwL0xnKiycXOw2xlUKJetoi754GZhXr+TH+prHZpPnFWCLr9Wr8OvhvJzj1nHr0VOPoeSdhCWn6P/8oaQSnHMGxfrRrz8ZUxvi0Pd5HoeIdr92KtyNXaFi2GbxwKnRxtVSXfs2Sm8tR5u/FmNIwsH29lUJa1jVtMlLXsVDYhcmPdCMzszyMLK9siwzgS7siDeXCxZhi3zPxeyV8gyqMbGUu2vmRJf+M1YNKOmLmYuqxP7VL0lAUudOY5upBvNxqRTRkc5R5eMbQfI6hhniNz4sAUUsyd/8xhvdSqJlmqSJhzMMg89DPqSVOX0al7Hc+zi5ZF/hqvCuUIX2feVjbiEtbmqT7Mdo0l26fcqns0mS2nn77fAR8u+bScrdcKstE1b9N18O0r4dtX+LMuR5qqoxp5aNdnuuGPdZDM9fDqMK3lO6jMI9JNPY0c5tiiuRV2aZoLHiph2WOvcW0PT7WuT3Y9zQPYxHeSK/ybRTKrEueaFt1dLG4K2NVE6YciXyKp11aNtPPIEpIG2n43JOxj0n2d+nVlv3dyD4rjncL7XR5zSjLTJh9iXLajrdFXiRmYT1cl/3Bmso6g3Uxloxb4tkRdyBwEl9HjjFVnCtTVegiNx85PywyjFXnmVxzkhelKeVibOUVM/KNXi0Eu3n/8Cicp9a7i5/WbWMZcJfht/l58dnYeu/vthgCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAG6Oz+fxL8M59zs15twowOc+1EwMo9Bb8G48ZTxo89IRj/t2L/u2OS2b7rUyY3h3UUKKzN3PcvJn0WuaB3pUwiY6FNLDRH/ZjYuNS+c6itTakoiO6pgsVGNqF8woRGx5eXNhSfGGciYu4jtbcsZ2olp6MNRz8pa1EqHthadC8dTRxhKQWS3UkVHx8yRyIBF7KszyxBBM6PJYzlS40fb28qdTobgiEnKzUcNUu/S6+MmishkJjhzLVJi875teyjwUZhmeeSjUYsONbQ9nDGmv4+tGBcZCKXTL7d3lwMcoDWV4YHvtuVXizhzFz/0uay/UY5RKuFw3rHNqWKrBVJhMqcP4K4XEtZh3F3ilJDlCXCHxQIaR7+yJ2Tuv0R135XYyTwrFW97rQjsicodCyrGeCuVqJZ2vW7eji9IonP5+hfoPa5EfGZMSm6LzpqrXeiezyxJUrmkqjDlrvWQ3C6E+Ms2hkGgco9d+iWRLljQkT+kyPe3oMnq7QjNWOEkQWtrUVeO19m6QKM47tnGWBJi5zlrSLWsV5TkLtWdUaKj7Sd4fSCOFknwMmUe15so5nPf/HZ479vJVJB++N8HMIvTfPOzydSifHvg34FP9uxz+c/7r+gD4H/ELtGoozZ2ClhcAAAAASUVORK5CYII='

class Splash extends Component {
    render() {
        return (
                <div style={{display: 'flex', flexDirection: 'column'}}>
                    <div id='title'>
                        <h1>How it Works</h1>
                    </div>
                    <div className="home-div" id='sect1'style={{display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap'}}>
                   
                        <div className="sub-div green">
                            <p className="home-text">Track your energy usage and daily energy cost in real time </p>
                        </div>
                         <div className="sub-div">
                           <img src={daily} />
                        </div>
                        <div className="sub-div green">
                            <p className="home-text">View your progress for the current week</p>
                        </div>
                         <div className="sub-div">
                           <img src={chart} />
                        </div>
                         <div className="sub-div green">
                            <p className="home-text">Compete in monthly energy saving challenges with neighbors and friends</p>
                        </div>
                         <div className="sub-div">
                           <img src={badges} />
                        </div>
                    </div>
                    
    
                </div>
            )
    }
    
}

export default Splash 