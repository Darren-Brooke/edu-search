//Places the University Name Value into a clickable href to take the user to the university page domain
$(function () {
    $.ajax({
        url: "json/uni_list.json",
        type: "get",
        dataType: "json",
        success: function (data) {
            console.log(data);
            let uni_list = '';
            $.each(data, function (key, value) {
                uni_list += ("<a href='" + value.web_pages + "' > " + value.name + "</a>");
            });
            $('.list').html(uni_list);
        }
    });
});