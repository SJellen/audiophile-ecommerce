import { useContext, useEffect, useState } from "react";
import { Context } from "../context/Context";
import useCartLogic from "./useCartLogic";

export default function useCheckoutLogic() {

    const {filteredCart, totalPrice} = useCartLogic()

    const initialForm = {
        name: '',
        email: '',
        phone: '',
        address: '',
        zip: '',
        city: '',
        country: '',
        paymentChoice: "",
        emoney: '',
        pin: '',
    }

    const [checkoutForm, setCheckoutForm] = useState(initialForm)

    function handleChange(e) {
        const value = e.target.value
        setCheckoutForm({
            ...checkoutForm,
            [e.target.name]: value
        })
    }

    function validateEmail(email) {
            const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(String(email).toLowerCase());
    }

    function errorStyles(element) {
            document.querySelector(`#${element}`).style.borderColor = "#f96262";
            document.querySelector(`#${element}Label`).style.display = "flex";
            document.querySelector(`#${element}`).style.borderWidth = "2px";
            document.querySelector(`.${element}`).style.color = "#f96262";
    }

    function defaultStyles(element) {
        document.querySelector(`#${element}`).style.borderColor = "";
        document.querySelector(`#${element}Label`).style.display = "";
        document.querySelector(`#${element}`).style.borderWidth = "";
        document.querySelector(`.${element}`).style.color = "";
}



    function handleSubmit(event) {
        event.preventDefault()
        if (checkoutForm.paymentChoice === "cod") {
            if (checkoutForm.name.length !== 0 && validateEmail(checkoutForm.email) === true && ((checkoutForm.phone.match(/\d/g)?.length === 11) === true || checkoutForm.phone.length !== null) && checkoutForm.address.length !== 0 && checkoutForm.zip.length === 5 && checkoutForm.city.length !== 0 && checkoutForm.country.length !== 0) {
            setCheckoutForm(initialForm)
        }}
        if (checkoutForm.paymentChoice === "emoney") {
            if (checkoutForm.name.length !== 0 && validateEmail(checkoutForm.email) === true && ((checkoutForm.phone.match(/\d/g)?.length === 11) === true || checkoutForm.phone.length !== null) && checkoutForm.address.length !== 0 && checkoutForm.zip.length === 5 && checkoutForm.city.length !== 0 && checkoutForm.country.length !== 0 && checkoutForm.emoney.length === 9 && checkoutForm.pin.length === 4 ) {
                setCheckoutForm(initialForm)  
            }
        }
        
        if (checkoutForm.name.length === 0) {
            errorStyles("name")
        } else {
            defaultStyles("name")
        }
        if (validateEmail(checkoutForm.email) === false) {
            errorStyles("email")
        }  else {
            defaultStyles("email")
        }
        if ((checkoutForm.phone.match(/\d/g)?.length === 11) === false || checkoutForm.phone.length === null) {
            errorStyles("phone")
        }  else {
            defaultStyles("phone")
        }
        if (checkoutForm.address.length === 0) {
            errorStyles("address")
        }  else {
            defaultStyles("address")
        }
        if (checkoutForm.zip.length !== 5) {
            errorStyles("zip")
        }  else {
            defaultStyles("zip")
        }
        if (checkoutForm.city.length === 0) {
            errorStyles("city")
        }  else {
            defaultStyles("city")
        }
        if (checkoutForm.country.length === 0) {
            errorStyles("country")
        }  else {
            defaultStyles("country")
        }
        if (checkoutForm.paymentChoice === "emoney") {
            if (checkoutForm.emoney.length !== 9 ) {
                errorStyles("emoney")
            }  else {
                defaultStyles("emoney")
            }
            if (checkoutForm.pin.length !== 4 ) {
                errorStyles("pin")
            }  else {
                defaultStyles("pin")
            }
        }
 
    }

    return {filteredCart, totalPrice, checkoutForm, setCheckoutForm, handleChange, handleSubmit}
}