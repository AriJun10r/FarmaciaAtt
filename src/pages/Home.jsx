import Header from "../components/Header"
import Footer from "../pages/Footer"
import "./Home.css"
import "./Footer.css"
import { useState } from "react"

function Home() {
  const [senhaConvencional, setSenhaConvencional] = useState('0');
  const [senhaPreferencial, setSenhaPreferencial] = useState('0');
  const [senhaBalcao, setSenhaBalcao] = useState('Balcão - 0');
  const [contadorConvencional, setContadorConvencional] = useState(0);
  const [contadorPreferencial, setContadorPreferencial] = useState(0);
  const [contadorBalcao, setContadorBalcao] = useState(0);

  // Array para armazenar todas as senhas geradas
  const [senhasGeradas, setSenhasGeradas] = useState([]);

  // Função para gerar senhas contínuas
  const gerarSenha = (tipo) => {
    let novaSenha = '';
    if (tipo === 'convencional') {
      const novoContador = contadorConvencional + 1;
      novaSenha = `Conv-${novoContador}`;
      setContadorConvencional(novoContador);
      setSenhaConvencional(novaSenha);
    } else if (tipo === 'preferencial') {
      const novoContador = contadorPreferencial + 1;
      novaSenha = `Pref-${novoContador}`;
      setContadorPreferencial(novoContador);
      setSenhaPreferencial(novaSenha);
    } else if (tipo === 'balcao') {
      const novoContador = contadorBalcao + 1;
      novaSenha = `Balcão - ${novoContador}`;
      setContadorBalcao(novoContador);
      setSenhaBalcao(novaSenha);
    }

    // Adiciona a nova senha ao array de senhas geradas
    setSenhasGeradas((prev) => [...prev, novaSenha]);
  };

  return (
    <div className="Home-container">
      <Header />
      <div className="home-subcontainer">
        <img className="imgprincipal" src="./images/farmarcia.png" alt="nova direcao" />
          <div className="list">
          <button onClick={() => gerarSenha('convencional')} className='home-senha-button'>Senha Convencional</button>
          <button onClick={() => gerarSenha('preferencial')} className='home-senha-button'>Senha Preferencial</button>
          <button onClick={() => gerarSenha('balcao')} className='home-senha-button'>Senha Balcão</button>
          <h2 className='h2Senhageradas'>Senhas Geradas:</h2>
        <ul className="ul-list">
          {senhasGeradas.map((senha, index) => (
            <li key={index}>{senha}</li>
          ))}
        </ul>

        < ul className='home-list'></ul>
        </div>
        
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>

  )
}

export default Home
