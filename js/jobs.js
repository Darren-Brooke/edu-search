//Takes value from search bar and outputs relevant job field
$(document).ready(function () {
    $("#job_search").on('click', function () {

        let search = $("#search").val();

        $.ajax({
            url: "https://api.lmiforall.org.uk/api/v1/soc/search?q=" + search,
            type: "get",
            dataType: "json",
            success: function (data) {
                console.log(data);
                let job_list = '';

                $.each(data, function (key, value) {
                    job_list += ('<h2>' + value.title + '</h2>' + '<h3>Qualifications</h3></br>' + value.qualifications + '</br><br/>' + '<h3>Description</h3></br>' + value.description + '</br>' +
                        '<hr class="job-border">');
                });

                $('.list').html(job_list);
                $('.job-field').html(search);
                $('.job-default').html("");
            }
        });
    });
});

//Function takes value from side menu and outputs relevant job field
function jobValue(value) {
    let search = (value);
    $.ajax({
        url: "https://api.lmiforall.org.uk/api/v1/soc/search?q=" + search,
        type: "get",
        dataType: "json",
        success: function (data) {
            console.log(data);
            let job_list = '';

            $.each(data, function (key, value) {
                job_list += ('<h2>' + value.title + '</h2>' + '<h3>Qualifications</h3></br>' + value.qualifications + '</br><br/>' + '<h3>Description</h3></br>' + value.description + '</br>' +
                    '<hr class="job-border">');
            });

            $('.list').html(job_list);
            $('.job-field').html(search);
            $('.job-default').html("");

        }
    });
}

$(function () {
    $("<select />").appendTo("nav");
    $("<option />", {
        "selected": "selected",
        "value": "",
        "text": "Go to..."
    }).appendTo("nav select");
    $("nav a").each(function () {
        var el = $(this);
        $("<option />", {
            "value": el.attr("href"),
            "text": el.text()
        }).appendTo("nav select");
    });
    $("nav select").change(function () {
        window.location = $(this).find("option:selected").val();
    });
});

