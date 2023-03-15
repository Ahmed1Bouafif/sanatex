import { useForm, ValidationError } from '@formspree/react';
import { capitalize } from 'lodash';
import React, { useEffect } from 'react';
import { navigate } from 'gatsby';
import { Button2 } from './Button2';
const writeUsInputs = [
  {
    label: 'First name',
    name: 'firstName',
    type: 'text',
    required: true,
  },
  {
    label: 'Last name',
    name: 'lastName',
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
  {
    label: 'City',
    name: 'city',
    type: 'text',
    required: false,
  },
  {
    label: 'Street',
    name: 'street',
    type: 'text',
    required: false,
  },
];

export const WriteUsForm = () => {
  const [state, handleSubmit] = useForm('xwkjqwjg');

  const submitForm = (formValues) => {
    console.log(formValues);
    // reset();
  };

  if (state.succeeded) {
    navigate('/submitted');
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col bg-grseen-500  gap-4"
    >
      <div className="flex flex-col gap-2  bg-rsed-300 items-center">
        {writeUsInputs.map(({ name, ey, type, label, required }, idx) => (
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
            <ValidationError
              prefix={label}
              field={name}
              errors={state.errors}
            />
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
      </div>
      <div className="flex justify-center">
        <Button2
          disabled={state.submitting}
          variant={'secondary'}
          to={'#'}
          className="w-full"
        >
          SUBMIT
        </Button2>
        {/* <button
          disabled={state.submitting}
          type="submit"
          className="bg-white px-6 py-3 text-black font-semibold rounded-sm font-heading disabled:bg-white/50 transition-all w-full"
        >
          Submit
        </button> */}
      </div>
    </form>
  );
};
