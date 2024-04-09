import { DecksList } from './DecksList/DecksList.tsx'
import { AddNewDeckForm } from './AddNewDeckForm/AddNewDeckForm.tsx'

export const Decks = () => {
  return (
    <div>
      <h1>Decks 🐈</h1>
      <AddNewDeckForm />
      <DecksList /> {/*эта компон рендерит карточки, поэтому там скелетон нужно располагать*/}
        <footer>Lorem ipsum dolor sit amet, consectetur adipisicing </footer>
    </div>
  )
}
