document.addEventListener('DOMContentLoaded', function () {
    let add_something_btn = document.querySelector('#add_something_btn');
    let outputcontent = document.querySelector('#outputcontent');
    let input = document.querySelector('#input');
    let editDynamicContent = null;

    add_something_btn.addEventListener('click', function (event) {
        event.preventDefault();
        let input_value = input.value;
        if (input_value) {
            if (editDynamicContent) {
                editDynamicContent.querySelector('.input_text').textContent = input_value;
                editDynamicContent = null;
                sortContent();
                input.value = '';
            }
            else {
                let dynamic_content = document.createElement('div');
                dynamic_content.className = "dynamic_content";
                dynamic_content.innerHTML = `
                    <h4 class='input_text'>${input_value}</h4>
                    <div class="icon_div" id="icon_div">
                    <i class="fas fa-edit edit_btn"></i>
                    <i class="fas fa-trash delete_btn"></i>
                    </div>
                `;
                outputcontent.appendChild(dynamic_content);
                sortContent();
                input.value = '';
            }
        }
        else {
            alert("Empty value is not alowded");
        }
    })
    outputcontent.addEventListener('click', function (event) {
        if (event.target.classList.contains('delete_btn')) {
            let dynamicContent = event.target.parentNode.parentNode;
            dynamicContent.parentNode.removeChild(dynamicContent);
        }
        if (event.target.classList.contains('edit_btn')) {
            let edit_value = event.target.parentNode.previousElementSibling.textContent;
            input.value = edit_value;
            editDynamicContent = event.target.parentNode.parentNode;
        }
    })
    function sortContent() {
        let allDynamicContent = Array.from(outputcontent.querySelectorAll('.dynamic_content'));
        allDynamicContent.sort((a, b) => {
            let TextA = a.querySelector('.input_text').textContent.toLowerCase();
            let TextB = b.querySelector('.input_text').textContent.toLowerCase();
            return TextA.localeCompare(TextB);
        });

        outputcontent.innerHTML = '';

        allDynamicContent.forEach((element) => {
            outputcontent.appendChild(element);
        })
    }
})