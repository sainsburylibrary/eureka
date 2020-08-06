(function() {
    var s = document.createElement('script');
    s.type = 'text/javascript';
//    s.async = true;

    var page_url = window.location.href;
    var beam404_url = 'https://wayback.archive-it.org/2502/20190705110309/' + encodeURIComponent(page_url);
    s.src = beam404_url;
    var h = document.getElementsByTagName('head').item(0) || document.documentElement;
    h.appendChild(s);

//    var l  = document.createElement('link');
//    l.rel  = 'stylesheet';
//    l.type = 'text/css';
//    l.href = 'https://archive.org/web/beam404.css';
//    h.appendChild(l);
})();

// beam404_callback = function(obj) {
    var archived_text = "Would you like to <a href='$url' onClick='beam404_record_click(this); return true;'>see an archived version of this page</a> in the Bodleian Libraries' Web Archive?";
    var maybe_text    = "Would you like to <a href='$url' onClick='beam404_record_click(this); return true;'>check the Bodleian Libraries' Web Archive</a> for this website?";
    var wb_image = 'https://archive-it.org/image/account/logo/467';

//    if (!obj.archived_snapshots || !obj.archived_snapshots.closest || !obj.archived_snapshots.closest.available) {
//        return false;
//    }

//    var url = obj.archived_snapshots.closest.url;
    var html = "<br/><div class='beam404_imagediv'><a href='"+url+"' onClick='beam404_record_click(this); return true;'><img class='beam404_image' src='" + wb_image + "'/></a></div>";


        html += "<div class='beam404_text'>" + archived_text.replace('$url', url) + "</div><br clear='both'/>";
        html += "<div class='beam404_text'>" + maybe_text.replace('$url', url) + "</div><br clear='both'/>";

    var beam404_div = document.getElementById('beam404');
    if (beam404_div) {
        beam404_div.innerHTML = html;
    }
}

beam404_record_click = function(link) {
    var img = new Image(1,1);
    img.src='https://analytics.archive.org/0.gif?beam404_clickthrough=1';
    setTimeout(function(){window.location.href = link.href}, 100);
}
