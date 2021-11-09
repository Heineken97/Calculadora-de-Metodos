import React from 'react';
import './App.css';
import TableData from './tabledata';

function App() {
    const backgroundA = { backgroundColor: '#D7DBDD' };
    const backgroundNames = { backgroundColor: '#AEB6BF' };
    return (
        <div className="App" style={backgroundA}>
            <h2 style={backgroundNames} >Johan Daniel Calvo Aguero, Alex Daniel Leon Garcia, Carolina Mora Hidalgo, Steven Pacheco Calderon, Erick Silesky Ramirez, Sebastian Figueroa Brenes       </h2>

            <h4 style={backgroundNames}> A continuacion se le presenta una calculadora de MPVA y Z Altman. Favor ingrese los datos contables que se le solicitan en las celdas.</h4>
            <TableData />
        </div>
    );
}


export default App;
