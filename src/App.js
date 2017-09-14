import React, { Component } from "react"
import logo from "./logo.svg"
import "./App.css"

const Message = props => {
  return (
    <li>
      <blockquote>{props.text}</blockquote>
      <span>{props.time.toString()}</span>
    </li>
  )
}

class App extends Component {
  state = { messages: [{ text: "First!", time: new Date() }], message: "" }

  handleChange = e => {
    this.setState({ message: e.target.value })
  }

  handleKeyDown = e => {
    if (e.keyCode === 13)
      this.setState({
        messages: this.state.messages.concat({
          text: this.state.message,
          time: new Date()
        }),
        message: ""
      })
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1>Mark's Wall</h1>
        </header>
        <div>
          <input
            type="text"
            value={this.state.message}
            placeholder="Write on my wall! (press enter to submit)"
            onChange={this.handleChange}
            onKeyDown={this.handleKeyDown}
          />
        </div>
        <ul>
          {this.state.messages
            .sort((a, b) => a.time < b.time)
            .map((message, i) => (
              <Message key={i} text={message.text} time={message.time} />
            ))}
        </ul>
      </div>
    )
  }
}

export default App
