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
            <Button variant='contained' color="primary" onClick={() => setOpen(true)}>Open new page</Button>
            <Dialog
                open={open}
                onClose={() => setOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <DialogContent>
                    <DialogContentText>
                        Are you sure you want to leave this page?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpen(false)}>Cancel</Button>
                    <Link to="/newPage">
                        <Button>Open new page</Button>
                    </Link>
                </DialogActions>
            </Dialog>
        </Container>
    )
};

export default MainPage;