import React, { Component } from 'react'
import Modal from '../Modal/Modal'
import Aux from './HigherOrder'

const withErrorHandler = (WrappedComponent, axios) => {

    return class extends Component {
        state = {
            error:null
        }

        componentWillMount(){
           this.reqInterceptor = axios.interceptors.request.use(req => {
                this.setState({error:null})
                return req
            })
           this.resInterceptor = axios.interceptors.response.use(res => res, error => {
                this.setState({error:error})
            })
        }

        componentWillUnmount(){
            axios.interceptors.request.eject(this.reqInterceptor)
            axios.interceptors.response.eject(this.resInterceptor)
        }

        handleError = () => {
            this.setState({error: null})
        }
        render(){
            return (
                <Aux>
                <Modal orderSummary = {this.state.error} clicked = {this.handleError}>
                    {this.state.error ? this.state.error.message:null}
                </Modal>
                    <WrappedComponent {...this.props}/>
            </Aux>
                )

        }
    }
}

export default withErrorHandler;