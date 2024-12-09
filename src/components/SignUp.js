import React, { useState } from 'react';
import './App.css'; // Optional CSS if needed

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-dark-blue text-gray-200">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

const Header = () => (
  <header className="bg-blue-800 text-white py-4 text-center shadow-md">
    <h1 className="text-3xl font-bold">Student Sign-Up</h1>
  </header>
);

const Footer = () => (
  <footer className="bg-blue-900 text-gray-300 py-4 text-center mt-auto shadow-inner">
    <p>&copy; 2024 Your Organization Name. All Rights Reserved.</p>
  </footer>
);

const MainContent = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    photo: null,
    gender: '',
    phone: '',
    email: '',
    branch: '',
    division: '',
    fatherName: '',
    motherName: '',
    parentEmail: '',
    parentPhone: '',
    yearOfAdmission: '',
    address: '',
    pincode: '',
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert('Form submitted successfully!');
  };

  return (
    <main className="flex-grow p-6 bg-blue-950">
      <form
        onSubmit={handleSubmit}
        className="bg-blue-800 p-6 rounded shadow-lg max-w-lg mx-auto text-white"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up Form</h2>
        <div className="space-y-5">
          <InputField label="Full Name" name="fullName" value={formData.fullName} handleChange={handleChange} />
          <FileField label="Photo" name="photo" handleChange={handleChange} />
          <SelectField
            label="Gender"
            name="gender"
            value={formData.gender}
            options={['Male', 'Female', 'Other']}
            handleChange={handleChange}
          />
          <InputField label="Phone Number" name="phone" value={formData.phone} handleChange={handleChange} type="tel" />
          <InputField label="Email" name="email" value={formData.email} handleChange={handleChange} type="email" />
          <InputField label="Branch" name="branch" value={formData.branch} handleChange={handleChange} />
          <InputField label="Division" name="division" value={formData.division} handleChange={handleChange} />
          <InputField label="Father's Name" name="fatherName" value={formData.fatherName} handleChange={handleChange} />
          <InputField label="Mother's Name" name="motherName" value={formData.motherName} handleChange={handleChange} />
          <InputField
            label="Parent Email (Optional)"
            name="parentEmail"
            value={formData.parentEmail}
            handleChange={handleChange}
            type="email"
          />
          <InputField label="Parent Phone Number" name="parentPhone" value={formData.parentPhone} handleChange={handleChange} type="tel" />
          <InputField label="Year of Admission" name="yearOfAdmission" value={formData.yearOfAdmission} handleChange={handleChange} type="number" />
          <TextareaField label="Address" name="address" value={formData.address} handleChange={handleChange} />
          <InputField label="Pincode" name="pincode" value={formData.pincode} handleChange={handleChange} />
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white font-bold mt-6 py-2 px-4 rounded w-full hover:bg-blue-700 transition"
        >
          Submit
        </button>
      </form>
    </main>
  );
};

const InputField = ({ label, name, value, handleChange, type = 'text' }) => (
  <div>
    <label className="block font-semibold mb-2">{label}</label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={handleChange}
      className="w-full border border-gray-600 rounded p-2 bg-blue-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
      required
    />
  </div>
);

const FileField = ({ label, name, handleChange }) => (
  <div>
    <label className="block font-semibold mb-2">{label}</label>
    <input
      type="file"
      name={name}
      onChange={handleChange}
      className="w-full border border-gray-600 rounded p-2 bg-blue-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
      accept="image/*"
    />
  </div>
);

const SelectField = ({ label, name, value, options, handleChange }) => (
  <div>
    <label className="block font-semibold mb-2">{label}</label>
    <select
      name={name}
      value={value}
      onChange={handleChange}
      className="w-full border border-gray-600 rounded p-2 bg-blue-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
      required
    >
      <option value="">Select {label}</option>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  </div>
);

const TextareaField = ({ label, name, value, handleChange }) => (
  <div>
    <label className="block font-semibold mb-2">{label}</label>
    <textarea
      name={name}
      value={value}
      onChange={handleChange}
      className="w-full border border-gray-600 rounded p-2 bg-blue-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
      rows="3"
      required
    />
  </div>
);

export default App;
