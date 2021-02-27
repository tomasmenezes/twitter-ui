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

const Tweet = () => {
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
                        <strong>Username</strong>
                        <span>@username</span>
                        <Dot />
                        <time>27th Jun</time>
                    </Header>

                    <Description>To the moon! 🚀💎</Description>
                    <ImageContent />
                    <Icons>
                        <Status>
                            <CommentIcon />
                            18
                        </Status>
                        <Status>
                            <RetweetIcon />
                            294
                        </Status>
                        <Status>
                            <LikeIcon />
                            56
                        </Status>
                    </Icons>
                </Content>
            </Body>
        </Container>
    );
};

export default Tweet;
