import styled from 'styled-components'
import Avatar from '@mui/material/Avatar';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';

function Sidebar() {
    return (
        <Container>
            <Header>
                <Logo>
                    <UserAvatar />
                </Logo>
                
                <IconsContainer>
                    <Chat />
                    <Menu />
                </IconsContainer>
            </Header>
        </Container>
    )
}

export default Sidebar


const Container = styled.div`

`
const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    width: 15%;
`

const UserAvatar = styled(Avatar)`
    margin: 10px;
    cursor: pointer;
`

const IconsContainer = styled.div`

`

const Chat = styled(ChatIcon)`
    cursor: pointer;
    margin-right: 15px;
`

const Menu = styled(MoreVertIcon)`
    cursor: pointer;
`

const Logo = styled.div`
    flex: 1px;
`