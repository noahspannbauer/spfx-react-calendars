import { IColor, getColorFromString } from 'office-ui-fabric-react/lib/Color';
import { IPopupProps } from '../popup/IPopupProps';
import { ISettingsPanelState } from './ISettingsPanelState';

export type Action = 
    | { type: 'SET_INITIAL_VIEW'; payload: string }
    | { type: 'SET_SELECTED_CONTENT_TYPE'; payload: { selectedContentTypeId: string, selectedContentTypeName: string }}
    | { type: 'SET_IS_LOADING'; payload: boolean }
    | { type: 'SET_COLOR_PICKER_COLOR'; payload: IColor }
    | { type: 'SET_COLOR_PICKER_MODAL_OPEN'; payload: { selectedContentTypeId: string, selectedContentTypeName: string, colorPickerColor: IColor; isColorPickerModalOpen: boolean }}
    | { type: 'SET_COLOR_PICKER_MODAL_CLOSED'; payload: boolean }
    | { type: 'SET_POPUP'; payload: IPopupProps };

const initialColorPickerColor: IColor = getColorFromString('#ffffff');

export const initialState: ISettingsPanelState = {
    initialView: undefined,
    selectedContentTypeId: '',
    selectedContentTypeName: '',
    isLoading: false,
    colorPickerColor: initialColorPickerColor,
    isColorPickerModalOpen: false,
    popUp: undefined
}

export const reducer = (state: ISettingsPanelState, action: Action): ISettingsPanelState => {
    switch (action.type) {
        case 'SET_INITIAL_VIEW': {
            return {
                ...state,
                initialView: action.payload
            }
        }
        case 'SET_SELECTED_CONTENT_TYPE': {
            return {
                ...state,
                selectedContentTypeId: action.payload.selectedContentTypeId,
                selectedContentTypeName: action.payload.selectedContentTypeName
            }
        }
        case 'SET_IS_LOADING': {
            return {
                ...state,
                isLoading: action.payload
            }
        }
        case 'SET_COLOR_PICKER_COLOR': {
            return {
                ...state,
                colorPickerColor: action.payload
            }
        }                                                                                                                                                                                                                                                                                                                                                                                             
        case 'SET_COLOR_PICKER_MODAL_OPEN': {
            return {
                ...state,
                selectedContentTypeId: action.payload.selectedContentTypeId,
                selectedContentTypeName: action.payload.selectedContentTypeName,
                colorPickerColor: action.payload.colorPickerColor,
                isColorPickerModalOpen: action.payload.isColorPickerModalOpen
            }
        }
        case 'SET_COLOR_PICKER_MODAL_CLOSED': {
            return {
                ...state,
                isColorPickerModalOpen: action.payload
            }
        }
        case 'SET_POPUP': {
            return {
              ...state,
              popUp: action.payload
            };
          }
        default: {
            return state;
        }
    }
}