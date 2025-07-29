import { createContext, useState } from "react";

export const ContactContext = createContext();

export const ContactProvider = ({ children }) => {
    const [formData, setFormData] = useState({
        name: '',
        lastname: '',
        contactNumber: '',
        email: '',
        project_type: '',
        location: '',
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
            lastname: '',
            contact_number: '',
            email: '',
            project_type: '',
            location: '',
            message: ''
        });
    };

    return (
        <ContactContext.Provider value={{ formData, updateField, resetForm }}>
            {children}
        </ContactContext.Provider>
    );
};
