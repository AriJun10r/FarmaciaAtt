import { MedicalServicesRounded } from './Conteudo/icons/medicalCenter';
import './Header.css'

function Header() {

  return (
    <div className="header-container">
        <h1 className='header-title'>Farmárcia</h1>
        <div className='header-cep-subcontainer'> 
          <label htmlFor="inputLabel" className='label'>Digite seu cep:</label>
          <input type="number" id='inputHeader' className='cep' min={8} max={8} />
          <button className='header-cep-button'>Calcular frete</button>
        </div>
        <ul className='header-list'>
          <li className='header-list-item-icon'><MedicalServicesRounded /></li>
          <li className='header-list-item'>Fale Conosco</li>
          <li className='header-list-item'>Trabalho Conosco</li>
          <li className='header-list-item'>Entrar</li>
        </ul>
    </div>


  )
}

export default Header

