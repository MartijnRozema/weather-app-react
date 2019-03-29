import React, { Component } from 'react'

class Header extends Component{
    render() {
        if (this.props.error === null){
            this.state = {
                showError: false
            };
        } else {
            this.state = {
                showError: true
            };
        }
        return (
            <header>
                <div className="navbar">
                    <div className="container d-flex justify-content-between">
                        <div className="input-group mb-3">
                            <input type="text" className="form-control middle" ref="inputField" id="small input" placeholder="Plaatsnaam"/>
                            <div className="input-group-append">
                                <button className="btn btn-info" type="button"
                                        onClick={this.getValue}>Zoek Op
                                </button>
                            </div>
                                <select className="custom-select small" ref="unitField">
                                    <option defaultValue value="metric">Celsius (°C)</option>
                                    <option value="standard">Kelvin (K)</option>
                                    <option value="imperial">Fahrenheit (°F)</option>
                                </select>
                            <div className="input-group-append">
                                <button className="btn btn-info" type="button"
                                        onClick={this.getUnit}
                                    >Instellen
                                </button>
                            </div>
                        </div>
                        {this.state.showError && <div className="alert alert-danger" role="alert">
                            {this.props.error}
                        </div>}
                        <div className="col-sm-4 offset-md-1 py-4">
                            <ul className="list-unstyled float-right">
                                <li>

                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
    getValue = () => {
        var value = this.refs.inputField.value
        this.props.input(value)
    }

    getUnit = () => {
        var value = this.refs.unitField.value
        this.props.unit(value)
    }
}
export default Header