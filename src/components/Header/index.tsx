import { iUserInput } from "../../interfaces"
import InputSearch from "./InputSearch"
import Logo from "./Logo"
import StyledHeader from "./style"

export const Header = ({ setUserInput }: iUserInput) => {
    return(
        <StyledHeader>
            <Logo/>

            <InputSearch setUserInput={setUserInput}/>
        </StyledHeader>
    )
}