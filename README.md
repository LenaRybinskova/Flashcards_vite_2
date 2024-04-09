# hw3: Обработка ошибок try-catch async-await

```
export const updateDeckTC = (params: UpdateDeckParams) => async (dispatch: Dispatch) => {
    try {
        const res = await decksAPI.updateDeck(params)
        dispatch(updateDeckAC(res.data))
    } catch (e) {
        let errorMessage: string
        // это проверка на принадолежность ошибки объекту ошибки Аксиос, если да - значит что то асинхронное
        if (isAxiosError<ServerErrorType>(e)) {
            //если у объекта ошибки Аксиос есть св-во response - значит какой то ответ сервера есть, если нет response - значит ош на нашей стороне - интернет отвал
            errorMessage = e.response ? e.response.data.errorMessages[0].message : e.message
        } 
        // простая синхр нативная ошибка, когда вообще до запроса дело не дошло
        else {
            errorMessage = (e as Error).message 
        }
        console.log(errorMessage)
    }
}
```

# hw2: добавлен disabled для кнопок update, delete на время выполн асиних операций
( сделано с помощью useState )

# hw1: добавлен loader App для fetchDecksTC()

# Дополнительный урок 02 для спринта 04 (Четверг)

- [Swagger документация](https://api.flashcards.andrii.es/docs)
- [react-toastify demo](https://fkhadra.github.io/react-toastify/introduction/)
- [react-loading-skeleton](https://github.com/dvtng/react-loading-skeleton#readme)
- [Пример готового проекта](https://04-sprint-02-add-lesson-for-mentor.vercel.app/)