/** @jsx createElement */
import {createElement,render,Component} from "rax";
import LoadingUI from "./components/LoadingUI";
import * as DriverDOM from 'driver-dom';
import AnimUI from "./components/AnimUI";
import Example from "./routerConfig";
export function start(ele:HTMLElement){    
    render(
        <Example />
    ,ele,{driver:DriverDOM})
}
start(document.body)