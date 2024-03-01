import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ProfileForm from './components/ProfileForm';
import ProfileList from './components/ProfileList';

const AppContainer = styled.div`
  text-align: center;
`;

const App = () => {
  const [profiles, setProfiles] = useState([]);

  const addProfile = (newProfile) => {
    setProfiles((prevProfiles) => [...prevProfiles, newProfile]);
  };

  useEffect(() => {
    fetch('/profiles.json')
      .then((response) => response.json())
      .then((data) => setProfiles(data))
      .catch((error) => console.error('Error loading profiles:', error));
  }, []);

  return (
    <AppContainer>
      <h1>Profile Management</h1>
      <ProfileForm addProfile={addProfile} />
      <ProfileList profiles={profiles} />
    </AppContainer>
  );
};

export default App;
