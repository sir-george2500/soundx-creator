import React from 'react'

const TextInput = ({
    type,
    name,
    id,
    placeholder,
    required,
    className,
    ...otherProps
  }) => {
    return (
      <>
        <label htmlFor={id} className="block text-sm font-medium text-gray-900 dark:text-white">
          {placeholder}
        </label>
        <input
          type={type}
          name={name}
          id={id}
          placeholder={placeholder}
          required={required}
          className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500${className}`}
          {...otherProps}
        />
      </>
    );
  };
  
  

export default TextInput