const btn = document.querySelector(".button");

const editTextInputs = document.querySelectorAll(".editext");
console.log(editTextInputs);

const errClasses = document.querySelectorAll(".err");
console.log(errClasses);

errClasses.forEach(function (e) {
    e.style.visibility = "hidden"
});


btn.addEventListener("click", function (e) {

    errClasses.forEach(function (e) {
        e.style.visibility = "hidden"
    });


    editTextInputs.forEach(function (input) {
        input.addEventListener("change", function () {
            console.log(input.value);
        })

        // let id = "#" + input.id;
        let id = "#" + input.id;
        let id1 = id + "1";
        let id2 = id + "2";
        let id3 = id + 3;

        if (input.value !== "") {
            if (input.id === "f" && input.id === "l" && input.id === "e" && input.id === "p") {
                console.log("OK");
            }
        } else {
            document.querySelector(id).placeholder = "";
            document.querySelector(id1).style.visibility = "visible";
            document.querySelector(id2).style.visibility = "visible";
            document.querySelector(id3).style.borderColor = "#ff7979";

            const style = document.createElement("style")
            style.type = "text/css"
            const {
                sheet
            } = document.head.appendChild(style)

            const rule = sheet.insertRule("::placeholder {}")
            const placeholderStyle = sheet.rules[rule].style;
            placeholderStyle.color = "#ff7979";

            document.querySelector(".email").placeholder = "ikechi@gmail/com";

        }

    })


})

