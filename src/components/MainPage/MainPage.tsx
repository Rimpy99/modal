import Modal from '../Modal/Modal';
import Button from '@mui/material/Button';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    justify-content: center;
    padding: 50px;
`;

const MainPage = () => {

    return(
        <Container>
            <Button variant='contained'>Open Modal</Button>
            {/* <Modal/> */}
        </Container>
    )
};

export default MainPage;