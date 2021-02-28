import React from 'react';
import {
    Container,
    Retweeted,
    SmallRetweetIcon,
    Body,
    Avatar,
    Content,
    Header,
    HeaderInfo,
    Dot,
    OptionsIcon,
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
    isRetweet?: boolean;
    comments?: number;
    retweets?: number;
    likes?: number;
}

const Tweet = ({
    name,
    username,
    date,
    description,
    isRetweet,
    comments,
    retweets,
    likes,
}: tweetProps) => {
    return (
        <Container>
            <Retweeted className={isRetweet ? '' : 'not-retweeted'}>
                <SmallRetweetIcon />
                You retweeted
            </Retweeted>

            <Body>
                <Avatar />

                <Content>
                    <Header>
                        <HeaderInfo>
                            <strong>{name ? name : 'Username'}</strong>
                            <span>@{username ? username : 'username'}</span>
                            <Dot />
                            <time>{date ? date : '27th Jun'}</time>
                        </HeaderInfo>

                        <button>
                            <OptionsIcon />
                        </button>
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
