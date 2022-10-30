import './rodape.css'

const Rodape = () => {
  return (
    <footer className='footer'>
      <section className='sociais'>
        <ul>
          <li>
            <a href="facebook.com" target="_blank">
              <img src="/imagens/fb.png" alt="" />
            </a>
          </li>
          <li>
            <a href="twitter.com" target="_blank">
              <img src="/imagens/tw.png" alt="" />
            </a>
          </li>
          <li>
            <a href="instagram.com" target="_blank">
              <img src="/imagens/ig.png" alt="" />
            </a>
          </li>
        </ul>
      </section>
      <section>
        <img src="/imagens/logo2.png" alt="" />
      </section>
      <section>
        <p>
          Desenvolvido por Vitor Pacheco.
        </p>
      </section>
    </footer>
  )
}

export default Rodape