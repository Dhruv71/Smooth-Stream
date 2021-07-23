import React from "react";
import { Field, reduxForm } from "redux-form";



class StreamForm  extends React.Component {
  
    renderInput = ({input,meta,label}) => {
    return (
      <div className={`field ${meta.error && meta.touched ? 'error' : ''}`}>
        <label>{label}</label>
        <input {...input} />
        { meta.touched && meta.error &&
        <div className="ui tiny red message">{meta.error}</div>
    }
      </div>
    ); // short hand for handle onChange and value of input
  }
  

  render() {
    return (
      <form
        className="ui form"
        onSubmit={this.props.handleSubmit(this.props.onSubmit)}
        style={{ margin: "50px" }}
      >
        <Field name="title" component={this.renderInput} label="Enter Title" />
        <Field
          name="description"
          component={this.renderInput}
          label="Enter Description"
        />
        <button className="ui button primary" type="submit">
          Submit
        </button>
      </form>
    );
  }
}

const validate = (formValues) => {
  const errors = {};

  if (!formValues.title) {
    errors.title = "You must provide title";
  }
  if (!formValues.description) {
    errors.description = "You must provide description";
  }
  return errors;
};

export default  reduxForm({
  form: "streamForm",
  validate
})(StreamForm);
