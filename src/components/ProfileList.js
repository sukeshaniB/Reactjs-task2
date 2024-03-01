// src/components/ProfileList.js
import React, { useState } from 'react';
import styled from 'styled-components';
import InfiniteScroll from 'react-infinite-scroll-component';
import fetchMoreProfiles from '../utils/api'; // Import the utility function

const ListContainer = styled.div`
  max-width: 600px;
  margin: 20px auto;
`;

const SearchInput = styled.input`
  width: 100%;
  margin-bottom: 10px;
  padding: 8px;
`;

const ProfileItem = styled.div`
  border: 1px solid #ddd;
  padding: 10px;
  margin-bottom: 10px;
`;

const ProfileList = ({ profiles, setProfiles }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [hasMore, setHasMore] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
  
    const filteredProfiles = profiles.filter(
      (profile) =>
        profile.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        profile.email.toLowerCase().includes(searchTerm.toLowerCase())
    );
  

   const loadMoreData = async () => {
    try {
      const newProfiles = await fetchMoreProfiles(currentPage + 1);
      if (newProfiles.length === 0) {
        setHasMore(false);
        return;
      }

      setCurrentPage((prevPage) => prevPage + 1);
      setProfiles((prevProfiles) => [...prevProfiles, ...newProfiles]); // Use props.setProfiles to update the state
    } catch (error) {
      console.error('Error fetching more profiles:', error);
    }
  };


  return (
    <ListContainer>
      <SearchInput
        type="text"
        placeholder="Search by name or email"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <InfiniteScroll
        dataLength={filteredProfiles.length}
        next={loadMoreData}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
      >
        {filteredProfiles.map((profile, index) => (
          <ProfileItem key={index}>
            <div>Name: {profile.name}</div>
            <div>Email: {profile.email}</div>
            {/* Display other profile details */}
          </ProfileItem>
        ))}
      </InfiniteScroll>
    </ListContainer>
  );
};

export default ProfileList;
