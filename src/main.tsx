import ReactDOM from 'react-dom/client'
import './index.css'
import 'react-toastify/dist/ReactToastify.css'
import { App } from './app/App.tsx'
import { Provider } from 'react-redux'
import { store } from './app/store.ts'
import {SkeletonThemeContext} from 'react-loading-skeleton/dist/SkeletonThemeContext';
import {SkeletonTheme} from 'react-loading-skeleton';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
      <SkeletonTheme baseColor="#293747" highlightColor="#17212D">
          <App />
      </SkeletonTheme>
  </Provider>
)
