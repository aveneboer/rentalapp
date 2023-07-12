import React, { useState } from 'react';
import axios from 'axios';

const DriverLicenseUpload = ({ handleDocumentUpload }) => {
    const [file, setFile] = useState(null);
    const [confirmation, setConfirmation] = useState('');

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const handleUploadDriverLicense = () => {
        const formData = new FormData();
        formData.append('file', file);

        axios
            .post('http://localhost:8080/driverLicense/upload', formData)
            .then((response) => {
                console.log(response.data);
                setConfirmation('Driver license uploaded successfully.');
                handleDocumentUpload(true);
            })
            .catch((error) => {
                console.error('Error uploading driver license:', error);
                setConfirmation('Error occurred while uploading driver license.');
                handleDocumentUpload(false);
            });
    };

    return (
        <div>
            <label htmlFor="driverLicense">Upload Driver License:</label>
            <input type="file" id="driverLicense" onChange={handleFileChange} />
            <button
                type="button"
                onClick={handleUploadDriverLicense}
                disabled={!file}
            >
                Upload
            </button>
            {confirmation && <p>{confirmation}</p>}
        </div>
    );
};

export default DriverLicenseUpload;

