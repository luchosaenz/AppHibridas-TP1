function createPage(title, content){
    let html ='<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8><meta name="viewport" content="width=device-width, initial-scale=1.0">'
    html += `<title>${title}</title></head><body>`
    html += '<a href="/projects">Home</a> | <a href="/projects?section=mobile">Mobile</a> | <a href="/projects?section=landing">LandingPage</a>| <a href="/projects?section=webapp">Web App</a> | <a href="/projects?section=ecommerce">eCommerce</a> | <a href="/projects?section=game">Games</a>'
    html += content;
    html += '</body></html>'
    return html;
}

export {
    createPage
}