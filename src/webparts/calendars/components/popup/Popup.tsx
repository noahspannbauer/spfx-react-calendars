import React from 'react';
import { IPopupProps } from './IPopupProps';
import { Dialog, DialogType, DialogFooter } from 'office-ui-fabric-react/lib/Dialog';
import { PrimaryButton } from 'office-ui-fabric-react/lib/Button';
import { useAppContext } from '../../hooks/appContext/UseAppContext';

const Popup: React.FC<IPopupProps> = (props: IPopupProps) => {
    const appContext = useAppContext();
    const dialogContentProps = {
        type: DialogType.largeHeader,
        title: props.popupHeading,
        subText: props.popupMessage
    }

    const onHideDialog = () => {
        appContext.dispatch({ type: 'SET_IS_POPUP_HIDDEN', payload: true })
    }

    return (
        <Dialog
            hidden={appContext.state.isPopupHidden}
            dialogContentProps={dialogContentProps}
            onDismiss={onHideDialog}
        >
            <DialogFooter>
                <PrimaryButton text='OK' onClick={onHideDialog}/>
            </DialogFooter>
        </Dialog>
    )
}

export default Popup;