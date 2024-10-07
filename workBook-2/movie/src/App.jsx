import { useState } from 'react'
import './App.css'
import { MOVIES } from './mocks/movies.js';
import styles from './movies.module.css';

function App() {
  const results = MOVIES.results

  return (results.map((result, index) => {
    return (
      <div className={styles.imageContainer}>
        <img
          key={result.id} 
          src={'https://image.tmdb.org/t/p/original/' + result.poster_path}
          className={styles.image}
        />
      </div>

    )
  }))
}


export default App
