import React, { Component } from "react";

class EntryForm extends React.Component {
    render() {
        return(
            <>
                <div className="container">
                    <h1 className="p-2">Data Entry Form</h1>
                    <form>
                        <div className="row gx-2 gy-3">
                            <div className="col-md-6">
                                <label htmlFor="inputEmail">Email</label>
                                <input type="email" className="form-control" id="inputEmail" placeholder="Email"/>
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="inputPassword">Password</label>
                                <input type="password" className="form-control" id="inputPassword" placeholder="Password"/>
                            </div>
                            <div className="col-12">
                                <label htmlFor="inputAddress">Address</label>
                                <input type="text" className="form-control" id="inputAddress"
                                       placeholder="1234 Main St"/>
                            </div>
                            <div className="col-12">
                                <label htmlFor="inputAddress2">Address 2</label>
                                <input type="text" className="form-control" id="inputAddress2"
                                       placeholder="Apartment, studio, or floor"/>
                            </div>
                            <div className="col-md-4">
                                <label htmlFor="inputCity">City</label>
                                <input type="text" className="form-control" id="inputCity"/>
                            </div>
                            <div className="col-md-4">
                                <label htmlFor="inputProvince">Province</label>
                                <select id="inputProvince" className="form-control">
                                    <option defaultValue={"none"}>Choose...</option>
                                    <option value={"Alberta"}>Alberta</option>
                                    <option value={"British Columbia"}>British Columbia</option>
                                    <option value={"Manitoba"}>Manitoba</option>
                                    <option value={"New Brunswick"}>New Brunswick</option>
                                    <option value={"Newfoundland and Labrador"}>Newfoundland and Labrador</option>
                                    <option value={"Nova Scotia"}>Nova Scotia</option>
                                    <option value={"Ontario"}>Ontario</option>
                                    <option value={"Prince Edward Island"}>Prince Edward Island</option>
                                    <option value={"Quebec"}>Quebec</option>
                                    <option value={"Saskatchewan"}>Saskatchewan</option>
                                </select>
                            </div>
                            <div className="col-md-4">
                                <label htmlFor="inputPostalCode">Postal Code</label>
                                <input type="text" className="form-control" id="inputPostalCode"/>
                            </div>
                            <div className="col-12">
                                <input className="form-check-input me-2" type="checkbox" id="gridCheck"/>
                                <label className="form-check-label" htmlFor="gridCheck">
                                    Agree Terms &amp; Condition?
                                </label>
                            </div>
                            <div className="col-12">
                                <button type="submit" className="btn btn-success">Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </>
        );
    }
}

export default EntryForm;