import React, { Component } from "react";
import PropTypes from "prop-types";

class ContactCard extends Component {
  render() {
    return (
      <div>
        <h1><i>{this.props.name}</i></h1>
        <ol>
          <li>cellNum: {this.props.cellNum}</li>
          <li>workNum: {this.props.workNum}</li>
          <li>email: {this.props.email}</li>
        </ol>
      </div>
    );
  }
}

ContactCard.propTypes = {
  name: PropTypes.string.isRequired,
  cellNum: PropTypes.string.isRequired,
  workNum: PropTypes.string,
  email: PropTypes.string.isRequired,
};

export default ContactCard;