function createPage(title, content){
    let html ='<!DOCTYPE HTML><html><head><meta charset="UTF-8>'
    html += `<title>${title}</title></head><body>`
    html += '<a href="/projects">Home</a> | <a href="/projects?section=mobile">Mobile</a> | <a href="/projects?section=landing">LandingPage</a>| <a href="/projects?section=webapp">Web App</a> | <a href="/projects?section=ecommerce">eCommerce</a> | <a href="/projects?section=game">Games</a>'
    html += content;
    html += '</body></html>'
    return html;
}

export {
    createPage
}