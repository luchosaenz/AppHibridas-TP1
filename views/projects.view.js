import { createPage } from '../pages/utils.js'

function createProjectList(projects){
    let content = '<ul>'
    projects.forEach(project => {
        content += '<li>'+project.name+'<a href="/projects/'+project._id+'">Ver</a></li>'
    });
    content += '</ul>'
    return content
}

function createProjectsListPage(projects, section){
    let currentSection = section? section.toUpperCase() : "Projectos"
    let html = `<h1>${currentSection}</h1>`
    html += createProjectList(projects);
    return createPage(currentSection, html);
}

function viewTechnologies(technologies){
    let content = ' '
    if(technologies.length > 0){
        content += technologies[0];
        for (let index = 1; index < technologies.length; index++) {
            content += ', ' + technologies[index];
        }
    }
    return content
}

function createProjectPage(project){
    let html = `<h1>${project.name}</h1>`
    html += '<ul>'
    html += `<li><img src="${project.img}" /></li>`
    html += `<li>Descripción: ${project.description}</li>`
    html += `<li>Tecnologías:${viewTechnologies(project.technologies)}</li>`
    html += `<li>Link del repositorio: <a href="${project.link}">${project.link}</a></li>`
    html += '</ul>'
    return createPage(project.name, html)
}

export {
    createProjectsListPage,
    createProjectPage
}