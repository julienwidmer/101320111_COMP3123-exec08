import React, {Component} from "react";

class EntryForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showSubmission: false,
            showError: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const value = target.type === "checkbox" ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value,
            showSubmission: false,
            showError: false
        });
    }

    handleSubmit(event) {
        if (this.state.termsConditionsAccepted != undefined && this.state.termsConditionsAccepted) {
            this.setState({
                showSubmission: true,
                showError: false
            });
        } else {
            this.setState({
                showSubmission: false,
                showError: true
            });
        }

        event.preventDefault();
    }

    submissionError() {
        return <div className="alert mt-4 alert-danger" role="alert">You must agree with the terms and conditions!</div>;
    }

    submissionResult() {
        const submission = {
            email: this.state.email ?? "N/A",
            name: this.state.name ?? "N/A",
            address: this.state.address ?? "N/A",
            address2: this.state.address2 ?? "",
            city: this.state.city ?? "N/A",
            province: this.state.province ?? "N/A",
            postalCode: this.state.postalCode ?? "N/A",
        }

        return (
            <div className="mt-4 border border-success row gx-3 ms-0 me-0 p-2 fs-4" style={{fontFamily: "serif"}}>
                <ul className="text-end col-6 mb-0 fw-bold text-success">
                    <li className="list-group-item">Email:</li>
                    <li className="list-group-item">Full Name:</li>
                    <li className="list-group-item">Address:</li>
                    <li className="list-group-item">City:</li>
                    <li className="list-group-item">Province:</li>
                    <li className="list-group-item">Postal Code:</li>
                </ul>
                <ul className="text-start col-6 mb-0">
                    <li className="list-group-item">{submission.email}</li>
                    <li className="list-group-item">{submission.name}</li>
                    <li className="list-group-item">{submission.address} {submission.address2}</li>
                    <li className="list-group-item">{submission.city}</li>
                    <li className="list-group-item">{submission.province}</li>
                    <li className="list-group-item">{submission.postalCode}</li>
                </ul>
            </div>
        );
    }

    render() {
        return (
            <>
                <form onSubmit={this.handleSubmit} className="row gx-2 gy-3">
                        <div className="col-md-6">
                            <label htmlFor="inputEmail">Email</label>
                            <input type="email" className="form-control" id="inputEmail" placeholder="Email" name="email"
                                   value={this.state.inputEmail} onChange={this.handleChange}/>
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="inputName">Name</label>
                            <input type="text" className="form-control" id="inputName" placeholder="Full name" name="name"
                                   value={this.state.inputName} onChange={this.handleChange}/>
                        </div>
                        <div className="col-12">
                            <label htmlFor="inputAddress">Address</label>
                            <input type="text" className="form-control" id="inputAddress" name="address"
                                   placeholder="1234 Main St"
                                   value={this.state.inputAddress} onChange={this.handleChange}/>
                        </div>
                        <div className="col-12">
                            <label htmlFor="inputAddress2">Address 2</label>
                            <input type="text" className="form-control" id="inputAddress2" name="address2"
                                   placeholder="Apartment, studio, or floor"
                                   value={this.state.inputAddress2} onChange={this.handleChange}/>
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="inputCity">City</label>
                            <input type="text" className="form-control" id="inputCity" name="city"
                                   value={this.state.inputCity} onChange={this.handleChange}/>
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="inputProvince">Province</label>
                            <select id="inputProvince" className="form-control" name="province"
                                    value={this.state.inputProvince} onChange={this.handleChange}>
                                <option defaultValue="" disabled hidden>Choose...</option>
                                <option value="Alberta">Alberta</option>
                                <option value="British Columbia">British Columbia</option>
                                <option value="Manitoba">Manitoba</option>
                                <option value="New Brunswick">New Brunswick</option>
                                <option value="Newfoundland and Labrador">Newfoundland and Labrador</option>
                                <option value="Nova Scotia">Nova Scotia</option>
                                <option value="Ontario">Ontario</option>
                                <option value="Prince Edward Island">Prince Edward Island</option>
                                <option value="Quebec">Quebec</option>
                                <option value="Saskatchewan">Saskatchewan</option>
                            </select>
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="inputPostalCode">Postal Code</label>
                            <input type="text" className="form-control" id="inputPostalCode" name="postalCode"
                                   value={this.state.inputPostalCode} onChange={this.handleChange}/>
                        </div>
                        <div className="col-12">
                            <input className="form-check-input me-2" type="checkbox" id="inputTermsConditionsAccepted"
                                   name="termsConditionsAccepted"
                                   value={this.state.inputTermsConditionsAccepted} onChange={this.handleChange}/>
                            <label className="form-check-label" htmlFor="inputTermsConditionsAccepted">
                                Agree Terms &amp; Conditions?
                            </label>
                        </div>
                        <div className="col-12">
                            <button type="submit" className="btn btn-success">Submit</button>
                        </div>
                </form>

                { this.state.showSubmission ? this.submissionResult() : null }
                { this.state.showError ? this.submissionError() : null }
            </>
        );
    }
}

export default EntryForm;