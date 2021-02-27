import React from 'react';
import {
    Container,
    Retweeted,
    SmallRetweetIcon,
    Body,
    Avatar,
    Content,
    Header,
    Dot,
    Description,
    ImageContent,
    Icons,
    Status,
    CommentIcon,
    RetweetIcon,
    LikeIcon,
} from './styles';

interface tweetProps {
    name?: string;
    username?: string;
    date?: string;
    description?: string;
    comments?: number;
    retweets?: number;
    likes?: number;
}

const Tweet = ({
    name,
    username,
    date,
    description,
    comments,
    retweets,
    likes,
}: tweetProps) => {
    return (
        <Container>
            <Retweeted>
                <SmallRetweetIcon />
                You retweeted
            </Retweeted>

            <Body>
                <Avatar />

                <Content>
                    <Header>
                        <strong>{name ? name : 'Username'}</strong>
                        <span>@{username ? username : 'username'}</span>
                        <Dot />
                        <time>{date ? date : '27th Jun'}</time>
                    </Header>

                    <Description>
                        {description ? description : 'To the moon! 🚀💎'}
                    </Description>
                    <ImageContent />
                    <Icons>
                        <Status>
                            <CommentIcon />
                            {comments ? comments : 18}
                        </Status>
                        <Status>
                            <RetweetIcon />
                            {retweets ? retweets : 294}
                        </Status>
                        <Status>
                            <LikeIcon />
                            {likes ? likes : 56}
                        </Status>
                    </Icons>
                </Content>
            </Body>
        </Container>
    );
};

export default Tweet;
