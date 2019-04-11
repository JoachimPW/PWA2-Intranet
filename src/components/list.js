import React, { Component } from 'react';
import Modal from './modal.js';

class List extends Component {
  constructor(props) {
    super(props);

    this.replaceModalItem = this.replaceModalItem.bind(this);
    this.saveModalDetails = this.saveModalDetails.bind(this);
    this.state = {
      requiredItem: 0,
      brochure: [
        {
          title: "08:15",
          msg: "16:00"
        }, {
          title: "08:15",
          msg: "16:00"
        }, {
          title: "8:15",
          msg: "16:00"
        }
      ]
    }
  }

  replaceModalItem(index) {
    this.setState({
      requiredItem: index
    });
  }

  saveModalDetails(item) {
    const requiredItem = this.state.requiredItem;
    let tempbrochure = this.state.brochure;
    tempbrochure[requiredItem] = item;
    this.setState({ brochure: tempbrochure });
  }

  deleteItem(index) {
    let tempBrochure = this.state.brochure;
    tempBrochure.splice(index, 1);
    this.setState({ brochure: tempBrochure });
  }

  render() {    
    const brochure = this.state.brochure.map((item, index) => {
      return (
        <tr key={index}>
        <th>Afleveret</th>
          <td>{item.title}</td>
          <td>{item.msg}</td>
          <td>
            <button className="btn btn-primary" data-toggle="modal" data-target="#exampleModal"
              onClick={() => this.replaceModalItem(index)}>edit</button> {" "}
            <button className="btn btn-danger" onClick={() => this.deleteItem(index)}>remove</button>
          </td>
        </tr>
      )
    });
    
    const requiredItem = this.state.requiredItem;
    let modalData = this.state.brochure[requiredItem];
    return (
     <React.Fragment>
    <div class="wrapper">
         Sidebar  
        

       
        <div id="content">
            <button type="button" id="sidebarCollapse" class="btn main-background btn-toggle">
                <i class="fas fa-align-left"></i>
            </button>
            <button class="btn btn-dark d-inline-block d-lg-none ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <i class="fas fa-align-justify"></i>
            </button>

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
                    </div>
                </article>

                <article>
                    <div class="col-lg-12">
                        <div class="card">
                            <h1>Påske</h1>
                            <h3>05-04-2019</h3>
                            <p>Vi klippe/klistrer påsketing og snakker om påsken</p>
                        </div>
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
    <div class="overlay"></div>
      <div>
        <div style={{ textAlign: "center" }}>
          <h1>Calendar</h1>
        </div>
        <table className="table table-striped">
          <tbody>
            {brochure}
          </tbody>
        </table>
        <Modal
          title={modalData.title}
          msg={modalData.msg}
          saveModalDetails={this.saveModalDetails}
        />
      </div>
      </React.Fragment>
    );
  }
}

export default List;
