import React, { useState } from 'react';
import axios from 'axios';

const DriverLicenseUpload = () => {
    const [file, setFile] = useState(null);

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const handleUpload = () => {
        const formData = new FormData();
        formData.append('file', file);

        axios
            .post('http://localhost:8080/driverLicense/upload', formData)
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                console.error('Error uploading driver license:', error);
            });
    };

    return (
        <div>
            <label htmlFor="driverLicense">Upload Driver License:</label>
            <input type="file" id="driverLicense" onChange={handleFileChange} />
            <button type="button" onClick={handleUpload} disabled={!file}>
                Upload
            </button>
        </div>
    );
};

export default DriverLicenseUpload;
