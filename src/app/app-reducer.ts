export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'

const initialState = {
    status: 'idle' as RequestStatusType,
    error: null as string | null,
}

export const appReducer = (state: AppStateType = initialState, action: ActionsType): AppStateType => {
    switch (action.type) {
        case 'APP/CHANGE-STATUS':
            return {...state, status: action.status}
        case 'APP/SET-ERROR':
            return {...state, error: action.error}
        default:
            return state
    }
}

// AC
export const setAppStatusAC = (status: RequestStatusType) => {
    return {
        type: 'APP/CHANGE-STATUS',
        status
    } as const
}

export const setAppErrorAC = (error: string) => {
    return {
        type: 'APP/SET-ERROR',
        error
    } as const
}
// types
type AppStateType = typeof initialState

export type ChangeAppStatusACType = ReturnType<typeof setAppStatusAC>
export type SetAppErrorACType = ReturnType<typeof setAppErrorAC>
type ActionsType = ChangeAppStatusACType | SetAppErrorACType

