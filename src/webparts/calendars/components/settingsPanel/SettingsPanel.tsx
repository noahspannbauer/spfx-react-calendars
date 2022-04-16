import React, { useEffect, useReducer } from 'react';
import styles from './SettingsPanel.module.scss';
import { reducer, initialState } from './reducer';
import Popup from '../popup/Popup';
import { Panel, PanelType } from 'office-ui-fabric-react/lib/Panel';
import { DefaultButton, IButtonStyles, PrimaryButton } from "office-ui-fabric-react/lib/Button";
import { Spinner, SpinnerSize } from 'office-ui-fabric-react/lib/Spinner';
import { Label } from 'office-ui-fabric-react/lib/Label';
import { Dropdown, IDropdownOption } from 'office-ui-fabric-react/lib/Dropdown';
import { useAppContext } from '../../hooks/appContext/UseAppContext';
import { useContentTypes } from '../../hooks/contentTypes/UseContentTypes';
import { useUserSettings } from '../../hooks/userSettings/UseUserSettings';
import { ColorPicker } from 'office-ui-fabric-react/lib/ColorPicker';
import { getColorFromString, IColor } from 'office-ui-fabric-react/lib/Color';
import { Modal } from 'office-ui-fabric-react/lib/Modal';

const SettingsPanel: React.FC = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const appContext = useAppContext()
    const { contentTypes } = useContentTypes();
    const { initialView, setInitialView, contentTypeSettings, setContentTypeColor, userSettingsError, saveUserSettings } = useUserSettings();
    const isSettingsPanelOpen: boolean = appContext.state.isSettingsPanelOpen;
    const options: IDropdownOption[] = [
        {
            key: 'dayGridMonth',
            text: 'Month'
        },
        {
            key: 'timeGridWeek',
            text: 'Week'
        },
        {
            key: 'timeGridDay',
            text: 'Day'
        }
    ]

    const onDismissPanel = () => {
        appContext.dispatch({ type: 'SET_IS_SETTINGS_PANEL_OPEN', payload: !isSettingsPanelOpen })
    }

    const onChangeInitialView = (event: React.FormEvent<HTMLDivElement>, item: IDropdownOption) => {
        setInitialView(item.key.toString())
    }

    const onOpenColorPicker = (selectedContentTypeId: string, selectedContentTypeName: string, colorPickerColor: IColor) => {
        dispatch({ type: 'SET_COLOR_PICKER_MODAL_OPEN', payload: { selectedContentTypeId: selectedContentTypeId, selectedContentTypeName: selectedContentTypeName, colorPickerColor: colorPickerColor, isColorPickerModalOpen: true }})
    }

    const onChangeColorPickerColor = (event: any, colorObj: IColor) => {
        dispatch({ type: 'SET_COLOR_PICKER_COLOR', payload: colorObj });
    }

    const onApplyColor = () => {
        setContentTypeColor(state.selectedContentTypeId, state.selectedContentTypeName, state.colorPickerColor)
        dispatch({ type: 'SET_COLOR_PICKER_MODAL_CLOSED', payload: false })
    }

    const onDismissColorPicker = () => {
        dispatch({ type: 'SET_COLOR_PICKER_MODAL_CLOSED', payload: false })
    }

    const onApplyUserSettings = () => {
        saveUserSettings();
        appContext.dispatch({ type: 'SET_IS_SETTINGS_PANEL_OPEN', payload: false })
    }

    useEffect(() => {
        dispatch({ type: 'SET_IS_LOADING', payload: true });

        if (initialView !== '') {
            dispatch({ type: 'SET_INITIAL_VIEW', payload: initialView })
        }

        dispatch({ type: 'SET_IS_LOADING', payload: false })
        
    }, [appContext.state.isSettingsPanelOpen])

    const BackgroundColorButton = (props) => {
        const buttonBackgroundColor: IColor = props.backgroundColor !== '' ? getColorFromString(props.backgroundColor) : getColorFromString('#FFFFFFFF');
        const buttonText: string = buttonBackgroundColor.str !== '#FFFFFFFF' ? buttonBackgroundColor.str : 'No color chosen'
        const buttonLabelColor: string = buttonText !== 'No color chosen' ? '#FFFFFF' : 'rgb(50, 49, 48)';
        const colorPickerColor: IColor = buttonBackgroundColor.str !== '#FFFFFFFF' ? buttonBackgroundColor : getColorFromString('#FFFFFF');
        const customButtonStyles: IButtonStyles = {
            root: {
                backgroundColor: buttonBackgroundColor.str,
                width: '146px'
            },
            rootHovered: {
                backgroundColor: buttonBackgroundColor.str
            },
            label: {
                color: buttonLabelColor
            }
        }
        
        return (
            <DefaultButton
                styles={customButtonStyles}
                text={buttonText}
                onClick={() => onOpenColorPicker(props.selectedContentTypeId, props.selectedContentTypeName, colorPickerColor)}
            />
        )
    }

    const ColorPickerModal = () => {
        return (
            <Modal
                isOpen={state.isColorPickerModalOpen}
                isBlocking={true}
            >
                <div className={styles.settingsPanel}>
                    <div className={styles.grid}>
                        <div className={styles.row}>
                            <div className={`${styles.col} ${styles.sm12}`}>      
                                <ColorPicker
                                    color={state.colorPickerColor}
                                    onChange={onChangeColorPickerColor}
                                    alphaType='none'
                                    showPreview={true}
                                />
                            </div>
                        </div>
                        <div className={styles.row}>
                            <div className={`${styles.col} ${styles.sm6}`}>
                                <PrimaryButton text='Apply' onClick={onApplyColor} />
                            </div>
                            <div className={`${styles.col} ${styles.sm6}`}>
                                <DefaultButton onClick={onDismissColorPicker} text='Cancel' />
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        )
    }

    const onRenderFooterContent = () => {
        return (
            <div className={styles.settingsPanel}>
                <div className={styles.grid} dir='ltr'>
                    <div className={styles.row}>
                        <div className={`${styles.col} ${styles.sm2}`}>
                            <PrimaryButton text="Apply" onClick={onApplyUserSettings} />
                        </div>
                        <div className={`${styles.col} ${styles.sm10}`}>
                            <DefaultButton text="Cancel" onClick={onDismissPanel} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <React.Fragment>
            <Panel
                type={PanelType.medium}
                headerText='Settings'
                isOpen={isSettingsPanelOpen}
                onDismiss={onDismissPanel}
                onRenderFooterContent={onRenderFooterContent}
            >
                <div className={styles.settingsPanel}>
                    {state.isLoading && 
                        <div className={styles.grid}>
                            <div className={styles.row}>
                                <div className={`${styles.col} ${styles.sm12}`}>
                                    <Spinner size={SpinnerSize.large} label='Loading settings...' />
                                </div>
                            </div>
                        </div>
                    }
                    {state.isLoading === false && 
                        <div className={styles.grid} dir='ltr'>
                            <div className={`${styles.row} ${styles.settingsRow} ${styles.marginBottom}`}>
                                <div className={`${styles.col} ${styles.sm6}`}>
                                    <Label>Initial View:</Label>
                                </div>
                                <div className={`${styles.col} ${styles.sm6}`}>
                                    <Dropdown placeholder='Select a view' defaultSelectedKey={initialView} selectedKey={initialView} options={options} onChange={onChangeInitialView} />
                                </div>
                            </div>
                            <div className={`${styles.row} ${styles.settingsRow}`}>
                                <div className={`${styles.col} ${styles.sm6}`}>
                                    <Label>Content Type</Label>
                                </div>
                                <div className={`${styles.col} ${styles.sm6} ${styles.textAlignRight}`}>
                                    <Label>Event Background Color</Label>
                                </div>
                            </div>
                            {contentTypes.map((contentType) => {
                                let filteredContentTypeSettings: any[] = [];
                                let backgroundColor = '';

                                if (contentTypeSettings) {
                                    filteredContentTypeSettings = contentTypeSettings.filter((contentTypeSetting) => {
                                        if (contentTypeSetting.contentTypeName === contentType.name) {
                                            return contentTypeSetting;
                                        }
                                    });

                                    if (filteredContentTypeSettings.length > 0) {
                                        backgroundColor = filteredContentTypeSettings[0].backgroundColor
                                    } 
                                }

                                return (
                                    <div className={`${styles.row} ${styles.settingsRow}`} key={contentType.id}>
                                        <div className={`${styles.col} ${styles.sm6} ${styles.marginTop}`} >
                                            {contentType.name}
                                        </div>
                                        <div className={`${styles.col} ${styles.sm6} ${styles.textAlignRight}`}>
                                            <BackgroundColorButton selectedContentTypeId={contentType.id} selectedContentTypeName={contentType.name} backgroundColor={backgroundColor} />
                                        </div>
                                    </div>
                                )
                            })}
                            <ColorPickerModal />
                        </div>
                    }
                </div>
            </Panel>
            {appContext.state.isPopupHidden === false &&
                <Popup
                    popupType={state.popUp.popupType}
                    popupHeading={state.popUp.popupHeading}
                    popupMessage={state.popUp.popupMessage}
                />
            }
        </React.Fragment>
    )
}

export default SettingsPanel;