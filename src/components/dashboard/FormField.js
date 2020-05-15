import React from "react";
import { connect } from "react-redux"
import { changeInputValue } from "../../services/clientServices"

class FormField extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      amount: "",
      nameAndSurname: "",
      number: "",
      date: "",
      courier: "",
      repaymentDate:  ""
    }
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
    this.props.changeInputValue(e.target.name, e.target.value)
  }

  render(){
    return (
      <div className="field">
        <label className="label">{ this.props.label }</label>
        <div className="control has-icons-left has-icons-right">
          <input className="input" type={ this.props.type } name={ this.props.name } defaultValue={ this.props.value } onChange={ (e) => this.handleChange(e) } />
          <span className="icon is-small is-left">
            <i className={ this.props.icon }></i>
          </span>
        </div>
      </div>
    );
  }
};

export default connect(
  null,
  { changeInputValue }
)(FormField)
