import React, { useState } from 'react'

const MaMeteo = () => {

    const [cityName, setcityName] = useState<string>("Chambery")

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
        setcityName(e.target.value);
    }

    const soumissionFormulaire = (e: React.ChangeEvent<HTMLFormElement>) =>{
        e.preventDefault();
        console.log(cityName)
    }


  return (
    <div>
        <h1>Ma Meteo</h1>
        
        <form onSubmit={soumissionFormulaire}>
          <label htmlFor="cityName">Ville : </label>
          <input type="text" id='cityName' name='cityName' value={cityName} onChange={handleChange}/>
          <input type="submit" value="Valider" />
        </form>

        

        
    </div>
  )
}

export default MaMeteo