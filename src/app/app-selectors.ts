import {AppRootState} from './store';

export const selectAppStatus = (state: AppRootState) => {
    return state.app.status
}