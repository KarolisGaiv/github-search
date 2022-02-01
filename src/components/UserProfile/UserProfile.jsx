import './userProfile.scss';
import React from 'react';

function UserProfile() {
  return (
    <main className='user'>
      <header className='user__header'>
        <span className='user__avatar'></span>
        <div className='user__details-container'></div>
        <p className='user__biography'></p>
        <div className='user__statistics-wrapper'></div>
        <div className='user__contact-details'></div>
      </header>
    </main>
  );
}

export default UserProfile;
