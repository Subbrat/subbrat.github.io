{
    function formcheck(that) {
        if (that.value == "webdev") {
            document.getElementById("webdeform").style.display = "block";
            document.getElementById("formtype").style.display = "none";
        }
        else if (that.value == "sound") {
            document.getElementById("soundeng").style.display = "block";
            document.getElementById("formtype").style.display = "none";
        }
        else {
            document.getElementById("webdeform", "soundeng").style.display = "none";
        }
    }
    const checkbox = document.querySelector('.frm input[type="checkbox"]');
    const btns = document.querySelectorAll(".frm button");
    checkbox.addEventListener("change", function () {
        const checked = this.checked;
        for (const btn of btns) {
            checked ? (btn.disabled = false) : (btn.disabled = true);
        }
    });
}
{


}