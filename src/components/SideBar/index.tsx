import React from 'react';
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
                <List title="News" elements={[<News />, <News />, <News />]} />
            </Body>
        </Container>
    );
};

export default SideBar;
