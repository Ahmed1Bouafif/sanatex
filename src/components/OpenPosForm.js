import { capitalize } from 'lodash';
import React from 'react';
import { useForm } from 'react-hook-form';
import FormInput from './FormInput';
const openPosInputs = [
  // {
  //   label: 'gender (Mr/Mrs)',
  //   name: 'gender',
  //   type: 'select',
  //   required: false,
  // },
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
  // {
  //   label: 'CV',
  //   name: 'cv',
  //   type: 'file',
  //   required: true,
  // },
  // {
  //   label: 'cover letter',
  //   name: 'cl',
  //   type: 'file',
  //   required: true,
  // },
  // {
  //   label: 'Message',
  //   name: 'message',
  //   type: 'textarea',
  //   required: false,
  // },
];
export const OpenPosForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const submitForm = (formValues) => {
    console.log(formValues);
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(submitForm)}
      className="flex flex-col bg-grseen-500  gap-4"
    >
      <div className="flex flex-col gap-2  bg-rsed-300 items-center">
        <div className="form__group field font-heading">
          <select
            className="form__field"
            {...register('gender')}
            id="gender"
            // defaultValue={'default'}
          >
            {/* <option hidden disabled value="default"></option> */}
            <option value="mr">Mr.</option>
            <option value="mrs">Mrs.</option>
          </select>
          <label className="form__label font-heading" htmlFor="gender">
            gender (Mr/Mrs)
          </label>
        </div>
        {openPosInputs.map(({ name, ey, type, label, required }, idx) => (
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
        <div
          className="form__group field font-heading border-b-2 border-[#9b9b9b] "
          style={{
            paddingTop: '30px',
            marginTop: '20px',
          }}
        >
          <input
            {...register('cv')}
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
        </div>
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
