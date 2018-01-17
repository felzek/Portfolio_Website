import React, {Component} from 'react';
import './introduction.css';
import Avatar from 'material-ui/Avatar';


class IntroductionComponent extends Component {
    render() {
        return (
          <div className="introduction">
            <Avatar src="avatar.jpg" size={150}/>
            <p className="introduction-text">
              Loves Data. Truth-Teller. Find Clarity Among Chaos.
            </p>
          </div>
        );
    }
}

export default IntroductionComponent;
