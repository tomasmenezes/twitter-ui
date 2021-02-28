import styled, { css } from 'styled-components';

import { Chat, Retweet, Favorite } from '../../styles/Icons';

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    padding: 14px 16px;

    border-bottom: 1px solid var(--outline);

    min-height: 100px;
    max-width: 100%;

    background: var(--primary);
    // transition: background 0.15s ease-out 0s;

    &:hover {
        cursor: pointer;
        background: rgba(10, 10, 10, 1);
    }
`;

export const Retweeted = styled.div`
    display: flex;
    align-items: center;

    font-size: 13px;
    color: var(--gray);

    &.not-retweeted {
        display: none;
    }
`;

export const Body = styled.div`
    display: flex;
    margin-top: 3px;

    height: 100%;
    position: relative;
`;

export const Avatar = styled.div`
    height: 49px;
    width: 49px;

    border-radius: 50%;
    flex-shrink: 0;

    background: var(--gray);

    position: absolute;
    top: 0;
    left: 0;

    &:hover {
        background: var(--gray-dark-hover);
    }
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;

    width: 100%;
    margin-top: 2px;
    padding-left: 59px;
`;

export const Header = styled.div`
    display: flex;
    align-items: center;

    font-size: 15px;
    white-space: nowrap;

    > strong {
        margin-right: 5px;
    }

    > span,
    time {
        color: var(--gray);
    }

    > strong,
    span {
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }
`;

export const Dot = styled.div`
    background: var(--gray);

    height: 3px;
    width: 3px;

    border-radius: 50%;
    margin: 0 10px;
`;

export const Description = styled.p`
    font-size: 14px;
    margin-top: 4px;
`;

export const ImageContent = styled.div`
    margin-top: 12px;
    height: min(285px, max(175px, 41vw));
    // min-width: max(100px, 100%);
    width: 100%;

    background: var(--outline);
    border-radius: 14px;

    cursor: pointer;
    &:hover {
        opacity: 0.8;
    }
`;

export const Icons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;

    margin: 11px auto 0;
    width: 100%;

    @media (min-width: 300px) {
        width: 63%;
    }

    > div {
        cursor: pointer;

        &:hover {
            opacity: 0.7;
        }
    }
`;

export const Status = styled.div`
    display: flex;
    align-items: center;

    font-size: 14px;
    // color: var(--gray);

    > svg {
        margin-right: 5px;
    }

    &:nth-child(1) {
        &,
        > svg path {
            color: var(--gray);
        }
    }

    &:nth-child(2) {
        color: var(--retweet);

        > svg path {
            fill: var(--retweet);
        }
    }

    &:nth-child(3) {
        color: var(--like);

        > svg {
            fill: var(--like);
        }
    }
`;

export const SmallRetweetIcon = styled(Retweet)`
    height: 16px;
    width: 16px;

    transform: scale(0.9, 1);

    padding: 0 calc((16px - 0.9 * 16px) / 2);

    margin-left: 35px;
    margin-right: 9px;

    > path {
        fill: var(--gray);
    }
`;

const iconCSS = css`
    height: 19px;
    width: 19px;
`;

export const RetweetIcon = styled(Retweet)`
    ${iconCSS}
`;

export const CommentIcon = styled(Chat)`
    ${iconCSS}
`;

export const LikeIcon = styled(Favorite)`
    ${iconCSS}
`;
