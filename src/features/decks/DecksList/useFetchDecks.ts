import { useAppDispatch, useAppSelector } from '../../../app/store.ts'
import { selectDecks } from '../decks-selectors.ts'
import {useEffect, useLayoutEffect, useState} from 'react'
import { fetchDecksTC } from '../decks-thunks.ts'

export const useFetchDecks = () => {
  const dispatch = useAppDispatch()
  const decks = useAppSelector(selectDecks)
  const [isLoading, setIsLoading] = useState(true)

  // если исп useEffect, то надо тогда иниц стейт isLoading делать true
  // либо заменить useEffect на useLayoutEffect (он сраб до возврата JSX)
  useLayoutEffect(() => {
/*    setIsLoading(true)*/
    dispatch(fetchDecksTC()).finally(()=>setIsLoading(false))
  }, [dispatch])

  return {decks,isLoading}
}
