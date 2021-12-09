import React, { Component } from 'react'
import { PropTypes } from 'prop-types'

class Search extends Component {
  state = {
    text: '',
  }

  static PropTypes = {
    searchUsers: PropTypes.func.isRequired,
  }

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  onSubmit = (event) => {
    event.preventDefault()
    this.props.searchUsers(this.state.text)
    this.setState({ text: '' })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit} className="form">
          <input
            type="text"
            name="text" //in case of multiple input, name is what [event.target.name] will get.
            placeholder="Search Users..."
            value={this.state.text}
            onChange={this.onChange}
          />
          <input
            type="submit"
            value="Search"
            className="btn btn-dark btn-block"
          />
        </form>
      </div>
    )
  }
}

export default Search
