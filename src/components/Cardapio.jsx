// imports que o professor vai passar
import { useState, useEffect } from 'react';
import styles from './Cardapio.module.css';


function Cardapio() {
  //useState que o professor vai passar
  const [pratos, setPratos] = useState([]);

  // useEffect que o professor vai passar
  useEffect(() => {
    fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')
      .then(response => response.json())
      .then(data => setPratos(data.meals))
      .catch(error => console.error('Erro ao buscar os pratos:', error));
  }, []);

  
  // carregamento que o professor vai passar
  const [carregando, setCarregando] = useState(true);
    useEffect(() => {
      fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')
        .then(response => response.json())
        .then(data => {
          setPratos(data.meals);
          setCarregando(false);
        })
        .catch(error => {
          console.error('Erro ao buscar os pratos:', error);
          setCarregando(false);
        });
    }, []);
    

  return (
    <div className={styles.container}>
      <h1>Cardápio de Frutos do Mar</h1>
      {carregando && <p>Carregando...</p>}
      <div className={styles.grid}>
        {pratos.map(item => (
          <div key={item.idMeal} className={styles.card}>
            <img src={item.strMealThumb} alt={item.strMeal} />
            <h3>{item.strMeal}</h3>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Cardapio