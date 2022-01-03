import React from 'react'

export default function About(props) {
    return (
        <>
            <div className="row"  >
                <div className="col-sm-6">
                    <div className="card">
                        <div className="card-body" style={{ backgroundColor: props.mode === 'light' ? 'white' : 'black', color: props.mode === 'dark' ? 'white' : 'black' }}>
                            <h4 className="card-title">Projects:-01</h4>
                            <a className="card-text" href="/">{props.title}</a>
                            <p className="card-text">Language :- React_js and Bootstrap</p>
                          
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="card">
                        <div className="card-body" style={{ backgroundColor: props.mode === 'light' ? 'white' : 'black', color: props.mode === 'dark' ? 'white' : 'black' }}>
                            <h5 className="card-title">Contact Information</h5>
                            <p className="card-text">Name:- Rakesh Belwal</p>
                            <p className="card-text">Gmail:- rakeshbelwal74@gmail.com</p>
                            <p className="card-text">Phone Number:- +91 7017128509</p>
                            
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

