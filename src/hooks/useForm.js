import { useState } from "react"

export const useForm = (initialState = {}) => {
    const [values, setValues] = useState(initialState);

    const reset = (newFormState = initialState) => {
        setValues(newFormState);
    };

    const reset2 = (obj) => {
        setValues(obj);
    };

    const handleInputChange = (e) => {
        let value = e.target.type === "checkbox" ? e.target.checked : e.target.value;

        setValues({
            ...values,
            [e.target.name]: value,
        });
    };

    const onClickInputChange = (value) => {
        if (value?.target?.name === "agreement") {
            setValues({
                ...values,
                agreement: true,
            });
        } else {
            setValues({
                ...values,
                offers: value,
            });
        }
    };

    const autoGeneratedBilling = (obj) => {
        setValues({
            ...values,
            billing: { ...obj },
        });
    }

    return [values, handleInputChange, onClickInputChange, autoGeneratedBilling, reset, reset2];
};
