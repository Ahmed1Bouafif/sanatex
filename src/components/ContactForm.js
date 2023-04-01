import { useForm } from '@formspree/react';
import React from 'react';
import { Button2 } from './Button2';

export const ContactForm = ({ children, state, handleSubmit }) => {
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col bg-grseen-500  gap-4"
    >
      <div className="flex flex-col gap-2  bg-rsed-300 items-center">
        {children}
      </div>
      <div className="flex justify-center">
        <Button2
          disabled={state.submitting}
          variant={'secondary'}
          className="w-full"
        >
          EINREICHEN
        </Button2>
      </div>
    </form>
  );
};
