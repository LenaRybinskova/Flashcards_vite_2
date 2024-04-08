import './App.css'
import {Decks} from '../features/decks/Decks.tsx'
import {GlobalError} from './GlobalError/GlobalError.tsx'
import {LinearLoader} from '../common/components/Loader/LinearLoader';
import {useAppSelector} from './store';
import {RequestStatusType} from './app-reducer';

export const App = () => {
    const status = useAppSelector<RequestStatusType>(state => state.app.status)

    return (
        <div>
            {status==='loading' && <LinearLoader/>}
            <Decks/>
            <GlobalError/>
        </div>
    )
}
