import React, {useRef} from 'react';
import axios from 'axios';

const EditPlayer = ({ player }) => {
    const firstName = useRef(player.firstName);
    const lastName = useRef(player.lastName);
    const phone = useRef(player.phone);
    const email = useRef(player.email);

    const updatePlayer = () => {
        axios.put('http://localhost:4000/player/'+player._id, {
            firstName: firstName.current.value,
            lastName: lastName.current.value,
            phone: phone.current.value,
            email: email.current.value
        })
        .then(response => console.log(response))
        .catch(err => console.log(err));
    }
    
    return (
        <div className="row">
            <h1 className="center">Edit the Player</h1>
            <form className="col s12" onSubmit={updatePlayer}>
                <div className="row">
                    <div className="input-field col s6">
                        <input id="firstName" defaultValue={player.firstName} ref={firstName} type="text" />
                        <label htmlFor="firstName">First Name</label>
                    </div>
                    <div className="input-field col s6">
                        <input id="lastName" defaultValue={player.lastName} ref={lastName} type="text" />
                        <label htmlFor="lastName">Last Name</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s6">
                        <input id="phone" defaultValue={player.phone} ref={phone} type="text" />
                        <label htmlFor="phone">Phone</label>
                    </div>
                    <div className="input-field col s6">
                        <input id="email" defaultValue={player.email} ref={email} type="text" />
                        <label htmlFor="email">Email</label>
                    </div>
                </div>
                <button className="btn waves-effect waves-light blue" type="submit" name="action">Update</button>
            </form>
        </div>
    );
}
 
export default EditPlayer;