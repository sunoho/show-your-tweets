// title : おまえのツイートを見せろ
// description : ユーザータイムラインからRTとリプライを除去して表示
// author : sunoho
// create：2023-02-22
// update：2023-02-22
(function() {
var sname = location.href.split('/').slice(-1)[0];
var f1 = 'https://twitter.com/search?q=from%3A';
var f2 = '%20-filter%3Aretweets%20-filter%3Areplies&src=typed_query&f=live'
window.open(f1 + sname + f2);
})();