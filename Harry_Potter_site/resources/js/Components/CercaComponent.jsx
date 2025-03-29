import React, { useState, useEffect } from 'react';
import { Link } from '@inertiajs/react';

const apiUrl = 'http://localhost:3000/';

export default function CercaComponent() {

    const [isHoveredContattami, setIsHoveredContattami] = useState(false);
    const [query, setQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [error, setError] = useState(null);
    const [searched, setSearched] = useState(false); // Nuovo stato per tenere traccia se la ricerca è stata eseguita
  
    useEffect(() => {
      getAllSearch();
    }, []);
  
    const getAllSearch = () => {
      fetch(apiUrl + 'search', {
        method: "GET"
      })
      .then(response => response.json())
      .then(data => {
        setSearchResults(data);
        setError('');
      })
      .catch(err => {
        console.log(err);
        setError('Si è verificato un errore durante il recupero dei dati.');
      });
    }

    const handleChange = (event) => {
      setQuery(event.target.value);
    };

    const handleSubmit = (event) => {
      event.preventDefault();
      // Esegui la ricerca solo se è stata inserita una query
      if (query.trim() !== '') {
        // Filtra i risultati in base alla query
        const filteredResults = searchResults.filter(result =>
          result.title.toLowerCase().includes(query.toLowerCase())
        );
        setSearchResults(filteredResults);
        setError('');
        setSearched(true); // Imposta searched a true dopo aver eseguito la ricerca
      } else {
        setError('Inserisci un termine di ricerca valido.');
      }
    };

  return (
    <div className="row" style={{paddingLeft:'30px'}}>
      <div>
        <h4>Cerca</h4>
        <form onSubmit={handleSubmit} className="form-inline my-2">
          <div className='d-flex'>
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={query}
              onChange={handleChange}
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0 me-3"
              type="submit"
              id="searchsubmit"
            >
              Cerca
            </button>
          </div>
        </form>
      </div>
      {/* Qui aggiungi il codice per mostrare i risultati della ricerca e gestire gli errori */}
      {error && <div className="alert alert-danger" role="alert">{error}</div>}
      {/* Visualizza i risultati solo se la ricerca è stata eseguita */}
      {searched && (
        <>
          {searchResults.length > 0 ? (
            <div>
              <h4>Risultati della ricerca</h4>
              <ul>
                {searchResults.map((result, index) => (
                  <li key={index}>
                    <Link href={result.url} className='text-decoration-none color_link'>{result.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <p>Nessun risultato trovato.</p>
          )}
        </>
      )}

      <div className='d-flex justify-content-center'>
          <div className='col-4'>
          <h4>Articoli recenti</h4>
          <ul className='ps-3'>
            <li>
              <Link to='/la_fontina_valdostana_la_regina_dei_formaggi' className='text-decoration-none color_link'>La Fontina Valdostana: la regina dei formaggi</Link>
              <p className="m-0 text-secondary">29 Maggio 2023</p>
            </li>
            <li>
              <Link to="/borghi_della_valle_d_aosta" className='text-decoration-none color_link'>I Borghi della Valle d’Aosta: i più belli da visitare</Link>
              <p className="m-0 text-secondary">4 Maggio 2022</p>
            </li>
            <li>
              <Link to="/valdigne-cosa-vedere-vicino-courmayeur" className='text-decoration-none color_link'>La Valdigne, cosa vedere vicino a Courmayeur</Link>
              <p className="m-0 text-secondary">7 Marzo 2022</p>
            </li>
            <li>
              <Link to="/carnevale_di_pont_saint_martin_san_martino_il_diavolo_e_la_ninfa" className='text-decoration-none color_link'>Carnevale di Pont Saint Martin: San Martino, il Diavolo e la Ninfa</Link>
              <p className="m-0 text-secondary">28 Gennaio 2022</p>
            </li>
            <li>
              <Link to="/sport_tradizionali_della_valle_daosta" className='text-decoration-none color_link'>Gli sport tradizionali della Valle d’Aosta</Link>
              <p className="m-0 text-secondary">9 Gennaio 2022</p>
            </li>
          </ul>
        </div>
        <div className='col-3'>
          <h4>Categorie</h4>
          <ul className='ps-3'>
            <li>
              <Link to="/categoria/a_spasso_per_la_valle" className='text-decoration-none color_link'>A Spasso per la Valle</Link>
            </li>
            <li>
              <Link to="/categoria/castelli_della_valle_d_aosta" className='text-decoration-none color_link'>Castelli della Valle d'Aosta</Link>
            </li>
            <li>
              <Link to="/categoria/castelli_valle_d_aosta_visitabili" className='text-decoration-none color_link'>Castelli Valle d'Aosta visitabili</Link>
            </li>
            <li>
              <Link to="/categoria/itinerari_gourmet" className='text-decoration-none color_link'>Cucina Valdostana</Link>
            </li>
            <li>
              <Link to="/categoria/eventi_valle_d_aosta" className='text-decoration-none color_link'>Eventi in Valle d'Aosta</Link>
            </li>
            <li>
              <Link to="/categoria/itinerari_tematici" className='text-decoration-none color_link'>Itinerari</Link>
            </li>
            <li>
              <Link to="/categorria/legggende_valle_d_aosta" className='text-decoration-none color_link'>Leggende della Valle d'Aosta</Link>
            </li>
            <li>
              <a href="/categoria/montagne_valle_d_aosta" className='text-decoration-none color_link'>Montagne della Valle d'Aosta</a>
            </li>
            <li>
              <a href="/categoria/informazioni_utili" className='text-decoration-none color_link'>Orari e tariffe dei siti regionali</a>
            </li>
            <li>
              <a href="/categoria/passeggiate_in_citta" className='text-decoration-none color_link'>Passeggiate in città</a>
            </li>
            <li>
              <a href="/categoria/santuari_e_spiritualita" className='text-decoration-none color_link'>Santuari e spiritualità</a>
            </li>
            <li>
              <a href="/categoria/terme" className='text-decoration-none color_link'>Terme</a>
            </li>
            <li>
              <a href="/categoria/territorio" className='text-decoration-none color_link'>Territorio</a>
            </li>
            <li>
              <a href="/categoria/tradizioni_valle_d_aosta" className='text-decoration-none color_link'>Tradizioni della Valle d'Aosta</a>
            </li>
          </ul>
        </div>
        <div className='mt-6 mb-3'>
        <Link 
          className="text-decoration-none color_link" 
          href='/contatti'
          onMouseEnter={() => setIsHoveredContattami(true)}
          onMouseLeave={() => setIsHoveredContattami(false)}
          >Contattami {isHoveredContattami}
        </Link>
      </div>
      </div>
      
    </div>
  )
}
