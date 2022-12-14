import React from "react";

const Input = React.forwardRef((props, ref) => {
  return (
    <div className="flex items-center justify-center gap-2">
      <label
        htmlFor={props.inputProps.id}
        className="block text-sm font-bold text-white dark:text-gray-900"
      >
        {props.label}
      </label>
      <input
        ref={ref}
        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
        {...props.inputProps}
      />
    </div>
  );
});

export default Input;
