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



    function handleSubmit(event) {
        event.preventDefault()
        console.log(checkoutForm)
        if (checkoutForm.name.length === 0) {
            document.querySelector("#name").style.borderColor = "#f96262";
            document.querySelector("#nameLabel").style.display = "flex";
            document.querySelector("#name").style.borderWidth = "2px";
            document.querySelector(".name").style.color = "#f96262";
        }
        if (validateEmail(checkoutForm.email) === false) {
            document.querySelector("#email").style.borderColor = "#f96262";
            document.querySelector("#emailLabel").style.display = "flex";
            document.querySelector("#email").style.borderWidth = "2px";
            document.querySelector(".email").style.color = "#f96262";
        } 
        if ((checkoutForm.phone.match(/\d/g)?.length === 11) === false || checkoutForm.phone.length === null) {
            document.querySelector("#phone").style.borderColor = "#f96262";
            document.querySelector("#phoneLabel").style.display = "flex";
            document.querySelector("#phone").style.borderWidth = "2px";
            document.querySelector(".phone").style.color = "#f96262";
        }
        if (checkoutForm.address.length === 0) {
            document.querySelector("#address").style.borderColor = "#f96262";
            document.querySelector("#addressLabel").style.display = "flex";
            document.querySelector("#address").style.borderWidth = "2px";
            document.querySelector(".address").style.color = "#f96262";
        }
        if (checkoutForm.zip.length !== 5) {
            document.querySelector("#zip").style.borderColor = "#f96262";
            document.querySelector("#zipLabel").style.display = "flex";
            document.querySelector("#zip").style.borderWidth = "2px";
            document.querySelector(".zip").style.color = "#f96262";
        }
        if (checkoutForm.city.length === 0) {
            document.querySelector("#city").style.borderColor = "#f96262";
            document.querySelector("#cityLabel").style.display = "flex";
            document.querySelector("#city").style.borderWidth = "2px";
            document.querySelector(".city").style.color = "#f96262";
        }
        if (checkoutForm.country.length === 0) {
            document.querySelector("#country").style.borderColor = "#f96262";
            document.querySelector("#countryLabel").style.display = "flex";
            document.querySelector("#country").style.borderWidth = "2px";
            document.querySelector(".country").style.color = "#f96262";
        }

        

        
        

        // document.querySelector("#email").style.borderColor = "#f96262";
        // document.querySelector("#emailLabel").style.display = "flex";
        // document.querySelector("#email").style.borderWidth = "2px";
        // document.querySelector(".email").style.color = "#f96262";
        
        // setCheckoutForm(initialForm)
        
        
    }

    return {filteredCart, totalPrice, checkoutForm, setCheckoutForm, handleChange, handleSubmit}
}