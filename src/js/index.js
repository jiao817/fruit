var list = document.querySelector(".list");
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

}
xhr.setRequestHeader('content-type', 'application/json');
xhr.send();