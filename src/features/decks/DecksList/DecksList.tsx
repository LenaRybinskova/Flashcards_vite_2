import s from './DecksList.module.css'
import 'react-loading-skeleton/dist/skeleton.css'
import {DeckItem} from './DeckItem/DeckItem.tsx'
import {useFetchDecks} from './useFetchDecks.ts'
import Skeleton from 'react-loading-skeleton';
import {DeckItemSkeleton} from './DeckItem/DeckItemSkeleton';

export const DecksList = () => {
    const {decks, isLoading} = useFetchDecks()
    return (
        <>
            {/* вариант с исп скелетона библиотечного*/}
            {/* {isLoading && decks.length===0 && <Skeleton height={100} count={10} style={{marginBottom: '10px'}}/>}*/}

            {/* вариант с исп скелетона кастомного с частчн исп библиотечного*/}
            {isLoading && decks.length===0 && <DeckItemSkeleton count={10}/>}
            <ul className={s.list}>
                {decks.map((deck) => (
                    <DeckItem key={deck.id} deck={deck}/>
                ))}
            </ul>
        </>
    )
}
