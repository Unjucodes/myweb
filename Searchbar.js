let input = document.querySelector('input'); 


input.addEventListener('keyup', (e) => {
    console.log (e.target.value);
    if(event.key === "Enter" && (e.target.value === "hi" || e.target.value === "Hi" || e.target.value === "HI"|| e.target.value === "hello"|| e.target.value === "HELLO"|| e.target.value === "Hello")){
        console.log (e.target.value);
        window.open("search.html")
    }
    if(event.key === "Enter" && (e.target.value === "Contact" || e.target.value === "contact" || e.target.value === "CONTACT")){
        console.log (e.target.value);
        window.open("contact.html");
    }
    if(event.key === "Enter" && (e.target.value === "CREDITS" || e.target.value === "Credits" || e.target.value === "credits"|| e.target.value === "CREDIT"|| e.target.value === "Credit"|| e.target.value === "credit")){
        console.log (e.target.value);
        window.open("credits.html");
    }
})








