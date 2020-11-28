import React, { Component } from 'react'
    
class MelihatResep extends Component {
    constructor(props){
        super(props);
        this.state = {
            resep: "",
            isLoaded: false
        }
    }

    componentDidMount(){
        var SoaMessage = `<?xml version='1.0' encoding='UTF-8'?>
                        <S:Envelope xmlns:S="http://schemas.xmlsoap.org/soap/envelope/">
                            <S:Body>
                                <ns2:getListRecipe xmlns:ns2="http://codejava.net/">
                                   
                                </ns2:getListRecipe>
                            </S:Body>
                        </S:Envelope>`;

        var url = "http://localhost:8086/WSFactory/ws/chocolate?wsdl";

        var request = new XMLHttpRequest();
    
        request.open('POST', url, true);
        request.onload = function() {
            if (request.readyState===4 && request.status===200){
                var res = request.responseXML;
                console.log(res);
                res = res.getElementsByTagName("return")[0].childNodes[0].data;
                   
                this.setState({
                    resep: res,
                    isLoaded: true
                })
            }
        }.bind(this);
        request.setRequestHeader("Content-type", "text/xml  ");
    
        request.send(SoaMessage);
                    
    }

    render(){
        var { resep, isLoaded } = this.state
        if (!isLoaded){
            return  (
                <div>
                    <h2>List Resep</h2>
                    <p>loading...</p>
                </div>
            );
        }
        else{
            return (
                <div>
                    <h2>List Resep</h2>
                    <div className="content" dangerouslySetInnerHTML={{__html: resep}}></div>
                </div>
            );
        }
        
    }
}

export default MelihatResep