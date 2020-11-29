import React, { Component } from 'react'

class MembeliBahanSupplier extends Component {
    constructor(props){
        super(props);
        this.state = {
            isLoaded: false
        }
    }

    componentDidMount(){
        var xhr = new XMLHttpRequest();
        var url = "";

        xhr.open('GET', url);
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

        xhr.onload = function() {
            console.log(xhr.status);
            if(xhr.readyState===4 && xhr.status === 200){

            }
        }.bind(this)

        xhr.send();
    }

    render(){
        var { isLoaded } = this.state
        if (!isLoaded){
            return(
                <div>
                    <h2>Membeli Bahan dari Supplier</h2>
                    <p>loading...</p>
                </div>
            );
        } else {
            return(
                <div>
                    <h2>Membeli Bahan dari Supplier</h2>
                    <div className="content" dangerouslySetInnerHTML={{__html: }}></div>    
                </div>
            );
        }
    }
}

export default MembeliBahanSupplier