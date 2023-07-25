import React, { useState, useEffect } from 'react';
//import ReactDOM from 'react-dom';
//import ReactDOM from "react-dom/client";
import useDebounce from './use-debounce';
import './Debounce.css';

function Debounce() {
  const [itog, setItog]=useState([]);  
  // State and setters for ...
  // Search term
  const [searchTerm, setSearchTerm] = useState('');
  // API search results
  const [results, setResults] = useState([]);
  // Searching status (whether there is pending API request)
  const [isSearching, setIsSearching] = useState(false);
  // Debounce search term so that it only gives us latest value ...
  // ... if searchTerm has not been updated within last 500ms
  // As a result the API call should only fire once user stops typing
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  useEffect(
    () => {
      // Убедиться что у нас есть значение (пользователь ввел что-то)
      if (debouncedSearchTerm) {
        // Выставить состояние isSearching
        setIsSearching(true);
        // Сделать запрос к АПИ
        searchCharacters(debouncedSearchTerm).then(results => {
          // Выставить состояние в false, так-как запрос завершен
          setIsSearching(false);
          // Выставит состояние с результатом
          setResults(results);
          //setResults(filteredResults);
        });
      } else {
        setResults([]);
      }
    },
    [debouncedSearchTerm] // Only call effect if debounced search term changes
  );

  return (
    <div>
    <div className='itog'>{/*itog.id*/} {itog.familiya} {itog.imya} {itog.otzhestvo}</div><div className='itog1'> {itog.Ovd}</div>
    <div style={{ padding: '15px' }}>
      <div>
        <input
          style={{
            width: '95%',
            fontSize: '1rem',
            padding: '0.4rem',
            marginBottom: '10px'
          }}
          placeholder="Выбор сотрудника"
          onChange={e => setSearchTerm(e.target.value)}
        />
      </div>

      {isSearching && <div>Поиск ...</div>}

     {(results.length || isSearching === true)? 
     results.map(result => (
        <ul className='las' key={result.id}>
          <li className='lis' value={result.id} onClick={()=>setItog(result)}>{result.familiya} {result.imya} {result.otzhestvo}, {new Date(result.dataBirth).toLocaleDateString("ru")} г.р. {result.Ovd}</li>
        </ul>)):
      <div>Сотрудника не найдено.</div>
         
      
      }
      
    </div>
    </div>
  );
}
// function handleChange (id) {
//   return(
//   setItog(id)
//   )
// }

function searchCharacters(search) {
  //const apiKey = 'f9dfb1e8d466d36c27850bedd2047687';
  return fetch(
    `http://localhost:8081/api/sotr?familiya=${search}`,

    //`https://gateway.marvel.com/v1/public/comics?apikey=${apiKey}&titleStartsWith=${search}`,
    {
      method: 'GET'
    }
  ).then(r => r.json());
}

/*const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />
  );*/

  export default Debounce;