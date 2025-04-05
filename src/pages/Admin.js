import { useState, useEffect } from "react";
import API from '../api/index'

const Admin = () => {
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    const updateServices = async () => {
        setMessage("");
        setLoading(true);
        const data = {
            pages: { service: {
                tile: ''
            }}
        }
        API.Content.create({data})
            .then(res => {
                if (res.ok) {
                    setMessage("Services updated successfully!");
                } else {
                    setMessage(`Error: ${res.error}`);
                }
            })
            .catch(err => setMessage("Failed to connect to the server."))
        setLoading(false);
    }

    return (
        <div style={{ padding: "20px", textAlign: "center" }}>
            <h2>Admin Panel</h2>
            <button onClick={updateServices} disabled={loading}>
                {loading ? "Updating..." : "Update Services"}
            </button>
            {message && <p>{message}</p>}
        </div>
    );
}; export default Admin
