import './userProfile.scss';
import React from 'react';

function UserProfile({ userData }) {
  return (
    <main className='user'>
      <header className='user__header'>
        {/* <span className='user__avatar'>
          <img src={userData.avatar_url} alt='user avatar' />
        </span>{' '} */}
        <div className='user__details-container'>
          <h1 className='user__details-container__name'>{userData.name}</h1>
          <h3 className='user__details-container__login'>@{userData.login}</h3>
          <p className='user__details-container__joined-data'>
            {userData.created_at}
          </p>
        </div>
        <p className='user__biography'></p>
        <div className='user__statistics-wrapper'></div>
        <div className='user__contact-details'></div>
      </header>
    </main>
  );
}

export default UserProfile;
