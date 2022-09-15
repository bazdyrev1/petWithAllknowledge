import React, { FC } from "react";
import MaterialTabs from "../../components/MaterialTabs";
import { MainIdea, NameBlog, Wrapper, AboutBlogBox, ContentBox, ColorWords } from "./style";

const Home: FC = (): JSX.Element => {
    return (
        <Wrapper>
            <AboutBlogBox>
                <NameBlog>
                    Techno news for <ColorWords>everyone</ColorWords>!
                </NameBlog>

                <MainIdea>
                    Tell us how <ColorWords>you</ColorWords>see it. Here you are the  <ColorWords>main</ColorWords> observer!
                </MainIdea>
            </AboutBlogBox>

            <ContentBox>
                <MaterialTabs />
            </ContentBox>
        </Wrapper>
    )
}

export default Home;