import NavBar from './Components/NavBar';
import ItemListContainer from './Components/ItemListContainer';
import Footer from './Components/footer';



function App() {
  return (
    <div className="container-fuid">
      <NavBar />
      <ItemListContainer greeting={"No se encontraron Productos!"} />
      <Footer />
    </div>
  );
}

export default App;