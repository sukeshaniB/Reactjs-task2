// src/components/ProfileForm.js
import React, { useState } from 'react';
import styled from 'styled-components';

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 300px;
  margin: 20px auto;
`;

const Input = styled.input`
  margin-bottom: 10px;
  padding: 8px;
`;

const Button = styled.button`
  padding: 10px;
  background-color: #4caf50;
  color: white;
  cursor: pointer;
`;

const ProfileForm = ({ addProfile }) => {
  const [profile, setProfile] = useState({
    name: '',
    age: '',
    phone: '',
    email: '',
    skills: '',
    address: '',
    city: '',
    state: '',
    country: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addProfile(profile);
    setProfile({
      name: '',
      age: '',
      phone: '',
      email: '',
      skills: '',
      address: '',
      city: '',
      state: '',
      country: '',
    });
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <Input type="text" name="name" value={profile.name} onChange={handleChange} placeholder="Name" required />
      <Input type="text" name="age" value={profile.age} onChange={handleChange} placeholder="Age" />
      <Input type="text" name="phone" value={profile.phone} onChange={handleChange} placeholder="Phone" />
      <Input type="email" name="email" value={profile.email} onChange={handleChange} placeholder="Email" required />
      <Input type="text" name="skills" value={profile.skills} onChange={handleChange} placeholder="Skills" />
      <Input type="text" name="address" value={profile.address} onChange={handleChange} placeholder="Address" />
      <Input type="text" name="city" value={profile.city} onChange={handleChange} placeholder="City" />
      <Input type="text" name="state" value={profile.state} onChange={handleChange} placeholder="State" />
      <Input type="text" name="country" value={profile.country} onChange={handleChange} placeholder="Country" />
      <Button type="submit">Add Profile</Button>
    </FormContainer>
  );
};

export default ProfileForm;
