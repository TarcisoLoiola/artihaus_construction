import { useContext, useState, useEffect } from "react";
import { ContactContext } from "../context/ContactContext";

const InputField = ({ label, name, type = "text", textarea = false, select = false, className }) => {
    const { formData, updateField } = useContext(ContactContext);
    const [focused, setFocused] = useState(null);

    return (
        <div className={`flex-1 input padding-sm radius-xs backgroundColor-white marginBottom-sm border${className}`}>
            <label htmlFor={name} className={`absolute p color${className} ${focused || formData[name]?.trim() !== '' ? 'small-text marginTop--xs color-softgray' : 'marginTop-xxs color-softgray'}`}>{label}</label>
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
            )
                : select ?
                    <select
                        id={name}
                        name={name}
                        type={type}
                        value={formData[name]}
                        onChange={(e) => updateField(name, e.target.value)}
                        className="p color-gray"
                        onFocus={() => setFocused(true)}
                        onBlur={() => setFocused(false)}
                    >
                        <option value=""></option>
                        <option value="gunite-pool">Gunite & Shotcrete Pool Construction</option>
                        <option value="pool-maintenance">Pool Maintenance</option>
                        <option value="paver-installation">Paver Patios & Walkways</option>
                        <option value="concrete-work">Concrete Work</option>
                        <option value="retaining-wall">Retaining Walls & Masonry</option>
                        <option value="fire-features">Fireplaces, Fire Pits, & Sitting Walls</option>
                        <option value="landscaping">Landscape Installation & Maintenance</option>
                    </select>
                    : (
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
