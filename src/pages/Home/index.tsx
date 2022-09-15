import React, { FC } from "react";
import MaterialTabs from "../../components/MaterialTabs";
import { MainIdea, NameBlog, Wrapper, AboutBlogBox, ContentBox } from "./style";

const Home: FC = (): JSX.Element => {
    return (
        <Wrapper>
            <AboutBlogBox>
                <NameBlog>
                    Techno news for everyone!
                </NameBlog>

                <MainIdea>
                    Tell us how you see it. Here you are the main observer!
                </MainIdea>
            </AboutBlogBox>

            <ContentBox>
                <MaterialTabs />
            </ContentBox>
        </Wrapper>
    )
}

export default Home;