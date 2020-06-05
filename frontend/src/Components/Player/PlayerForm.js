import React, {useRef} from 'react';
import axios from 'axios';

const PlayerForm = () => {
    const firstName = useRef(null);
    const lastName = useRef(null);
    const phone = useRef(null);
    const email = useRef(null);

    const submit = event => {
        event.preventDefault();
        axios.post('http://localhost:4000/players', {
            firstName: firstName.current.value,
            lastName: lastName.current.value,
            phone: phone.current.value,
            email: email.current.value
        })
        .then(response => console.log(response))
        .catch(err => console.log(err))
    }
    
    return (
        <div className="row">
            <h1 className="center">Add a new Player</h1>
            <form className="col s12" onSubmit={submit}>
                <div className="row">
                    <div className="input-field col s6">
                        <input id="firstName" ref={firstName} type="text" />
                        <label htmlFor="firstName">First Name</label>
                    </div>
                    <div className="input-field col s6">
                        <input id="lastName" ref={lastName} type="text" />
                        <label htmlFor="lastName">Last Name</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s6">
                        <input id="phone" ref={phone} type="text" />
                        <label htmlFor="phone">Phone</label>
                    </div>
                    <div className="input-field col s6">
                        <input id="email" ref={email} type="text" />
                        <label htmlFor="email">Email</label>
                    </div>
                </div>
                <button className="btn waves-effect waves-light" type="submit" name="action">Add Player</button>
            </form>
        </div>
    );
}
 
export default PlayerForm;