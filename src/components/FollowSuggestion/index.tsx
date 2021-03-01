import React from 'react';
import { Container, Avatar, Info, FollowButton } from './styles';

interface Props {
    name: string;
    nickname: string;
}

const FollowSuggestion = ({ name, nickname }: Props) => {
    return (
        <Container>
            <div>
                <Avatar />

                <Info>
                    <strong>{name}</strong>
                    <span>{nickname}</span>
                </Info>
            </div>

            <FollowButton outlined>Follow</FollowButton>
        </Container>
    );
};

export default FollowSuggestion;
