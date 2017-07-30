import React, { Component, PropTypes } from 'react'
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
          onDelete={this.props.deleteRequest}
        />
      )
    })

    return (
      <div className="row">
        <table className="table table-striped">
          <thead>
            <tr>
              <th width="10%">Done</th>
              <th width="20%">Priority</th>
              <th>things to do</th>
              <th width="20%"></th>
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
  onUpdateRequest: PropTypes.func.isRequired,
  onDeleteRequest: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
  return { requests: state.todos }
}

RequestList = connect(
  mapStateToProps,
  actionCreators
)(RequestList)

export default RequestList
