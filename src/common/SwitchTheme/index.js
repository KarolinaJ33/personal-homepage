import { useDispatch, useSelector } from "react-redux";
import { Wrapper, Button, Icon, Text, Box, IconWrapper } from "./styled";
import { selectDarkTheme, toggleTheme } from "./themeSlice";

export const SwitchTheme = () => {
    const dispatch = useDispatch();
    const isDarkTheme = useSelector(selectDarkTheme);

    return (
        <Wrapper>
            <Button onClick={() => dispatch(toggleTheme())}>
                <Text>Dark mode {isDarkTheme ? "on" : "off"}</Text>
                <Box>
                    <IconWrapper moveToRight={isDarkTheme}>
                        <Icon />
                    </IconWrapper>
                </Box>
            </Button>
        </Wrapper>
    );
};
