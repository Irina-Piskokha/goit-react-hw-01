import s from "./Profile.module.css";

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={s.wrapper}>
      <div className={s.container}>
        <img className={s.image} src={image} alt="User avatar" />
        <p className={s.name}>{name}</p>
        <div className={s.address}>
          <p className={s.tag}>@{tag}</p>
          <p>{location}</p>
        </div>
      </div>

      <ul className={s.list}>
        <li className={s.item}>
          <span className={s.title}>Followers</span>
          <span className={s.numbers}>{stats.followers}</span>
        </li>
        <li className={s.item}>
          <span className={s.title}>Views</span>
          <span className={s.numbers}>{stats.views}</span>
        </li>
        <li className={s.item}>
          <span className={s.title}>Likes</span>
          <span className={s.numbers}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
