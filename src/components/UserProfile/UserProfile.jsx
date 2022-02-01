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
        <p className='user__biography'>
          {userData.bio ? userData.bio : 'This profile has no bio'}
        </p>
        <div className='user__statistics-wrapper'>
          <div className='user__statistics-wrapper__repo-details'>
            <p className='user__statistics-wrapper__detail-header'>Repos</p>
            <p className='user__statistics-wrapper__number'>
              {userData.public_repos}
            </p>
          </div>
          <div className='user__statistics-wrapper__repo-details'>
            <p className='user__statistics-wrapper__detail-header'>Followers</p>
            <p className='user__statistics-wrapper__number'>
              {userData.followers}
            </p>
          </div>
          <div className='user__statistics-wrapper__repo-details'>
            <p className='user__statistics-wrapper__detail-header'>Following</p>
            <p className='user__statistics-wrapper__number'>
              {userData.following}
            </p>
          </div>
        </div>
        <ul className='user__contact-details'>
          <li>
            <p>{userData.location}</p>
          </li>
          <li>
            <a href={userData.blog}>{userData.blog}</a>
          </li>
          <li>
            <a href={userData.twitter_username}>{userData.twitter_username}</a>
          </li>
          <li>
            <a href={`https://github.com/${userData.company}`}>
              {userData.company}
            </a>
          </li>
        </ul>
      </header>
    </main>
  );
}

export default UserProfile;
