import { capitalize } from 'lodash';
import React from 'react';

const FormInput = ({ label, name, type, required }) => {
  let field;

  switch (type) {
    case 'textarea':
      field = (
        <textarea
          placeholder={label}
          className="form__field text-white resize-none scrollbar-hide"
          name={name}
          id={name}
        />
      );
      break;
    case 'select':
      field = (
        <select className="form__field" name={name} id={name}>
          <option
            className="text-[#9b9b9b]"
            selected
            disabled
            hidden
            value
          ></option>
          <option value="mr">Mr</option>
          <option value="mrs">Mrs</option>
        </select>
      );
      break;
    default:
      field = (
        <input
          className={`form__field`}
          type={type}
          id={name}
          name={name}
          placeholder={label}
          required={required}
        />
      );
  }

  return (
    <div key={name} className="form__group field font-heading">
      {field}
      <label className="form__label font-heading" htmlFor={name}>
        {required ? capitalize(`${label}*`) : capitalize(label)}
      </label>
      <div className="w-full h-[2px] bg-slate-200"></div>
    </div>
  );
};

export default FormInput;
