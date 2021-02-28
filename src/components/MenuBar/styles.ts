import styled, { css } from 'styled-components';
import {
    Home,
    Notifications,
    Email,
    FavoriteBorder,
    Person,
    ExitToApp,
    Rocket,
} from '../../styles/Icons';

export const Container = styled.div`
    display: none;

    @media (min-width: 500px) {
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        position: sticky;
        top: 0;
        left: 0;

        padding: 9px 19px 20px;

        max-height: 100vh;
        overflow-y: auto;
    }
`;

export const Topside = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 1280px) {
        align-items: flex-start;
    }
`;

export const Logo = styled(Rocket)`
    height: 35px;
    width: 35px;

    > path {
        fill: var(--white);
    }
`;

export const MenuButton = styled.button`
    display: flex;
    align-items: center;
    flex-shrink: 0;

    padding: 8.5px; // 8.25
    border-radius: 50%;

    > span {
        display: none;
    }

    @media (min-width: 1280px) {
        > span {
            display: inline;
            margin-left: 19px;
            font-weight: bold;
            font-size: 19px;
        }

        &:not(.simple) {
            border-radius: 25px;
            padding-right: 15px;
        }
    }

    // padding: 8.25px 0;
    outline: 0;

    & + button:first-child {
        margin-bottom: 20px;
    }

    & + button {
        margin-top: 16.5px;
    }

    & + button:last-child {
        margin-top: 33px;

        height: 40px;
        width: 40px;

        > span {
            display: none;
        }

        @media (min-width: 1280px) {
            height: unset;
            width: 100%;

            > span {
                display: inline;
            }
        }
    }

    cursor: pointer;
    // border-radius: 25px;

    &:hover {
        background: var(--twitter-dark-hover);
    }

    &:hover,
    &.active {
        > span,
        svg {
            color: var(--twitter);
            fill: var(--twitter);
        }
    }
`;

const iconCSS = css`
    height: 30px;
    width: 30px;

    flex-shrink: 0;
    color: var(--white);
`;

export const HomeIcon = styled(Home)`
    ${iconCSS}
`;

export const BellIcon = styled(Notifications)`
    ${iconCSS}
`;

export const EmailIcon = styled(Email)`
    ${iconCSS}
`;

export const FavoriteIcon = styled(FavoriteBorder)`
    ${iconCSS}
`;

export const ProfileIcon = styled(Person)`
    ${iconCSS}
`;
