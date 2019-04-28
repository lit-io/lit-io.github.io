import React, {Component} from 'react';
import AdSpace from './AdSpace';
import Dashboard from './Dashboard';

class Dash extends Component {
    render() {
        
        return (
            <div>
            <Dashboard />
            <AdSpace />
            </div>
            )
    }
    
}

export default Dash