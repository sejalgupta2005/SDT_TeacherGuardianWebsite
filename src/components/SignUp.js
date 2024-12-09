import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignUp = () => {
  const [formData, setFormData] = useState({
    studentName: '',
    photo: '',
    surname: '',
    gender: '',
    studentPhone: '',
    studentEmail: '',
    branch: '',
    div: '',
    fathersName: '',
    mothersName: '',
    parentEmail: '',
    parentPhone: '',
    admissionYear: '',
    address: '',
    pincode: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const mandatoryFields = [
      'studentName',
      'surname',
      'gender',
      'studentPhone',
      'studentEmail',
      'branch',
      'div',
      'fathersName',
      'mothersName',
      'parentPhone',
      'admissionYear',
      'address',
      'pincode',
    ];

    for (const field of mandatoryFields) {
      if (!formData[field]) {
        toast.error(`Please fill out the ${field} field.`);
        return false;
      }
    }
    return true;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      // Mock API call for registration
      toast.success('Account created successfully!');
      setTimeout(() => {
        window.location.href = '/login'; // Redirect to login page
      }, 2000);
    }
  };

  return (
    <div className="signup-container">
      <h1>Sign Up</h1>
      <form>
        <input
          type="text"
          name="studentName"
          placeholder="Student Name"
          onChange={handleInputChange}
        />
        <input
          type="file"
          name="photo"
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="surname"
          placeholder="Surname"
          onChange={handleInputChange}
        />
        <select name="gender" onChange={handleInputChange}>
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        <input
          type="text"
          name="studentPhone"
          placeholder="Student Phone"
          onChange={handleInputChange}
        />
        <input
          type="email"
          name="studentEmail"
          placeholder="Student Email"
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="branch"
          placeholder="Branch"
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="div"
          placeholder="Division"
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="fathersName"
          placeholder="Father's Name"
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="mothersName"
          placeholder="Mother's Name"
          onChange={handleInputChange}
        />
        <input
          type="email"
          name="parentEmail"
          placeholder="Parent Email (Optional)"
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="parentPhone"
          placeholder="Parent Phone"
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="admissionYear"
          placeholder="Year of Admission"
          onChange={handleInputChange}
        />
        <textarea
          name="address"
          placeholder="House Address"
          onChange={handleInputChange}
        ></textarea>
        <input
          type="number"
          name="pincode"
          placeholder="Pincode"
          onChange={handleInputChange}
        />
      </form>
      <button onClick={handleSubmit}>Register</button>
      <ToastContainer />
    </div>
  );
};

export default SignUp;
