import React from 'react';
import Sticky from 'react-stickynode';
import List from '../List';
import FollowSuggestion from '../FollowSuggestion';
import News from '../News';
import {
    Container,
    SearchWrapper,
    SearchInput,
    SearchIcon,
    Body,
} from './styles';

const SideBar = () => {
    return (
        <Container>
            <SearchWrapper>
                <SearchInput placeholder="Search Twitter" />
                <SearchIcon />
            </SearchWrapper>

            <Sticky>
                <Body>
                    <List
                        title="For you"
                        elements={[
                            <FollowSuggestion
                                name="John Doe"
                                nickname="@johndoe"
                            />,
                            <FollowSuggestion
                                name="Clark Kent"
                                nickname="@krypton"
                            />,
                            <FollowSuggestion
                                name="Bruce Wayne"
                                nickname="@bats"
                            />,
                        ]}
                    />
                    <List
                        title="News"
                        elements={[<News />, <News />, <News />]}
                    />
                    <List
                        title="News"
                        elements={[<News />, <News />, <News />]}
                    />
                    <List
                        title="News"
                        elements={[<News />, <News />, <News />]}
                    />
                </Body>
            </Sticky>
        </Container>
    );
};

export default SideBar;
