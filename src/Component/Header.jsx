import React from 'react'
import styled from 'styled-components';
import { Avatar } from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import SearchIcon from '@material-ui/icons/Search';
import HelpOutline from '@material-ui/icons/HelpOutline';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase';

function Header() {
    const [user] = useAuthState(auth);

    return (
        <HeaderContainer>
            {/* HeaderLeft */}
            <HeaderLeft>
                <HeaderAvatar
                    onClick={() => auth.signOut()}
                    src={user?.photoURL}
                    alt={user?.DisplayName}
                />
                <AccessTimeIcon />
            </HeaderLeft>
            <HeaderSearch>
                <SearchIcon />
                <input type="text" placeholder='Search' />
            </HeaderSearch>
            <HeaderRight>
                <HelpOutline />
            </HeaderRight>
        </HeaderContainer>
    )
}

export default Header;

const HeaderSearch = styled.div`
    flex: 0.4;
    opacity:1;
    border-radius: 6px;
    background-color: #421f44;
    display: flex;
    color: gray;
    padding: 0 50px;
    border: 1px gray solid;

    >input {
        background-color: transparent;
        border:none;
        text-align: center;
        min-width: 30vw;
        outline: 0;
        color: white;
    }
`;

const HeaderContainer = styled.div`
    display: flex;
    position: fixed;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    padding:10px 0;
    background-color: var(--slack-color);
    color:white;
`;

const HeaderLeft = styled.div`
    flex: 0.3;
    display: flex;
    align-items: center;
    margin-left: 20px;

    > .MuiSvgIcon-root{
        margin-left:auto;
        margin-right: 30px;
    }
`;

const HeaderRight = styled.div`
    flex: 0.3;
    display:flex;
    align-items:flex-end;

    >.MuiSvgIcon-root {
        margin-left: auto;
        margin-right: 20px;
    }
`;

const HeaderAvatar = styled(Avatar)`
    cursor: pointer;

    :hover{
        opacity: 0.8;
    }
`;
