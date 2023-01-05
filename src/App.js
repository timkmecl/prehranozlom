import { useState, useEffect } from 'react';

import rawData from './data/restavracije.json';

import Tabela from './components/Tabela';

const mesta = ['LJUBLJANA', 'PTUJ', 'MARIBOR', 'KOPER/CAPODISTRIA', 'ROGAŠKA SLATINA', 'JESENICE', 'PORTOROŽ/PORTOROSE', 'NOVO MESTO', 'ŠKOFJA LOKA', 'RAVNE NA KOROŠKEM', 'SLOVENSKE KONJICE', 'CELJE', 'TREBNJE', 'SLOVENJ GRADEC', 'RADOVLJICA', 'KRANJ', 'HOČE', 'NOVA GORICA', 'DOMŽALE', 'MURSKA SOBOTA', 'VELENJE', 'BLED', 'KRŠKO', 'IZOLA/ISOLA', 'ZAGORJE OB SAVI', 'TRBOVLJE', 'LOGATEC', 'BREŽICE']

function App() {
  const [data, setData] = useState(null);
  const [city, setCity] = useState('LJUBLJANA');
  const [search, setSearch] = useState('');

  useEffect(() => {
    setData(rawData.filter(item => item.cena && item.cena_old))
  }, []);

  const handleCityChange = (e) => {
    setCity(e.target.value);
  }

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  }

  return (
    <div className="App">
      <div className='main'>
        <h1>Stanje študentske prehrane 2023</h1>
        <p>S 1. januarjem se je vrednost bona zvišala za <strong className='ok'>0,68 €</strong>. 
          Namesto ugodnejših cen za študente pa se je povprečno doplačilo zvišalo za <strong>1,08 € (35 %)</strong> </p>
        <p>Ob <strong>10,3 %</strong> letni inflaciji oz. <strong>18,6 %</strong> inflaciji cen hrane in pijače
          dobijo restavracije za obrok zdaj v povprečju <strong>30 %</strong> več kot lani.</p>
      </div>
      <div className='search'>
        <p>
          <label htmlFor="mesta">Izberi mesto: </label>
          <select name="mesta" id="mesta" value={city} onChange={handleCityChange} >
            {mesta.map((item, index) => {
              return <option key={index} value={item}>{item}</option>
            })}
          </select>
        </p>
        <p>
          <label htmlFor="search">Išči restavracijo: </label>
          <input type="search" name="search" id="search" value={search} onChange={handleSearchChange}/>
        </p>
        <p className='disclaimer'>
            Podatki so zgolj informativne narave, ne jamčim za njihovo točnost in popolnost.
        </p>
      </div>
      {
        data && <Tabela data={data} city={city} search={search} />
      }

      <div id="created-by">
		    <p>Website created by <a href="https://www.facebook.com/tim.kmecl/">Tim Kmecl</a></p>
	    </div>
    </div>
  );
}

export default App;
