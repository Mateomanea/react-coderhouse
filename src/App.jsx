import './App.scss'
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer'

function App() {

  return (
    <>
      <NavBar />
      <ItemListContainer greeting={'Welcome Tutor!'} />
    </>
  );

}

export default App
