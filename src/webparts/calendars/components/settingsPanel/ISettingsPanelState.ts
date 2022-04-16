import { IColor } from "office-ui-fabric-react/lib/Color";
import { IPopupProps } from "../popup/IPopupProps";

export interface ISettingsPanelState {
    initialView: string;
    selectedContentTypeId: string;
    selectedContentTypeName: string;
    isLoading: boolean;
    colorPickerColor: IColor;
    isColorPickerModalOpen: boolean;
    popUp: IPopupProps;
}