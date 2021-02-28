import React from 'react';

import Button from '../Button';
import {
    Container,
    Topside,
    Logo,
    MenuButton,
    HomeIcon,
    BellIcon,
    EmailIcon,
    FavoriteIcon,
    ProfileIcon,
    Botside,
    Avatar,
    ProfileData,
    ExitIcon,
} from './styles';

const MenuBar = () => {
    return (
        <Container>
            <Topside>
                <MenuButton className="simple">
                    <Logo />
                </MenuButton>
                <MenuButton>
                    <HomeIcon />
                    <span>Home</span>
                </MenuButton>

                <MenuButton>
                    <BellIcon />
                    <span>Notifications</span>
                </MenuButton>

                <MenuButton>
                    <EmailIcon />
                    <span>Messages</span>
                </MenuButton>

                <MenuButton>
                    <FavoriteIcon />
                    <span>Favorites</span>
                </MenuButton>

                <MenuButton className="active">
                    <ProfileIcon />
                    <span>Profile</span>
                </MenuButton>

                <Button>
                    <span>Tweet</span>
                </Button>
            </Topside>

            <Botside>
                <Avatar />

                <ProfileData>
                    <strong>ReallyReallybigUsername</strong>
                    <span>@username</span>
                </ProfileData>

                <ExitIcon />
            </Botside>
        </Container>
    );
};

export default MenuBar;
