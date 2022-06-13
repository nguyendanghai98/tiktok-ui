import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faHome,
    faVideo,
    faUsers,
    
} from '@fortawesome/free-solid-svg-icons';

import MenuItem from '~/components/Popper/Menu/MenuItem';
import Button from '~/components/Button/Button';
import styles from './Sidebar.module.scss';
const cx = classNames.bind(styles);

function Sidebar() {
    const currentUser = false;
    const sidebarMenu = [
        {
            icon: <FontAwesomeIcon icon={faHome} />,
            title: 'For You',
            to: '/',
            sidebar: 'menu-item__sidebar',
        },
        {
            icon: <FontAwesomeIcon icon={faUsers} />,
            title: 'Following',
            to: '/following',
            sidebar: 'menu-item__sidebar',
        },
        {
            icon: <FontAwesomeIcon icon={faVideo} />,
            title: 'Live',
            to: '/live',
            sidebar: 'menu-item__sidebar',
        },
    ];
    const sidebarLink = [
        [
            {
                title: 'About',
                href: '#',
            },
            {
                title: 'Newsroom',
                href: '#',
            },
            {
                title: 'Contact',
                href: '#',
            },
            {
                title: 'Careers',
                href: '#',
            },
            {
                title: 'ByteDance',
                href: '#',
            },
        ],
        [
            {
                title: 'Tiktok for Good',
                href: '#',
            },
            {
                title: 'Advertise',
                href: '#',
            },
            {
                title: 'Developers',
                href: '#',
            },
            {
                title: 'Transparency',
                href: '#',
            },
            {
                title: 'Tiktok Rewards',
                href: '#',
            },
        ],
        [
            {
                title: 'Help',
                href: '#',
            },
            {
                title: 'Safety',
                href: '#',
            },
            {
                title: 'Terms',
                href: '#',
            },
            {
                title: 'Privacy',
                href: '#',
            },
            {
                title: 'Creator Portal',
                href: '#',
            },
            {
                title: 'Community Guidelines',
                href: '#',
            },
        ],
        {
            copyRight: "@ 2022 Tiktok",
        },
    ];
    const loginHintText = 'Log in to follow creators, like videos, and view comments.'
    const renderItems = () => {
        return sidebarMenu.map((item, index) => {
            return (
                <MenuItem
                    key={index}
                    data={item}
                />
            );
        });
    };
    const renderLink = (list) => {
        return list.map((item, index) => (
            Array.isArray(item) ? (
                <div key={index} className={cx('footer-link')}>
                    {item.map((data, i) =>(
                        <Button className={cx('link')} key={i} href={data.href}>{data.title}</Button>
                    ))}
                </div>
            ):(
                <span key={index} className={cx('copy-right')}>{item.copyRight}</span>
            )
        ));
    }
    return (
        <aside className={cx('wrapper')}>
            <div className={cx('wrapper-container')}>
                <div className={cx('wrapper-item')}>{renderItems()}</div>
                {currentUser?(
                    <>
                    </>
                ):(
                    <div className={cx('recomment-login')}>
                        <p className={cx('loginHint')}>{loginHintText}</p>
                        <Button outline full>Login</Button>
                    </div>
                )}    
                <div className={cx('footer-container')}>
                {renderLink(sidebarLink)}  
                </div>
            </div>
        </aside>
    );
}

export default Sidebar;
