import React, { Component } from 'react';

class StarForm extends Component {
  render() {
    return (
        <form onSubmit={ this.props.handleSubmit }>
            <input onChange={ this.props.handleChangeFor('name') } value={ this.props.newStar.name }/>
            <input onChange={ this.props.handleChangeFor('diameter') } value={ this.props.newStar.diameter }/>
            <input type='submit' value='Submit Star'/>
        </form>
    );
  }
}

export default StarForm;
