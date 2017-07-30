import React, { Component, PropTypes } from 'react'

export default class Request extends Component {
  handleToggle(request, completed) {
    const { onUpdate } = this.props
    request.completed = completed
    onUpdate(request)
  }

  render() {
    const { request, onDelete } = this.props

    return (
      <tr className={request.completed ? "table-success": ""}>
        <td>
          <input
            type="checkbox"
            onChange={(e) => this.handleToggle(request, e.target.checked)}
            checked={request.completed ? "checked": ""}
          />
        </td>
        <td>{request.order}</td>
        <td>{request.title}</td>
        <td>
          <button
            className="btn btn-danger"
            onClick={() => onDelete(request.id)}
          >Delete</button>
        </td>
      </tr>
    )
  }
}

Request.propTypes = {
  request: PropTypes.object.isRequired,
  onUpdate: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
}
