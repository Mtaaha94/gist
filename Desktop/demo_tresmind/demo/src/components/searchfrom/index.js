import React, { Component } from 'react';
import {connect} from 'react-redux';
import Octicon from 'react-octicon'
import {fetchAllGists} from '../../redux/actions/allgist';

import './styles.css';

class SearchFormInner extends Component {
    constructor(props) {
        super(props);
        this.inputRef = React.createRef();
    }
    handleSubmit(evt) {
        evt.preventDefault();
        let username = this.inputRef.current.value.trim();

        //if user has not typed anything
        if(username.length === 0) {
            return;
        }
        //dispatch
        this.props.fetchAllGists(username);
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit.bind(this)} className="searchform" style={{padding:'20px'}}>
                <div className='octicon'>
                 <Octicon  name="mark-github" mega/>
                 </div>
                <input  
                  className="form-control ml-5 col-md-8" 
                  type="text" 
                  placeholder="Search for a user."
                  ref={this.inputRef}/>
            </form>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchAllGists: (username) => {
            dispatch(fetchAllGists(username));
        } 
    }
}

let SearchForm = connect(null, mapDispatchToProps)(SearchFormInner);
export default SearchForm;