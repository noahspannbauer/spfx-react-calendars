import { IAppContextState } from '../../models/IAppContextState';

export type Action = 
    | ['SET_INITIAL_CONTENT_TYPES', any[]]
    | ['SET_SELECTED_CONTENT_TYPES', any[]];

export const initialState: IAppContextState = {
    initialContentTypes: [],
    selectedContentTypes: []
};

export const reducer = (state: any, [type, payload]: Action): IAppContextState => {
    switch (type) {
        case 'SET_INITIAL_CONTENT_TYPES': {
            return {
                ...state,
                initialContentTypes: payload
            }
        }
        case 'SET_SELECTED_CONTENT_TYPES': {
            return {
                ...state,
                selectedContentTypes: payload
            }
        }
        default: {
            return state;
        }
    }
}