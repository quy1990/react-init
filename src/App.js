import React, {Component} from 'react';
import './App.css';
import Course from "./components/Course";

class App extends Component {
    render() {
        const items = [
            {
                name: "abc",
                time: "12h",
                free: true
            },
            {
                name: "123 abc",
                time: "20h",
                free: true
            },
            {
                name: "456 abc",
                time: "12h",
                free: false
            }
        ];

        const elementCourses = items.map((item, index) =>
            <Course key={index} name={item.name} time={item.time} free={item.free}/>
        );


        return (
            <div className="App">
                <div className="row">
                    {elementCourses}
                </div>
            </div>
        )
            ;
    }
}

export default App;
