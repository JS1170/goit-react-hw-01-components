import PropTypes from 'prop-types';
import css from './FriendList.module.css';

export function FriendList({ friends }) {
  return (
    <div className={css.friendBlock}>
      <ul className={css.friendList}>
        {friends.map(({ id, avatar, name, isOnline }) => (
          <li className={css.item} key={id}>
            <span
              className={`${css.status} ${isOnline ? css.onLine : css.offLine}`}
            ></span>
            <img
              className={css.avatar}
              src={avatar}
              alt="User avatar"
              width="48"
            />
            <p className={css.name}>{name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};
