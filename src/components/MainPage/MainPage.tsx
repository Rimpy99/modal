import { useState } from 'react';
import { Button, Modal } from '@mui/material';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
    display: flex;
    justify-content: center;
    padding: 50px;
`;

const Box = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const MainPage = () => {
    const [open, setOpen] = useState<boolean>(false);

    return(
        <Container>
            <Button variant='contained' color="primary" onClick={() => setOpen(true)}>Open Modal</Button>
            <Modal
                open={open}
                onClose={() => setOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box>
                    Click to accept leaving the page.
                    <Link to="/newPage">Open new page</Link>
                </Box>
            </Modal>
        </Container>
    )
};

export default MainPage;