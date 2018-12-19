import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/currentOverDetails.css';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

export default class CurrentOverDetails extends React.Component{
    
    render(){
        return (
            <div className="row current-over-details">
                <div className="col-sm-12">
                    This Over: {this.props.currentOverDetails}
                </div>
                <div className="col-sm-12">
                    Bowler: {this.props.currentBowler}
                </div>
            </div>
        );
    }

}

CurrentOverDetails.propTypes = {
    currentBowler : PropTypes.string,
    currentOverDetails : PropTypes.string
}