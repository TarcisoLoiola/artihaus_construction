import { createContext, useState } from "react";

export const ContactContext = createContext();

export const ContactProvider = ({ children }) => {
    const [formData, setFormData] = useState({
        name: '',
        contactNumber: '',
        email: '',
        message: ''
    });

    const updateField = (field, value) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const submitContactForm = () => {
        console.log(formData);
    };

    const resetForm = () => {
        setFormData({
            name: '',
            contact_number: '',
            email: '',
            message: ''
        });
    };

    return (
        <ContactContext.Provider value={{ formData, updateField, resetForm }}>
            {children}
        </ContactContext.Provider>
    );
};
