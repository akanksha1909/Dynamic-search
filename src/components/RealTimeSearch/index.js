import React, {Component} from 'react'
import {connect} from 'react-redux'
import _ from 'lodash'

import './css/style.css'

import Listdata from './Listdata'
import { getlist } from '../../redux/actions/search'


class Search extends Component {

    constructor( props ){
        super(props);
        this.state = { 
            query : '',
            data: [],
            queryflag : false,
            filtereddata : []
        }
    }
    componentWillMount(){
        const {dispatch} = this.props;
        dispatch(getlist())
    }
    componentWillReceiveProps(props){
        const {dispatch} = this.props;
        this.setState({data : props.search.data})
    }
    onInputChange = (value) =>{
        const {data} = this.state;
        var queryResult=[];
        _.map(data.Reggae,function(information){
            if(information.toLowerCase().indexOf(value)!=-1)
            queryResult.push(information);
        });
        this.setState({
            query:value,
            queryflag : true,
            filtereddata: queryResult
        })
    }
  

    render() {
        const {data,filtereddata,queryflag} = this.state;
        const Reggae = []
        let example = {Reggae : filtereddata}
        return (
            <div className="container background-img">
               
                <div className="row body-class">
                    <h1>Hello World!</h1>
                    <div className="col-lg-12">
                        <p>React Search!<br/>Here is a list of Reggae artists rendered from a JSON object</p>
                        <h1>Search</h1>
                        <input placeholder="Search the list with React" className="input-box" onChange={(e) => this.onInputChange( e.target.value) }></input>
                    </div>
                </div>
                {queryflag == true ? <Listdata data={example}/> : <Listdata data={data}/> }
            </div>
        );
    }
}



const mapStateToProps = function( state ){
    return {search : state.search };
}

export default connect(mapStateToProps)( Search )