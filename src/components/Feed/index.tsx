import React from 'react';
import Tweet from '../Tweet';

import { Container, Tab, Tweets } from './styles';

const Feed = () => {
    return (
        <Container>
            <Tab>Tweets</Tab>

            <Tweets>
                <Tweet date="4h" />
                <Tweet
                    name="Elon Musk"
                    username="stonks"
                    description="DOGE is the future boys ⚡️"
                    isRetweet={true}
                    comments={1337}
                    retweets={666}
                    likes={30035}
                />
                {/* <Tweet />
                <Tweet />
                <Tweet /> */}
            </Tweets>
        </Container>
    );
};

export default Feed;
