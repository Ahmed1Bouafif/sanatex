import React from 'react';
import { useMenuContext } from '../../context/store';

export default function NavMenuClose() {
  const { handleCloseMenu } = useMenuContext();
  return (
    <button onClick={handleCloseMenu}>
      <svg
        id="Capa_1"
        enableBackground="new 0 0 386.667 386.667"
        height="512"
        viewBox="0 0 386.667 386.667"
        width="512"
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 hover:fill-blue-500 transition-colors"
      >
        <path d="m386.667 45.564-45.564-45.564-147.77 147.769-147.769-147.769-45.564 45.564 147.769 147.769-147.769 147.77 45.564 45.564 147.769-147.769 147.769 147.769 45.564-45.564-147.768-147.77z"></path>
      </svg>
    </button>
  );
}
