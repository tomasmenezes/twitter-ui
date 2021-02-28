import styled, { css } from 'styled-components';
import { Cake, LocationOn } from '../../styles/Icons';
import Button from '../Button';

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    max-height: 100%;
    overflow-y: auto;

    // Mobile, fix bottom menu overlap
    margin-bottom: 49px;
    @media (min-width: 500px) {
        margin-bottom: 0;
    }

    scrollbar-width: none; // Firefox
    ::-webkit-scrollbar {
        display: none;
    }
`;

export const Banner = styled.div`
    flex-shrink: 0;

    width: 100%;
    height: min(33vh, 199px);

    background: var(--twitter);

    position: relative;
`;

export const Avatar = styled.div`
    height: max(45px, min(135px, 22vw));
    width: max(45px, min(135px, 22vw));

    border: 4px solid var(--primary); // 3.75px
    background: var(--gray);
    border-radius: 50%;

    position: absolute;
    bottom: max(-60px, -10vw);
    left: 15px;
    z-index: 1;

    &:hover {
        cursor: pointer;
        background: var(--gray-dark-hover);
    }
`;

export const ProfileData = styled.div`
    padding: min(calc(10vw + 7px), 67px) 16px 0;

    display: flex;
    flex-direction: column;

    position: relative;

    > h1 {
        font-weight: bold;
        font-size: 19px;
    }

    > h2  {
        font-weight: normal;
        font-size: 15px;

        color: var(--gray);
    }

    > p {
        font-size: 15px;
        margin-top: 11px;

        > a {
            text-decoration: none;
            color: var(--twitter);
        }
    }

    > ul {
        list-style: none;
        margin-top: 10px;
        margin-bottom: 10px;

        > li {
            display: flex;
            align-items: center;

            font-size: 15px;
            color: var(--gray);

            &:last-child {
                margin-top: 2px;
            }

            > svg {
                fill: var(--gray);
                margin-right: 5px;
            }
        }
    }
`;

const iconCSS = css`
    height: 20px;
    width: 20px;

    fill: var(--gray);
`;

export const LocationIcon = styled(LocationOn)`
    ${iconCSS}
`;

export const CakeIcon = styled(Cake)`
    ${iconCSS}
`;

export const Followers = styled.div`
    display: flex;

    > span {
        font-size: 15px;
        color: var(--gray);

        & + span {
            margin-left: 20px;
        }
    }
`;

export const EditButton = styled(Button)`
    position: absolute;
    top: 2vw;
    right: 16px; // 7px;

    padding: 4px 16px;
    font-size: 13px;

    @media (min-width: 320px) {
        top: 10px;
        padding: 10px 19px;
        font-size: 15px;
    }
`;
