$("#bsave").click((e) => {
    e.preventDefault(); // Ka hortag page reload
    $.ajax({
        url: "/login",
        method: "GET", // ✅ GET sida aad rabto
        data: $("#fm").serialize(),
        success: (res) => {
            $("#pp").html(res); // ku qor jawaabta div-ka #pp
        },
        error: (xhr) => {
            $("#pp").html("Error: " + xhr.status + " - " + xhr.statusText);
        }
    });
});
