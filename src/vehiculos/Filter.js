import React from 'react';

class Filter extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            estado: '',
            permiso: '',
            tipo: ''
        };
        this.clickSearch = this.clickSearch.bind(this);
        this.changeQuery = this.changeQuery.bind(this);
    }

    changeQuery(event){
        const matricula = event.target.name;
        const value = event.target.value;
        this.setState({
            [matricula]: value
        });
    }

    clickSearch(){
        console.log(this.state);
        this.props.onFilter(this.state);
        this.setState({ 
            estado: '',
            permiso: '',
            tipo: ''
        });
    }

    render(){
        return (
            <div>
                <h5>Filtros</h5>
                <p>Estado: 
                <select className="browser-default custom-select" name="estado" id="estado" onChange={this.changeQuery}>
                        <option value = "--">--</option>
                        <option value = "TRAYECTO">TRAYECTO</option>
                        <option value = "DISPONIBLE" >DISPONIBLE</option>
                        <option value = "NODISPONIBLE" >NODISPONIBLE</option>
                        <option value = "RESERVADO" >RESERVADO</option>
                    </select>
                    </p>
                <p>Permiso:  
                    <select className="browser-default custom-select" name="permiso" id="permiso" onChange={this.changeQuery}>
                        <option value = "--">--</option>
                        <option value = "AB">AB</option>
                        <option value = "B" >B</option>
                        <option value = "NO" >NO</option>
                    </select></p>   
                <p>Tipo:    
                    <select className="browser-default custom-select" name="tipo" id="tipo" onChange={this.changeQuery}>
                        <option value = "--">--</option>
                        <option value = "Moto">Moto</option>
                        <option value = "Coche" >Coche</option>
                        <option value = "Patin" >Patin</option>
                        <option value = "Bici" >Bici</option>
                    </select></p>
                <button className="btn btn-primary" onClick={this.clickSearch}>Filtrar</button>
            </div>
            
        );
    }
}

export default Filter;