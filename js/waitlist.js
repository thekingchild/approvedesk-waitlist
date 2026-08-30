(function () {
    var form = document.getElementById("waitlist-form");
    var success = document.getElementById("waitlist-success");

    if (!form || !success) {
        return;
    }

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        if (!form.reportValidity()) {
            return;
        }

        form.hidden = true;
        success.hidden = false;
    });
})();
