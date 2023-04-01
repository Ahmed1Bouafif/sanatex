import { useForm, ValidationError } from '@formspree/react';
import { capitalize } from 'lodash';
import React, { useEffect } from 'react';
import { navigate } from 'gatsby';
import { Button2 } from './Button2';
import { ContactForm } from './ContactForm';
const writeUsInputs = [
  {
    label: 'Vorname',
    name: 'firstName',
    type: 'text',
    required: true,
  },
  {
    label: 'Nachname',
    name: 'lastName',
    type: 'text',
    required: true,
  },
  {
    label: 'E-mail',
    name: 'email',
    type: 'email',
    required: true,
  },
  {
    label: 'Telefon',
    name: 'phone',
    type: 'text',
    required: false,
  },
  {
    label: 'Stadt',
    name: 'city',
    type: 'text',
    required: false,
  },
  {
    label: 'Straße',
    name: 'street',
    type: 'text',
    required: false,
  },
];

export const WriteUsForm = () => {
  const [state, handleSubmit] = useForm('xwkjqwjg');

  if (state.succeeded) {
    // navigate('/submitted');
    console.log('Submitted Write us.');
    alert('Contact form submitted.');
  }
  return (
    <ContactForm state={state} handleSubmit={handleSubmit}>
      {writeUsInputs.map(({ name, type, label, required }, idx) => (
        <div key={name} className="form__group field font-heading">
          <input
            id={name}
            name={name}
            className={`form__field`}
            type={type}
            placeholder={label}
            required={required}
          />
          <label htmlFor={name} className={`form__label font-heading `}>
            {required ? capitalize(`${label}*`) : capitalize(label)}
          </label>
          <ValidationError prefix={label} field={name} errors={state.errors} />
        </div>
      ))}
      <div className="form__group field font-heading">
        <textarea
          id="message"
          placeholder="Message"
          name="message"
          className="form__field text-white resize-none scrollbar-hide"
        ></textarea>
        <label className="form__label font-heading" htmlFor="message">
          Message
        </label>
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
      </div>
    </ContactForm>
  );
};
