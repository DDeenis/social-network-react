import React from 'react';
import PagesBar from '../PagesBar/PagesBar';
import UserFollowListContainer from '../UserFollowList/UserFollowListContainer';
import styles from './UserFollow.module.css';

class UserFollow extends React.PureComponent {
    constructor(props) {
        super(props);
        this.pages = [];
    }

    componentDidMount() {
        this.props.onLoad();

        // this.props.totalPages
        for (let i = 1; i <= 23; i++) {
            this.pages.push(i);
        }
    }

    render() {
        return (
            <div className={styles.wrapper}>
                <p className={styles.title}>Users</p>
    
                <section className={styles.followList}>
                    <UserFollowListContainer />
                </section>
    
                <PagesBar pages={this.pages} currentPage={this.props.currentPage} getUsers={this.props.getUsers} setCurrentPage={this.props.setCurrentPage} />
                <button className={`btn ${styles.showMoreBtn}`} onClick={() => this.props.getUsers()}>Show more</button>
            </div>
        );
    }
}

export default UserFollow;