
import React, {Component} from 'react'
import {connect} from 'react-redux'
import _ from 'lodash'




class Listdata extends Component {

    constructor( props ){
        super(props);
        this.state = { 
            details: []
        }
    }
    componentWillReceiveProps(props){
        const {details} = this.state;
        this.setState({details:props.data})
    }


    

   
    render() {
        const {details} = this.state;
        return (
            <ul>
                {details != undefined && _.size(details.Reggae) > 0 && _.map(details.Reggae,function(listValue,index){
                    return <li key = {index+1}>{listValue}</li>;
                })}
            </ul>
        );
    }
}




export default Listdata