import React, { Component } from 'react'
import Modal from './modal.js';

export default class Calendar extends Component {
    constructor(props) {
        super(props);

        this.replaceModalItem = this.replaceModalItem.bind(this);
        this.saveModalDetails = this.saveModalDetails.bind(this);
        this.state = {
            requiredItem: 0,
            brochure: [
                {
                    title: "08:15",
                    afleveret: "08:15",
                    afhentet: "16:00"
                }, {
                    title: "08:15",
                    afleveret: "08:15",
                    afhentet: "16:00"
                }, {
                    title: "08:15",
                    afleveret: "08:15",
                    afhentet: "16:00"
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
        if (this.state.brochure.length > 0) {

            const brochure = this.state.brochure.map((item, index) => {
              return (
      
                <tr key={index}>
      
                  <h1>{item.title}</h1>
                  <h2>{item.msg}</h2>
                  <p>{item.msg}</p>
      
                  <button className="btn btn-primary" data-toggle="modal" data-target="#exampleModal"
                    onClick={() => this.replaceModalItem(index)}>edit</button> {" "}
                  <button className="btn btn-danger" onClick={() => this.deleteItem(index)}>remove</button>
      
                </tr>
              )
            });
      
            const requiredItem = this.state.requiredItem;
            let modalData = this.state.brochure[requiredItem];
        return (
            <React.Fragment>
            <div class="overlay"></div>
            <div>   
    
              <Modal
                title={modalData.title}
                msg={modalData.msg}
                saveModalDetails={this.saveModalDetails}
              />
            </div>
            </React.Fragment>
        )
    }
}
}
