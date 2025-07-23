import { useContext, useState } from "react";
import { ContactContext } from "../context/ContactContext";

const InputField = ({ label, name, type = "text", textarea = false }) => {
    const { formData, updateField } = useContext(ContactContext);
    const [focused, setFocused] = useState(false);

    return (
        <div className="input padding-sm radius-xs backgroundColor-white marginBottom-md border-softgray">
            <label htmlFor={name} className={`absolute p color-softgray ${focused || formData[name]?.trim() !== '' ? 'small-text marginTop--xs' : 'marginTop-xs'}`}>{label}</label>
            {textarea ? (
                <textarea
                    id={name}
                    name={name}
                    value={formData[name]}
                    onChange={(e) => updateField(name, e.target.value)}
                    className="p color-gray"
                    rows={7}
                    onFocus={() => setFocused(true)}
                    onBlur={() => setFocused(false)}
                />
            ) : (
                <input
                    id={name}
                    name={name}
                    type={type}
                    value={formData[name]}
                    onChange={(e) => updateField(name, e.target.value)}
                    className="p color-gray"
                    onFocus={() => setFocused(true)}
                    onBlur={() => setFocused(false)}
                    onWheel={(e) => e.target.blur()}
                />
            )}
        </div>
    );
};

export default InputField;
