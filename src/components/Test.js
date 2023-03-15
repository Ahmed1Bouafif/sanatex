import React, { useState } from 'react';
import { Collapse } from 'react-collapse';

export const Test = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button onClick={(e) => setOpen((open) => !open)}>toggle</button>
      <Collapse isOpened={open}>
        <div className="text-white bg-black">
          slkdfjqsjkdfhqjsdfhlkqshldfhqsdljkfhqsjkdfhqsjkdfhqksldjfhqksjdh
        </div>
      </Collapse>
    </div>
  );
};
