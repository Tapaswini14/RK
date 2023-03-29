import { height } from '@mui/system';
import React from 'react';
function Card(){
    return(
        <div className ="container">
            <div className ="row">
                <div className ="col-lg-4 col-md-6">
                  <div className ="card" style = {{ width: '100%' , height: '100%' }}>
                  <img src="./Rectangle 9.png" className ="card-img-top" alt="..."></img>
                    <div className ="card-body">
                     <h5 className ="card-title">Public Blockchains</h5>
                     <p className ="card-text">Public blockchains are open networks that allow anyone to participate in the network.</p>
                    </div>
                  </div>
                </div>

                <div className ="col-lg-4 col-md-6">
                <div className ="card" style = {{ width: '100%' , height: '100%' }}>
                  <img src="./Rectangle 8.png" className ="card-img-top" alt="..."></img>
                    <div className ="card-body">
                     <h5 className ="card-title">Private Blockchains</h5>
                     <p className ="card-text">The private blockchain is managed by a network administrator and participants need permission to join the network.</p>
                    </div>
                  </div>
                </div>

                <div className ="col-lg-4 col-md-6">
                <div className ="card" style = {{ width: '100%' , height: '100%' }}>
                  <img src="./Rectangle 7.png" className ="card-img-top" alt="..."></img>
                    <div className ="card-body">
                     <h5 className ="card-title">Consortium Blockchains</h5>
                     <p className ="card-text">Consortium offers a new kid on the block to join the established structure & share information instead of starting from scratch.</p>
                    </div>
                  </div>
                </div>
            </div>
        </div>
    )
}

export default Card