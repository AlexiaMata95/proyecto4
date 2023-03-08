import './App.css';
import logo from './components/images/logo-dried.png'
import nosotros from './components/images/nosotros.png'
import whatsapp from './components/images/whatsapp.png'
import llamar from './components/images/llamar.png'
import email from './components/images/email.png'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='center-header'>
          <a href='/menu'className='link'>
            Menú
          </a>
          <a href='/'><img src={logo} alt='Logo' className='logo'></img></a>
          <a href={'/reservaciones'} className='link'>
            Reservaciones
            </a>
        </div>
      </header>
      <section className='jumbotron'>
        <div className='nosotros '>
          <img src={nosotros} alt='nosotros'></img>
          </div>
      </section>
      <section className='informacion'>
        <h1 className='info'>Cecina de Yecapixtla con sabor a hogar</h1>
        <p className='info'>Nuestro restaurante ha sido diseñado para crear un ambiente elegante y acogedor, donde cada detalle ha sido cuidadosamente pensado para ofrecerle una experiencia única y memorable. Desde el servicio excepcional hasta los ingredientes más frescos y de la más alta calidad, todo en nuestro restaurante ha sido diseñado para ofrecerle lo mejor de lo mejor.
        </p>
        <div className='conocenos'>
        <div className='contacto'>
        <h1> Contactanos </h1>
        <dl>
          <dt>Venta de cecina por mayoreo </dt>
          <dd>Envíos a toda la república</dd>
          <dt>Realiza una reservación </dt>
          <dd>Puedes hacerlo vía telefónica, Whatsapp o en este <a href='/reservaciones'>enlace</a></dd>
          <dt>Cotiza tu evento</dt>
          <dd>Deleita a tus invitados con nuestro sabor</dd>
        </dl>
        <ul>
          <li><a href= 'https://wa.me/'><img src={whatsapp} alt='whatsapp'></img>(+052) - 777 123 4567</a></li>
          <li><a href='tel:+527771234567'><img src={llamar} alt='llamar'></img>(+052) - 777 123 4567</a></li>
          <li><a href='mailto:driedyeca@email.com.mx'><img src={email} alt='email'></img> driedyeca@email.com.mx</a></li>
        </ul>
        </div>
        <div className = 'comentarios'>
        <article>
        <h1>Amelia Johnson</h1>
        <p>"Entrar al restaurante Dried Yeca es sumergirse en una experiencia gastronómica única que combina el sabor auténtico de la cecina de Yecapixtla con la elegancia y el buen servicio que caracteriza a este lugar. Cada plato es una invitación a disfrutar de una de las mejores cecinas de México, con su textura suave, su sabor ahumado y su aroma característico."</p>
        
          </article>  
        </div>
        </div>
      </section>
    </div>
  );
}

export default App;
