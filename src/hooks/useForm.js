import { useState } from "react";

const useForm = (initialState = {}) => {
  const [values, setValues] = useState(initialState);
  const reset = () => {
    setValues(initialState);
  };
  const handleinputChange = ({ target }) => {
    setValues({
      ...values,
      [target.name]: target.value,
    });
  };
  return [values, handleinputChange, reset];
};

export default useForm;
