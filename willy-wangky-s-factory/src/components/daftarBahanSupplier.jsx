import React, { Component } from 'react'
    
class DaftarBahanSupplier extends Component {
    constructor(props){
        super(props);
        this.state = {
            listBahan: "",
            isLoaded: false
        }
    }

    componentDidMount(){
        var xhr = new XMLHttpRequest();
        var url = "http://localhost:3000/getDaftarBahan?harga=true";
        
        xhr.open('GET', url);
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    
        xhr.onload = function() {
            console.log(xhr.status);
            if(xhr.readyState === 4 && xhr.status === 200) {
                var res = xhr.responseText;
                var jsonResponse = JSON.parse(res);
                console.log(jsonResponse);
                var strHtml = "<div id = 'listMaterial'> <table>";
                strHtml += "<tr> <th>Nama Bahan</th> <th>Harga</th></tr>";
                for (var i in jsonResponse.daftarbahan){
                    var bahan = jsonResponse.daftarbahan[i];
                    strHtml += "<tr>";
                    strHtml += "<td>" + bahan.namaBahan + "</td>";
                    strHtml += "<td>" + bahan.hargaSatuan + "</td>";
                    strHtml += "</tr>";
                }
                strHtml += "</table></div>";
               
                this.setState({
                    listBahan: strHtml,
                    isLoaded: true
                })
            }
        }.bind(this)
    
        xhr.send();  
    
                    
    }

    render(){
        var { listBahan, isLoaded } = this.state
        if (!isLoaded){
            return  (
                <div>
                    <h2>Daftar Bahan Di Supplier</h2>
                    <p>loading...</p>
                </div>
            );
        }
        else{
            return (
                <div>
                    <h2>Daftar Bahan Di Supplier</h2>
                    <div className="content" dangerouslySetInnerHTML={{__html: listBahan}}></div>
                    
                </div>
            );
        }
        
    }
}

export default DaftarBahanSupplier