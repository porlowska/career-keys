import { Button, Modal, ModalBody } from 'flowbite-react';
import { useState } from 'react';

export default function ErrorMsg({errorMessage}){
     const [openMsg, setOpenMsg] = useState(false);
     errorMessage !== '' ? setOpenMsg(true) : setOpenMsg(false)
    return (
        <>
        <Modal show={openMsg} size="sm" >
        <Modal.Header/>
        <Modal.Body>
            <div className="text-lg bg-red-500"></div> {errorMessage}
        </Modal.Body> 
        <Modal.Footer>
            <Button onClick={setOpenMsg(false)} className='text-sm'>Close</Button>
        </Modal.Footer>
        </Modal>
        </>
    )
}