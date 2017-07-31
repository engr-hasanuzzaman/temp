import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import * as actionCreators from '../actions/api'
import Request from '../components/Request'

class RequestList extends Component {

  render() {
    const { requests } = this.props

    let requesNodes = requests.map(request => {
      return (
        <Request
          key={request.id}
          request={request}
          onUpdate={this.props.updateRequest}
          onDelete={this.props.onDeleteRequest}
        />
      )
    })

    return (
      <div className="row">
        <table className="table table-striped">
          <thead>
            <tr>
              <th width="20%">Title</th>
              <th>Description</th>
              <th width="20%">Status</th>
              <th width="10%">Action</th>
            </tr>
          </thead>
          <tbody>
            {requesNodes}
          </tbody>
        </table>
      </div>
    )
  }
}

RequestList.propTypes = {
  updateRequest: PropTypes.func.isRequired,
  deleteRequest: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
  return { requests: state.requests }
}

RequestList = connect(
  mapStateToProps,
  actionCreators
)(RequestList)

export default RequestList
