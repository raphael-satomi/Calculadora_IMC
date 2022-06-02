import { useState } from 'react';
import styles from './App.module.css';
import poweredImg from './assets/img/powered.png';

const App = () => {
  const [heightField, SetHeightField] = useState<number>(0);
  const [weightField, SetWeightField] = useState<number>(0);

  const handleCalculateButton = () => {
    if( heightField && weightField ) {

    }else{
      alert("Digite todos os campos");
    }
  }

  return (
    <div className={ styles.main }>
      <header>
        <div className={ styles.headerContainer }>
          <img src={ poweredImg } alt="" width="150"/>
        </div>
      </header>

      <div className={ styles.container }>
        <div className={ styles.leftSide}>
          <h1>Calcule o seu IMC</h1>
          <p>O IMC é a sigla para índice de massa corórea, parâmetro adotado pela OMS(Organização Mundial de Saúde) para calcular o peso ideal de cada pessoa.</p>

          <input  type="number" placeholder="Digite a sua altura. Ex: 1.73"
                  value={ heightField > 0 ? heightField : ''}
                  onChange={ e => SetHeightField(parseFloat(e.target.value)) }
          />

          <input  type="number" placeholder="Digite o seu peso. Ex: 62.3"
                  value={ weightField > 0 ? weightField : ''}
                  onChange={ e => SetWeightField(parseFloat(e.target.value)) }
          />

          <button onClick={ handleCalculateButton } >Calcular</button>

        </div>

        <div className={ styles.rightSide}>
          ...
        </div>

      </div>
    </div>
  )
}

export default App;




















