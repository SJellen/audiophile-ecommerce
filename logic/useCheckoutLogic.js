import { useContext, useEffect, useState } from "react";
import { Context } from "../context/Context";
import useCartLogic from "./useCartLogic";

export default function useCheckoutLogic() {

    const {filteredCart, totalPrice} = useCartLogic()
    const {isOrderComplete, setIsOrderComplete} = useContext(Context)

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

    function validateZipCode(zipCode){
        var zipCodePattern = /^\d{5}$|^\d{5}-\d{4}$/
         return zipCodePattern.test(zipCode)
    }

    function validateEmoney(pin){
        return /^\d{9}$/.test(pin);
     }

    function validatePIN(pin) {
        return /^\d{4}$/.test(pin);
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
            if (checkoutForm.name.length !== 0 && validateEmail(checkoutForm.email) === true && ((checkoutForm.phone.match(/\d/g)?.length === 11) === true || checkoutForm.phone.length !== null) && checkoutForm.address.length !== 0 && validateZipCode(checkoutForm.zip) === true && checkoutForm.city.length !== 0 && checkoutForm.country.length !== 0) {
            setCheckoutForm(initialForm)
            setIsOrderComplete(true)
        }}
        if (checkoutForm.paymentChoice === "emoney") {
            if (checkoutForm.name.length !== 0 && validateEmail(checkoutForm.email) === true && ((checkoutForm.phone.match(/\d/g)?.length === 11) === true || checkoutForm.phone.length !== null) && checkoutForm.address.length !== 0 && validateZipCode(checkoutForm.zip) === true && checkoutForm.city.length !== 0 && checkoutForm.country.length !== 0 && validateEmoney(checkoutForm.emoney) === true && validatePIN(checkoutForm.pin) === true) {
                setCheckoutForm(initialForm)  
                setIsOrderComplete(true)
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
        if (validateZipCode(checkoutForm.zip) !== true) {
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
            if (validateEmoney(checkoutForm.emoney) !== true) {
                errorStyles("emoney")
            }  else {
                defaultStyles("emoney")
            }
            if (validatePIN(checkoutForm.pin) !== true) {
                errorStyles("pin")
            }  else {
                defaultStyles("pin")
            }
        }
 
    }

    const [showFullList, setShowFullList] = useState(true)

    function handleOrderCompleteToggle() {
        if (showFullList) {
            setShowFullList(false) 
            
        } else {
            setShowFullList(true)
        }
        
    }

    

    return {filteredCart, totalPrice, checkoutForm, setCheckoutForm, handleChange, handleSubmit, handleOrderCompleteToggle, showFullList}
}