import React from 'react';

const Modal = ({ showModal, setShowModal, name, age, address, mobile, onChangeListener, addContact }) => {

    return (
        <div className='modal-container' style={{display: showModal ? 'flex' : 'none'}}>
            <div className='modal-form'>
                <input type="text" id="name" placeholder="Name" value={name} onChange={onChangeListener}></input>
                <input type="text" id="address" placeholder="Address" value={address} onChange={onChangeListener}></input>
                <input type="text" id="age" value={age} placeholder="Age" onChange={onChangeListener}></input>
                <input type="text" id="mobile" value={mobile} placeholder="Mobile" onChange={onChangeListener}></input>
                <div className='btn-container'>
                    <button className='btn-primary' onClick={addContact}>Add Contact</button>
                    <button className='btn-primary' onClick={setShowModal}>Cancel</button>
                </div>
            </div>
        </div>
    )
}

export default Modal;