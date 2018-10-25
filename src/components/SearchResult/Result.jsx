import React, { Component } from 'react'
import ResourceCard from "../Resources/ResourceCard"
import { connect } from "react-redux"
import { getResource } from '../../actions/UserActions'


class Result extends Component {

  renderCards = () => {
    if(this.props.users.resourcesFound)
    return  this.props.users.resourcesFound.map((r, i) => {
          return <ResourceCard resource={r} key={i} getRsc={this.goForResource}/> 
        })
  }

  render() {
    return (
      <div className="hero-body">
        <div className="container">
          <div className="columns is-multiline">
            <h1 className="title is-1">Resultados</h1>
            <div className="row columns is-multiline">
            {
              this.renderCards()
            }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

let ResultComponent = Result
ResultComponent = connect(state => ({
  users: state.users
}), {getResource})(Result)

export default ResultComponent;