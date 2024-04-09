import {Dispatch} from 'redux'
import {decksAPI, UpdateDeckParams} from './decks-api.ts'
import {addDeckAC, deleteDeckAC, setDecksAC, updateDeckAC} from './decks-reducer.ts'
import {setAppStatusAC} from '../../app/app-reducer';
import axios from 'axios';
import {handleError} from '../../common/utils/handle-error';

export const fetchDecksTC = () => async (dispatch: Dispatch) => {
    dispatch(setAppStatusAC('loading'))
    try {
        const res = await decksAPI.fetchDecks()
        dispatch(setDecksAC(res.data.items))
        dispatch(setAppStatusAC('succeeded'))
    } catch (e) {
        if (axios.isAxiosError(e)) {
            dispatch(setAppStatusAC('failed'))
        }
        dispatch(setAppStatusAC('failed'))
    }

}

export const addDeckTC = (name: string) => async (dispatch: Dispatch) => {
    return decksAPI.addDeck(name).then((res) => {
        dispatch(addDeckAC(res.data))
    })
}

export const deleteDeckTC = (id: string) => async (dispatch: Dispatch) => {
    return decksAPI.deleteDeck(id).then((res) => {
        dispatch(deleteDeckAC(res.data.id))
    })
}

export const updateDeckTC = (params: UpdateDeckParams) => async (dispatch: Dispatch) => {
    try {
        /*        throw new Error("текст синхронной ошибки")*/
        const res = await decksAPI.updateDeck(params)
        dispatch(updateDeckAC(res.data))
    } catch (e) {
        console.log(e)
        handleError(e, dispatch)
        /*let errorMessage: string
        // это проверка на принадолежность ошибки объекту ошибки Аксиос, если да - значит что то асинхронное
        if (isAxiosError<ServerErrorType>(e)) {
            //если у объекта ошибки Аксиос есть св-во response - значит какой то ответ сервера есть, если нет response - значит ош на нашей стороне - интернет отвал
            errorMessage = e.response ? e.response.data.errorMessages[0].message : e.message
        } else {
            errorMessage = (e as Error).message // простая синхр нативная ошибка, когда вообще до запроса дело не дошло
        }
        console.log(errorMessage)*/
    }
}


