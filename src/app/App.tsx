import './App.css'
import {Decks} from '../features/decks/Decks.tsx'
import {GlobalError} from './GlobalError/GlobalError.tsx'
import {LinearLoader} from '../common/components/Loader/LinearLoader';
import {useAppSelector} from './store';
import {RequestStatusType} from './app-reducer';
import {selectAppStatus} from './app-selectors';

export const App = () => {
    const status = useAppSelector<RequestStatusType>(selectAppStatus)

    return (
        <div>
            <List<string> item={["Lena", "Sasha"]} renderItem={(item)=>item.toUpperCase()}/>
            <List<number> item={[1, 2]} renderItem={(item)=>item.toFixed()}/>
            {status==='loading' && <LinearLoader/>}
            <Decks/>
            <GlobalError/>
        </div>
    )
}


type ListType<T> = {
    item: T[],
    renderItem: (item: T) => ReactNode
}

function List<T>(props: ListType<T>) {
    return(<ul>
        {props.item.map(i => <li>{props.renderItem(i)}</li>)}
    </ul>)

}
