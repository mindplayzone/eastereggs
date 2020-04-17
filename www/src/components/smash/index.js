import React from "react";
import {animated, useSpring} from "react-spring";
import "./thestyle.css";

export function Smash({children, showCrack}) {
    const props = [
        useSpring({
            position: "absolute",
            transform: "rotate( 180deg )",
            top: 20,
            from: {top: -300},
            onRest: () => {
                showCrack(true);
            }
        }),
        useSpring({
            position: "absolute",
            top: 200,
            from: {top: 420}
        })
    ];
    return children.map((child, key) => {
        return (
            <animated.div style={props[key]} key={key}>
                {child}
            </animated.div>
        );
    });
}
