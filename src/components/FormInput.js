import React from 'react';

const FormInput = ({ label, name, type, required }) => {
  let field;
  if (type === 'textarea') {
    field = (
      <textarea
        placeholder="Message"
        className="form__field text-white resize-none scrollbar-hide"
        name="message"
        id="message"
      />
    );
  } else {
    field = (
      <input
        className="form__field "
        type={type}
        id={name}
        name={name}
        placeholder={name}
        required={required}
      />
    );
  }
  return (
    <div key={name} className="form__group field font-heading">
      {field}
      <label className="form__label font-heading" htmlFor={name}>
        {required ? `${label}*` : label}
      </label>
    </div>
  );
};

export default FormInput;
