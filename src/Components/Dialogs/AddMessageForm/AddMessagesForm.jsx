import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator } from '../../../utils/validators/validators';
import { Textarea } from '../../common/Preloader/FormControl/FormControls';

const AddMessageForm = (props) => {

  const maxLength50 = maxLengthCreator(50);
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component={Textarea} name='newMessageBody' validate={[required, maxLength50]}
          placeholder='enter new message' />

      </div>
      <div>
        <button>Send</button>
      </div>
    </form>
  )
}

export default reduxForm({ form: 'dialog-Add-Message-Form' })(AddMessageForm)