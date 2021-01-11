import React, { Component } from 'react'
import ReactDOM from "react-dom"


class Example extends React.Component {
    constructor (props) {
      super(props)
      this.state = { data: 'test' }
    }
  
    onUpdate (data) { this.setState({ data }) }
  
    render () {
      return (
        <div>
          <C1 onUpdate={this.onUpdate.bind(this)}/>
          <C2 data={this.state.data}/>
        </div>
      )
    }
  }
  
  class C1 extends React.Component {
      constructor(props) {
        super(props);
        this.onUpdate = this.props.onUpdate;
      }
  
      render () {
        return (
          <div>
            <input type='text' ref='myInput'/>
            <input type='button' onClick={this.update.bind(this)} value='Update C2'/>
          </div>
        )
      }
  
      update () {
        //this.props.onUpdate(this.refs.myInput.getDOMNode().value);
        this.onUpdate(this.refs.myInput.getDOMNode().value);
      }
  }
  
  class C2 extends React.Component {
      constructor(props) {
        super(props);
        this.data = this.props.data;
      }
  
      render () {
        return <div>{this.props.data}</div>
        //return <div>{this.data}</div>
      }
  }

export default Example