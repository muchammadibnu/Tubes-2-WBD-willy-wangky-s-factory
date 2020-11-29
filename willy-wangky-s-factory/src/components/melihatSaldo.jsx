import React, { Component } from 'react'

class MelihatSaldo extends Component {
    constructor(props){
        super(props);
        this.state = {
            saldo: "",
            isLoaded: false
        }
    }

    componentDidMount(){
        var SoaMessage = `<?xml version='1.0' encoding='UTF-8'?>
        <S:Envelope xmlns:S="http://schemas.xmlsoap.org/soap/envelope/">
            <S:Body>
                <ns2:getSaldo xmlns:ns2="http://codejava.net/">
                   
                </ns2:getSaldo()>
            </S:Body>
        </S:Envelope>`;

        var url = "http://localhost:8086/WSFactory/ws/saldo?wsdl";

        var request = new XMLHttpRequest();

        request.open('POST',url,true);
        request.onload = function() {
            if (request.readyState===4 && request.status===200){
                var res = request.responseXML;
                console.log(res);
                res = res.getElementsByTagName("return")[0].childNodes[0].data;

                this.setState({
                    saldo: res,
                    isLoaded: true
                })
            }
        }.bind(this);
        request.setRequestHeader("Content-type","text/xml ");

        request.send(SoaMessage);
    }

    render(){
        var { saldo, isLoaded } = this.state
        if (!isLoaded){
            return (
                <div>
                    <h2>Saldo</h2>
                    <p>loading...</p>
                </div>
            );
        }
        else{
            return (
                <div>
                    <h2>Saldo</h2>
                    <div className="content" dangerouslySetInnerHTML={{__html: saldo}}></div>
                </div>
            );
        }
    }
}

export default MelihatSaldo