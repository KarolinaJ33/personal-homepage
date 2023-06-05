import { useDispatch } from "react-redux";
import { Wrapper, Button, Icon } from "./styled";
import { toggleTheme } from "./themeSlice";

export const SwitchTheme = () => {
    const dispatch = useDispatch();

    return (
        <Wrapper>
            <Button 
                 onClick={() => dispatch(toggleTheme())}
            >Przełącz motyw
            <Icon />
            </Button>
        </Wrapper>
    );
};