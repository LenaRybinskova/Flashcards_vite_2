import {isAxiosError} from 'axios';
import {setAppErrorAC} from '../../app/app-reducer';
import {Dispatch} from 'redux';

export const handleError = (e: unknown, dispatch: Dispatch) => {
    let errorMessage: string
// это проверка на принадолежность ошибки объекту ошибки Аксиос, если да - значит что то асинхронное
    if (isAxiosError<ServerErrorType>(e)) {
        //если у объекта ошибки Аксиос есть св-во response - значит какой то ответ сервера есть, если нет response - значит ош на нашей стороне - интернет отвал
        errorMessage = e.response ? e.response.data.errorMessages[0].message : e.message
    } else {
        errorMessage = (e as Error).message // простая синхр нативная ошибка, когда вообще до запроса дело не дошло
    }
    dispatch(setAppErrorAC(errorMessage))
}

//типиз ответа сервера
type ServerErrorType = {
    errorMessages: Array<{ field: string, message: string }>
}