import logo from './logo.svg';
import './App.css';
import { Footer } from './componets/footer/Footer';
import { Header } from './componets/Header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <body>
        <img src='banner.png' className='banner' />
        <h2 className='noticia'>Notícias</h2>
        <div>
          <div className='cards'>
            <div className='card'>
              <div className='car' >
                <img src='5.jpg' className='cardimg'></img>
                <h4>Mussum Ipsum, cacilds vidis litro abertis </h4>
              </div>
              <div className='car'>
                <img src='5.jpg' className='cardimg'></img>
                <h4>Mussum Ipsum, cacilds vidis litro abertis </h4>
                </div>
              <div className='car'>
                <img src='5.jpg' className='cardimg'></img>
                <h4>Mussum Ipsum, cacilds vidis litro abertis </h4>
                </div>
            </div>
            <div className='card'>
              <div className='car'>
                <img src='5.jpg' className='cardimg'></img>
                <h4>Mussum Ipsum, cacilds vidis litro abertis </h4>
                </div>
              <div className='car'>
                <img src='5.jpg' className='cardimg'></img>
                <h4>Mussum Ipsum, cacilds vidis litro abertis </h4>
                </div>
              <div className='car'>
                <img src='5.jpg' className='cardimg'></img>
                <h4>Mussum Ipsum, cacilds vidis litro abertis </h4>
                </div>
            </div>
          </div>
          <div className='vejamais'>
            <button className='vejamaisbotao'>Veja mais</button>
          </div>
          <h2 className='noticia'>Principais Servicos</h2>
          <div className='ps'>
            <div className='psbotao'>
              <div>
                <button>portal transparencia</button>
                <button>2 via iptu</button>
                <button>Portal de Serviços</button>
                <button>Concurso Publico</button>
              </div>
            </div>
            <div className='psbotao'>
              <button>Nota Fiscal Eletronica</button>
              <button>Empresas</button>
              <button>Servicos ao contribuinte</button>
              <button>Servicos ao servidor</button>
            </div>
          </div>
          <h2 className='noticia'>Turismo</h2>
          <div className='turismo'>
            <img src='aguas-da-prata-2.jpg' className='noticiaimg'></img>
            <img src='aguas-da-prata-2.jpg' className='noticiaimg' ></img>
            <img src='aguas-da-prata-2.jpg' className='noticiaimg' ></img>
          </div>
          <h2 className='noticia'>Galeria</h2>
          <div className='galeria'>
            <img src='6.jpg' className='galeriaimg'></img>
            <img src='6.jpg' className='galeriaimg'></img>
            <img src='6.jpg' className='galeriaimg'></img>
          </div>
          <h2 className='noticia'>Vídeos</h2>
          <div className='video'>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/Gjmdzz6lrDk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/Gjmdzz6lrDk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/Gjmdzz6lrDk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </div>
        <div>


        </div>
      </body>
      <Footer />

    </div >
  );
}

export default App;
