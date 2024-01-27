import React, { useState } from "react";

function ContactMe() {
    const [name, setName] = useState('');
    const [email ,setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [nameError, setNameError] = useState('false');
    const [emailError, setEmailError] = useState('false');
    const [messageError, setMessageError] = useStstae('false');

    const validateEmail = (email) => {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    }
}