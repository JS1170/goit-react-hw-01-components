import PropTypes from "prop-types";
import user from '../data/user.json';
import { Profile } from './Profile';
import data from '../data/data.json';
import { Statistics } from './Statistics';
import { FriendList } from './FriendList/FriendList';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        view={user.stats.views}
        likes={user.stats.likes}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};
