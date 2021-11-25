let reload = false;
let _trackingCookies = [];

function initGTM(w, d, s, l, i) {
    console.log("reload = " + reload);
    console.log("tracking = " + _trackingCookies);
    if(reload){
        for (let index = 0; index < _trackingCookies.length; index++) {
            document.cookie = _trackingCookies[index].name + "; ";
            console.log(_trackingCookies[index]);
        }
    }
    reload = true;
    w[l] = w[l] || [];
    w[l].push({
        'gtm.start': new Date().getTime(),
        event: 'gtm.js'
    });
    var f = d.getElementsByTagName(s)[0],
        j = d.createElement(s),
        dl = l != 'dataLayer' ? '&l=' + l : '';
    j.async = true;
    j.src =
        'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
    f.parentNode.insertBefore(j, f);
}

function stopGTM() {
    cookieStore.getAll().then(cookies => cookies.forEach(cookie => {
        if(cookie.name == "cookieconsent_status"){
            return;
        }
        _trackingCookies.push(cookie.name, cookie.value);
        cookieStore.delete(cookie.name);
    }));
}