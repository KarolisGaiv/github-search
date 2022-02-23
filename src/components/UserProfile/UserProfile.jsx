import './userProfile.scss';
import React from 'react';
import { ReactComponent as LocationIcon } from '../../assets/icon-location.svg';
import { ReactComponent as WebsiteIcon } from '../../assets/icon-website.svg';
import { ReactComponent as TwitterIcon } from '../../assets/icon-twitter.svg';
import { ReactComponent as CompanyIcon } from '../../assets/icon-company.svg';

function UserProfile({ userData, currentTheme }) {
  function changeDateFormat(date) {
    let dateObj = new Date(date);
    let month = dateObj.toLocaleString('default', { month: 'short' });
    let formatedDate =
      dateObj.getDate() + ' ' + month + ' ' + dateObj.getFullYear();
    return formatedDate;
  }

  function displayContactDetail(details) {
    if (!details) {
      return 'Not Available';
    }
    return details;
  }

  return (
    <main
      className={
        currentTheme === 'light' ? 'user user --light' : 'user user --dark'
      }
    >
      <header className='user__header'>
        <img
          src={userData.avatar_url}
          alt='user avatar'
          className='user__header__avatar'
        />
        <div className='user__details-container'>
          <h1 className='user__details-container__name'>{userData.name}</h1>
          <h3 className='user__details-container__login'>@{userData.login}</h3>
          <p
            className={
              currentTheme === 'light'
                ? 'user__details-container__joined-data'
                : 'user__details-container__joined-data user__details-container__joined-data --dark'
            }
          >
            Joined {changeDateFormat(userData.created_at)}
          </p>
        </div>
      </header>
      <p
        className={
          userData.bio
            ? 'user__biography'
            : 'user__biography user__biography --error'
        }
      >
        {userData.bio ? userData.bio : 'This profile has no bio'}
      </p>
      <div
        className={
          currentTheme === 'light'
            ? 'user__statistics-wrapper user__statistics-wrapper --light'
            : 'user__statistics-wrapper user__statistics-wrapper --dark'
        }
      >
        <div className='user__statistics-wrapper__repo-details'>
          <p className='user__statistics-wrapper__detail-header'>Repos</p>
          <p
            className={
              currentTheme === 'light'
                ? 'user__statistics-wrapper__number'
                : 'user__statistics-wrapper__number user__statistics-wrapper__number --dark'
            }
          >
            {userData.public_repos}
          </p>
        </div>
        <div className='user__statistics-wrapper__repo-details'>
          <p className='user__statistics-wrapper__detail-header'>Followers</p>
          <p
            className={
              currentTheme === 'light'
                ? 'user__statistics-wrapper__number'
                : 'user__statistics-wrapper__number user__statistics-wrapper__number --dark'
            }
          >
            {userData.followers}
          </p>
        </div>
        <div className='user__statistics-wrapper__repo-details'>
          <p className='user__statistics-wrapper__detail-header'>Following</p>
          <p
            className={
              currentTheme === 'light'
                ? 'user__statistics-wrapper__number'
                : 'user__statistics-wrapper__number user__statistics-wrapper__number --dark'
            }
          >
            {userData.following}
          </p>
        </div>
      </div>

      <ul className='user__contact-details'>
        <li
          className={
            userData.location
              ? 'user__contact-details__item'
              : 'user__contact-details__item user__contact-details__item --no-details'
          }
        >
          <LocationIcon className='user__contact-details__icon' />
          <p>{displayContactDetail(userData.location)}</p>
        </li>
        <li
          className={
            userData.blog
              ? 'user__contact-details__item'
              : 'user__contact-details__item user__contact-details__item --no-details'
          }
        >
          <WebsiteIcon className='user__contact-details__icon' />
          <a href={userData.blog}>{displayContactDetail(userData.blog)}</a>
        </li>
        <li
          className={
            userData.twitter_username
              ? 'user__contact-details__item'
              : 'user__contact-details__item user__contact-details__item --no-details'
          }
        >
          <TwitterIcon className='user__contact-details__icon' />
          <a href={userData.twitter_username}>
            {displayContactDetail(userData.twitter_username)}
          </a>
        </li>
        <li
          className={
            userData.company
              ? 'user__contact-details__item'
              : 'user__contact-details__item user__contact-details__item --no-details'
          }
        >
          <CompanyIcon className='user__contact-details__icon' />
          <a href={`https://github.com/${userData.company}`}>
            {displayContactDetail(userData.company)}
          </a>
        </li>
      </ul>
    </main>
  );
}

export default UserProfile;
