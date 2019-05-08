import React, { Component } from 'react';
import Modal from './modal.js';
import Header from './Header';
class News extends Component {

  render() {
    return (
      <React.Fragment>
        <div class="wrapper">
          <div id="content">
          
            <Header></Header>

            <div class="container">
              <div class="col-lg-12">
                <h1>News</h1>
              </div>

              <article>
                <div class="col-lg-12">
                  <div class="card">
                    <h1>Afslutning</h1>
                    <h3>15-06-2019</h3>
                    <p>Fælles afslutning for førskolebørnene. Denne dag skal vi huske, at glemme madpakken.</p>
                  </div>
                  <hr></hr>
                </div>
              </article>

              <article>
                <div class="col-lg-12">
                  <div class="card">
                    <h1>Fastelavn</h1>
                    <h3>03-03-2019</h3>
                    <p>Vi bager fastelavnsboller og laver fastelavnsris. Vi klæder os ud (også de voksne) og slår katten af tønden.</p>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
       
      </React.Fragment>
    );

  }
}

export default News;
