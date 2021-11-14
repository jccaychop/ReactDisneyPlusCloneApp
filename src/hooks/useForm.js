import { useState } from "react"

export const useForm = (initialState = {}) => {
    const [values, setValues] = useState(initialState);

    const reset = (newFormState = initialState) => {
        setValues(newFormState);
    };

    const handleInputChange = (e) => {
        let value = e.target.type === "checkbox" ? e.target.checked : e.target.value;

        setValues({
            ...values,
            [e.target.name]: value,
        });
    };

    const onClickInputChange = (value) => {
        setValues({
            ...values,
            offers: value,
        });
    };

    return [values, handleInputChange, onClickInputChange, reset];
};
