import * as React from 'react';
import { useAppContext } from '../../hooks/useAppContext/UseAppContext';
import { Modal } from 'office-ui-fabric-react/lib/Modal';

const EventModal: React.FC<{}> = () => {
    const appContext = useAppContext();

    const onDismissEventModal = () => {
        appContext.setEventModal();
    }

    return (
        <Modal
            isOpen={appContext.state.isEventModalOpen}
            onDismiss={onDismissEventModal}
        >
            Blah
        </Modal>
    );
}

export default EventModal