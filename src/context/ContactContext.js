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

    const resetForm = () => {
        setFormData({
            name: '',
            contactNumber: '',
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
