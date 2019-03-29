import React, { Component } from 'react'

class Weather extends Component{
    render() {
        if (this.props.weather.rain === null) {
            var rain = 'Geen regen'
        }  else if(this.props.weather.rain === undefined) {
            var rain = ''
        }
        else {
            var rain = 'Regen'
        }
        if (this.props.weather.snow === null){
            var snow = 'Geen sneeuw'
        } else if(this.props.weather.snow === undefined) {
            var snow = ''
        }
        else {
            var snow = 'Sneeuw'
        }
        return (
            <div className="album py-5">
                <div className="container">
                    <div className="card mb-3">
                        <div className="row no-gutters">
                                <div className="card-body">
                                    <h5 className="card-title">{this.props.weather.name} <small>{this.props.country}</small></h5>
                                    <p className="card text-center">
                                        Temperatuur: {this.props.temp} <br/>
                                        Regen:  {rain} <br/>
                                        Sneeuw: {snow} <br/>
                                        Windkracht: {this.props.wind} Bft <br/>
                                        Luchtvochtigheid: {this.props.humidity}%
                                    </p>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Weather