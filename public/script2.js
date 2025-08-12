// Save user
$("#bsave").click(() => {
    $.ajax({
        url: "/users",
        method: "POST",
        data: $("#fm").serialize(),
        success: (res) => {
            $("#app").html(res);
            loadUsers(); // Reload table after save
        }
    });
});

// Load users table
function loadUsers() {
    $.ajax({
        url: "/userView",
        method: "GET",
        success: (res) => {
            let table = "<table border='1'><thead><tr><th>ID</th><th>User name</th><th>Password</th></tr></thead><tbody>";
            let array = res.split("/");

            array.forEach((row) => {
                if (row.trim() !== "") {
                    table += "<tr>";
                    let values = row.split(",");
                    values.forEach((val) => table += `<td>${val}</td>`);
                    table += "</tr>"; // close row
                }
            });

            table += "</tbody></table>";
            $("#report").html(table);
        }
    });
}

// Marka page-ka la furo
loadUsers();
