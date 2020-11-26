import React, { Component } from 'react';
import Aux from '../hoc/HigherOrder';
import Backdrop from '../../components/Modal/Backdrop';

class Modal extends Component{

    shouldComponentUpdate(nextProps){
        return nextProps.orderSummary !== this.props.orderSummary || nextProps.children !== this.props.children
    } 

    render(){
        return(
    <Aux>
    <Backdrop 
    show = {this.props.orderSummary}
    clicked = {this.props.clicked}></Backdrop>
    <div className = 'Modal'
    style = {{
        transform: this.props.orderSummary? 'translateY(-20vh)': 'translateY(-100vh)',
        opacity: this.props.orderSummary? '1': '0'
    }}>
    {this.props.children}
    </div>
    </Aux>
        )
    }
}
export default Modal;