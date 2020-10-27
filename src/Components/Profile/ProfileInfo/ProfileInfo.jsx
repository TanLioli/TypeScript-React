import React from 'react';
import s from './ProfileInfo.module.css'
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatus from './ProfileStatus';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />
  }
  return <div>
    <div>
      <img src='https://s1.stc.all.kpcdn.net/putevoditel/projectid_103889/images/tild3266-3366-4934-a538-646465646539__20180814_zaa_n230_31.jpg' />
    </div>
    <div className={s.descriptionBlock}>
      <img src={props.profile.photos.large} />
      <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} />
    </div>
  </div>
}

export default ProfileInfo;