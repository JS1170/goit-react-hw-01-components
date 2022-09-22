import css from "./FriendList.module.css"

export function FriendList({ friends }) {
  return (
    <div className={css.friendBlock}>
      <ul className={css.friendList}>
      {friends.map(({ id, avatar, name }) => (
        <li className={css.item} key={id}>
          <span className={css.status}></span>
          <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
          <p className={css.name}>{name}</p>
        </li>
      ))}
    </ul>
    </div>
    
  );
}