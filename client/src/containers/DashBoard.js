import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../actions/api'
import Request from '../components/Request'
import RequestForm from './RequestForm'
import RequestList from './RequestList'

class DashBoard extends Component {
  // fetch request
  componentDidMount() {
    this.props.fetchRequests();
  }

  handleAddRequest(request){
    this.props.addRequest(request);
  }

  render() {
    return (
      <div className="App">
        <h1>Your request list</h1>
        <RequestForm
          onAddRequest={this.handleAddRequest.bind(this)}
        />
        <RequestList
          onUpdateRequest={this.props.updateRequest}
          onDeleteRequest={this.props.deleteRequest}
        />
      </div>
    )
  }
}

DashBoard.propTypes = {
  updateRequest: PropTypes.func.isRequired,
  deleteRequest: PropTypes.func.isRequired
}

DashBoard = connect(
  null,
  actionCreators
)(DashBoard)

export default DashBoard
