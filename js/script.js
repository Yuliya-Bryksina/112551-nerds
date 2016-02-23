var link = document.querySelector(".read-us");
var popup = document.querySelector(".modal-content");
var close = popup.querySelector(".modal-content-close");
var names = popup.querySelector("[name=names]");
var form = popup.querySelector("form");
var email = popup.querySelector("[name=email]");
var text = popup.querySelector("[name=letter]");
var storage = localStorage.getItem("names");

link.addEventListener("click", function (event) {
	event.preventDefault();
    popup.classList.add("modal-content-show");
	if (storage) {
        names.value = storage;
        email.focus();
	} else {
	    names.focus();
	}
});

close.addEventListener("click", function (event) {
    event.preventDefault();
    popup.classList.remove("modal-content-show");
});

form.addEventListener("submit", function (event) {
    if (!names.value || !email.value || !text.value) {
        event.preventDefault();
        if (!names.value) {
            names.classList.add("input-shake");
        }
        if (!email.value) {
            email.classList.add("input-shake");
        }
        if (!text.value) {
            text.classList.add("input-shake");
        }
        console.log("Нужно ввести имя и email");
    } else {
        localStorage.setItem("names", names.value);
    }
});

window.addEventListener("keydown", function (event) {
    if (event.keyCode === 27) {
        if (popup.classList.contains("modal-content-show")) {
            popup.classList.remove("modal-content-show");
	    }
	}
});
