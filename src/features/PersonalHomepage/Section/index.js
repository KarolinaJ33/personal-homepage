import { Wrapper, Header, Content, List } from "./styled";
import { nanoid } from "@reduxjs/toolkit";

export const Section = ({ title, skills }) => (
    <Wrapper>
        <Header>{title}</Header>
        <Content>
            {skills.map((skill) => (
                <List key={nanoid()}>{skill}</List>
            ))}
        </Content>
    </Wrapper>
);
