import "./style.scss"

const Capitais = () => {


  return (
    <header>
      <div id='border'></div>
      <div id='container_title'>
        <h1 id='titlle_cap'> Capitais </h1>
      </div>

      <div id='content' >
        <ul>
          <li className='MaxAndMin'>Min Max</li>
          <li>14° 27° Rio de Janeiro</li>
          <li>14° 22° São Paulo</li>
          <li>21° 32° Belo Horizonte</li>
          <li>24° 37° Brasília</li>
          <li>24° 37°Belém</li>
          
        </ul>
        <ul>
          <li className='MaxAndMin'>Min Max</li>
          <li>23° 37° Salvador</li>
          <li>5° 14° Curitiba</li>
          <li>21° 32° Fortaleza</li>
          <li>24° 37° Manaus</li>
          <li>28° 40° João Peassoa</li>
        </ul>


      </div>

    </header>
  )
}

export default Capitais