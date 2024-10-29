import { useState } from "react";

export const useForm = (initialState = {}) => {
    const [form, setForm] = useState(initialState);
    const serializedForm = (form) => {
        const formData = new FormData(form);
        const formDataObj = {};
        formData.forEach((value, name) => {
            formDataObj[name] = value;
        });
        return formDataObj;
    }

    const sendData = (e) => {
        e.preventDefault();
        setForm(serializedForm(e.target));
    }

    const changeData = (e) => {
        setForm({...form, [e.target.name]: e.target.value});
    }

    return {form, sendData, changeData};
}