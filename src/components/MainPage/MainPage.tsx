import { useState } from 'react';
import { Button, Dialog, DialogContent, DialogContentText, DialogActions } from '@mui/material';
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
            <Dialog
                open={open}
                onClose={() => setOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <DialogContent>
                    <DialogContentText>
                        Click to accept leaving the page.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Link to="/newPage">
                        <Button>Open new page</Button>
                    </Link>
                </DialogActions>
            </Dialog>
        </Container>
    )
};

export default MainPage;