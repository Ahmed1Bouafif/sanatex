import { capitalize } from 'lodash';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { writeUsFormSchema } from '../schema/writeUsFormSchema';

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
  // {
  //   label: 'Message',
  //   name: 'message',
  //   type: 'textarea',
  //   required: false,
  // },
];

export const WriteUsForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm(writeUsFormSchema);

  useEffect(() => {
    console.log(errors);
  }, [errors]);
  const submitForm = (formValues) => {
    console.log(formValues);
    // reset();
  };

  return (
    <form
      onSubmit={handleSubmit(submitForm)}
      className="flex flex-col bg-grseen-500  gap-4"
    >
      <div className="flex flex-col gap-2  bg-rsed-300 items-center">
        {writeUsInputs.map(({ name, ey, type, label, required }, idx) => (
          <div key={name} className="form__group field font-heading">
            <input
              id={name}
              className={`form__field`}
              type={type}
              placeholder={label}
              required={required}
              {...register(name)}
            />
            <label htmlFor={name} className={`form__label font-heading `}>
              {required ? capitalize(`${label}*`) : capitalize(label)}
            </label>
          </div>
        ))}
        <div className="form__group field font-heading">
          <textarea
            {...register('message')}
            id="message"
            placeholder="Message"
            className="form__field text-white resize-none scrollbar-hide"
          ></textarea>
          <label className="form__label font-heading" htmlFor="message">
            Message
          </label>
        </div>
      </div>
      <div className="flex justify-start">
        <button
          type="submit"
          className="bg-white px-6 py-3 text-black font-semibold rounded-sm font-heading"
        >
          Submit
        </button>
      </div>
    </form>
  );
};
