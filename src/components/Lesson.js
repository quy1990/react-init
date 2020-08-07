import React, {Component} from 'react';

class Lesson extends Component {
    render() {
        return React.createElement("li", {className: "nothing"}, 123323);
    }
}

export default Lesson;