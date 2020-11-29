import React, { Component } from 'react'

class MelihatBahanPabrik extends Component {
    constructor(props){
        super(props);
        this.state = {
            bahan:"",
            isLoaded:false
        }
    }

    componentDidMount(){
        var SoaMessage = `<?xml version='1.0' encoding='UTF-8'?>
        <S:Envelope xmlns:S="http://schemas.xmlsoap.org/soap/envelope/">
            <S:Body>
                <ns2:getJumlahBahan xmlns:ns2="http://codejava.net/">
                   
                </ns2:getJumlahBahan>
            </S:Body>
        </S:Envelope>`;
        
        var url = "http://localhost:8086/WSFactory/ws/bahan?wsdl";

        var request = new XMLHttpRequest();

        request.open('POST',url,true);
        request.onload = function() {
            if (request.readyState===4 && request.status===200){
                var res = request.responseXML;
                console.log(res);
                res = res.getElementsByTagName("return")[0].childNodes[0].data;

                this.setState({
                    bahan: res,
                    isLoaded: true
                })
            }
        }.bind(this);
        request.setRequestHeader("Content-type", "text/xml  ");
    
        request.send(SoaMessage);
    }

    render(){
        var { bahan, isLoaded } = this.state
        if (!isLoaded){
            return (
                <div>
                    <h2>Bahan Pabrik</h2>
                    <p>loading...</p>
                </div>
            );
        }
        else{
            return(
                <div>
                    <h2>Bahan Pabrik</h2>
                    <div className="content" dangerouslySetInnerHTML={{__html: bahan}}></div>
                </div>
            );
        }
    }
}

export default MelihatBahanPabrik