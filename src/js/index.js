var list = document.querySelector(".list");
var footer = document.querySelector("footer");
var dialog = document.querySelector(".dialog");
var confirm = document.querySelector("#confirm");
var fl = document.querySelector("#fl");
var xhr = new XMLHttpRequest();
xhr.open('post', '/api/list');
xhr.onload = function(res) {
    data = JSON.parse(res.target.responseText)
        // console.log(data.data)
    var li = '';
    data.data.map(function(item, index) {
        li += '<li>' +
            '<div class="left">' +
            '<h3>分类水果：' + item.name +
            '</h3><p>追加时间：' + new Date().toLocaleString() + '</p>' +
            '</div>';
        li += '<div class="right">' +
            '<p>' +
            '<img src="img/bj.png" alt="">' +
            '</p>' +
            '<p>' +
            '<img src="img/lj.png" alt="">' +
            '</p>' +
            ' </div>' +
            ' </li>'
    });
    list.innerHTML = li;

    footer.onclick = function() {
        dialog.style.display = "block";
        var oLi = document.createElement('li');
        confirm.onclick = function() {
            var flval = fl.value;
            oLi.innerHTML = '<div class="left">' +
                '<h3>分类水果：' + flval +
                '</h3><p>追加时间：' + new Date().toLocaleString() + '</p>' +
                '</div><div class="right">' +
                '<p>' +
                '<img src="img/bj.png" alt="">' +
                '</p>' +
                '<p>' +
                '<img src="img/lj.png" alt="">' +
                '</p>' +
                ' </div>';
            list.appendChild(oLi);
            dialog.style.display = "none";
        }

    }




}
xhr.setRequestHeader('content-type', 'application/json');
xhr.send();

new BScroll('section')