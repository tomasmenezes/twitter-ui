import React from 'react';
import Feed from '../Feed';

import {
    Container,
    Banner,
    Avatar,
    ProfileData,
    LocationIcon,
    CakeIcon,
    Followers,
    EditButton,
} from './styles';

const ProfilePage = () => {
    return (
        <Container>
            <Banner>
                <Avatar />
            </Banner>

            <ProfileData>
                <EditButton outlined>Edit profile</EditButton>

                <h1>Username</h1>
                <h2>@username</h2>

                <p>
                    Test account <a href=".">@test_page</a>
                </p>

                <ul>
                    <li>
                        <LocationIcon />
                        Location
                    </li>
                    <li>
                        <CakeIcon />
                        Born on 22nd June 2050
                    </li>
                </ul>

                <Followers>
                    <span>
                        Following <strong>220</strong>
                    </span>
                    <span>
                        <strong>2839 </strong> Followers
                    </span>
                </Followers>
            </ProfileData>

            <Feed />
        </Container>
    );
};

export default ProfilePage;
