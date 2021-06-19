import React, { Component } from 'react';
import '../CSS/Introtxt.css'
import TypeIt from "typeit-react";

export class Introtxt extends Component {
    render() {
        return (
            <div id='intro-container'>
                <div id='typeit-container'>
                <TypeIt id='intro-txt'
                    getBeforeInit={instance => {
                        instance
                        .type(`Hi, I'm Jaish,`)
                        .pause(300)
                        .break()
                        .type(`I'm a fu`)
                        .pause(500)
                        .delete(2)
                        .pause(300)
                        .type(`Full Stack Software Developer.`);

                        return instance;
                    }}
                />
                </div>
            </div>
        )
    }
}

export default Introtxt
