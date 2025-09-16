import { createContext, useState } from "react";

export const ContactContext = createContext();

export const ContactProvider = ({ children }) => {

    const [formDataValidation, setFormDataValidation] = useState(false)
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        project: '',
        areacode: '',
        location: '',
        message: ''
    });


    const updateField = (field, value) => {
        setFormData(prev => {
            return ({ ...prev, [field]: value }, () => {
                if (field === 'areacode' && formData.areacode.length === 5) {
                    console.log(formData.areacode)
                }
            })
        });
    };




    const resetForm = () => {
        setFormData({
            name: '',
            phone: '',
            email: '',
            project: '',
            areacode: '',
            location: '',
            message: ''
        });
    };

    return (
        <ContactContext.Provider value={{ formData, formDataValidation, setFormDataValidation, updateField, resetForm }}>
            {children}
        </ContactContext.Provider>
    );
};
