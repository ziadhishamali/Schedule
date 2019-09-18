import React, { Component } from 'react';
import Table from './Table';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            data: [
                [
                    {name: "N-L Digital Control Systems", instructor: "Dr. Ibrahim Abdel-Salam", type: "Lab"},
                    {name: "Operating Systems", instructor: "Dr. Ibrahim Abdel-Salam", type: "Lecture"},
                    {name: "Operating Systems / N-L Digital Control Systems", instructor: "Dr. Ibrahim Abdel-Salam", type: "Lab"},
                    {name: "Operating Systems / N-L Digital Control Systems", instructor: "Dr. Ibrahim Abdel-Salam", type: "Lab"},
                    {name: "Operating Systems", instructor: "Dr. Ibrahim Abdel-Salam", type: "Lab"},
                    {name: "Micro Systems", instructor: "Dr. Ibrahim Abdel-Salam", type: "Section"},
                ],
                [
                    {name: "Human-Machine Communication Systems", instructor: "Dr. Ibrahim Abdel-Salam", type: "Lecture"},
                    {name: "N-L Digital Control Systems", instructor: "Dr. Ibrahim Abdel-Salam", type: "Lecture"},
                    {name: "Algorithms analysis", instructor: "Dr. Amr ElMasry", type: "Lecture"},
                    {name: "Micro Systems", instructor: "Dr. Ibrahim Abdel-Salam", type: "Lab"},
                    {name: "Micro Systems", instructor: "Dr. Ibrahim Abdel-Salam", type: "Lab"},
                    {name: "Micro Systems", instructor: "Dr. Ibrahim Abdel-Salam", type: "Lab"},
                ],
                [
                    {name: "N-L Digital Control Systems", instructor: "Dr. Ibrahim Abdel-Salam", type: "Section"},
                    {name: "Operating Systems", instructor: "Dr. Ibrahim Abdel-Salam", type: "Section"},
                    {name: "Processing Algorithms & Signal transmition", instructor: "Dr. Hisham ElMongy", type: "Lecture"},
                    {name: "Algorithms analysis", instructor: "Dr. Amr ElMasry", type: "Section"},
                    {name: "", instructor: "", type: ""},
                    {name: "", instructor: "", type: ""},
                ],
                [
                    {name: "Micro Systems", instructor: "Dr. Ibrahim Abdel-Salam", type: "Lecture"},
                    {name: "N-L Digital Control Systems", instructor: "Dr. Ibrahim Abdel-Salam", type: "Lecture"},
                    {name: "Operating Systems", instructor: "Dr. Ibrahim Abdel-Salam", type: "Lecture"},
                    {name: "Algorithms analysis", instructor: "Dr. Amr ElMasry", type: "Lecture"},
                    {name: "", instructor: "", type: ""},
                    {name: "", instructor: "", type: ""},
                ],
                [
                    {name: "Processing Algorithms & Signal transmition", instructor: "Dr. Hisham ElMongy", type: "Section"},
                    {name: "Micro Systems", instructor: "Dr. Ibrahim Abdel-Salam", type: "Lecture"},
                    {name: "Processing Algorithms & Signal transmition", instructor: "Dr. Hisham ElMongy", type: "Lecture"},
                    {name: "Algorithms analysis", instructor: "Dr. Amr ElMasry", type: "Section"},
                    {name: "", instructor: "", type: ""},
                    {name: "", instructor: "", type: ""},
                ],
                [
                    {name: "", instructor: "", type: ""},
                    {name: "", instructor: "", type: ""},
                    {name: "", instructor: "", type: ""},
                    {name: "", instructor: "", type: ""},
                    {name: "", instructor: "", type: ""},
                    {name: "", instructor: "", type: ""},
                ],
            ],
        }
    }
    render() { 
        return (
            <div className="home flex-column justify align">
                <Table data={this.state.data} />
            </div>            
        );
    }
}
 
export default Home;