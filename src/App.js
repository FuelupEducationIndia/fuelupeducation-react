import './global.scss';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import KeyToCreating from './components/KeyToCreating/KeyToCreating';
import RelatedContentCard from './components/RelatedContentCard/RelatedContentCard';

function App() {
  return (
    <>
    <div className = "for-mobile">
      Mobile Version Coming Soon 
    </div>
     <div className="App">
      <Header/>
      <KeyToCreating/>
      <RelatedContentCard/>
      <Footer/>
    </div>
    </>
   
  );
}

export default App;
