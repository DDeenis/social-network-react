import React from 'react';
import UserFollowListContainer from '../UserFollowList/UserFollowListContainer';
import styles from './UserFollow.module.css';

class UserFollow extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
        this.props.onLoad();
    }

    render() {
        return (
            <div className={styles.wrapper}>
                <p className={styles.title}>Users</p>
    
                <section className={styles.followList}>
                    <UserFollowListContainer />
                </section>
    
                <button className={`btn ${styles.showMoreBtn}`} onClick={() => this.props.getUsers()}>Show more</button>
            </div>
        );
    }
}

// temporary unused (uncomment when refactoring to hooks)
// function UserFollow({ onLoad, getUsers }) {
//     useEffect(() => {
//         onLoad();
//     }, [])

//     return (
//         <div className={styles.wrapper}>
//             <p className={styles.title}>Users</p>

//             <section className={styles.followList}>
//                 <UserFollowListContainer />
//             </section>

//             <button className={`btn ${styles.showMoreBtn}`} onClick={() => getUsers()}>Show more</button>
//         </div>
//     );
// }

export default UserFollow;