import { capitalize } from 'lodash';
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Button2 } from './Button2';
import FormInput from './FormInput';
import { ContactForm } from './ContactForm';
const openPosInputs = [
  {
    label: 'Name',
    name: 'name',
    type: 'text',
    required: true,
  },
  {
    label: 'email',
    name: 'email',
    type: 'email',
    required: true,
  },
  {
    label: 'Phone',
    name: 'phone',
    type: 'text',
    required: false,
  },
];
export const OpenPosForm = () => {
  const [state, handleSubmit] = useForm('mbjekejv');

  if (state.succeeded) {
    // navigate('/submitted');
    console.log('Submitted Open positions.');
    alert('Open positions form submitted.');
  }
  return (
    <ContactForm state={state} handleSubmit={handleSubmit}>
      <div className="form__group field font-heading">
        <select className="form__field" name="gender" id="gender">
          <option value="mr">Mr.</option>
          <option value="mrs">Mrs.</option>
        </select>
        <label className="form__label font-heading" htmlFor="gender">
          gender (Mr/Mrs)
        </label>
        <ValidationError prefix="Gender" field="gender" errors={state.errors} />
      </div>
      {openPosInputs.map(({ name, type, label, required }, idx) => (
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
      <div
        className="form__group field font-heading border-b-2 border-[#9b9b9b] "
        style={{
          paddingTop: '30px',
          marginTop: '20px',
        }}
      >
        <input
          name="cv"
          id="cv"
          type="file"
          className="hidden"
          accept=".xlsx,.xls,.doc, .docx,.ppt, .pptx,.txt,.pdf"
        />
        <label
          className="form__label font-heading bg-rsed-500 w-full cursor-pointer"
          htmlFor="cv"
        >
          CV*
        </label>
        <ValidationError prefix="CV" field="cv" errors={state.errors} />
      </div>
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
      </div>
    </ContactForm>
  );
};
