import { projects, skills, hardwareLab, leadership } from '../projectsData.js';

export function renderRecruiterMode() {
    const hardwareProjects = projects.filter(p => p.category.includes("Hardware"));
    const softwareProjects = projects.filter(p => !p.category.includes("Hardware"));

    renderProjectsGrid('hardware-grid', hardwareProjects);
    renderProjectsGrid('software-grid', softwareProjects);
    renderSkills();
    renderHardwareLab();
    renderLeadership();
}

function renderProjectsGrid(gridId, projectList) {
    const grid = document.getElementById(gridId);
    if (!grid) return;
    grid.innerHTML = ''; 
    
    projectList.forEach(project => {
        const card = document.createElement('div');
        card.className = 'project-card';
        
        const cat = document.createElement('div');
        cat.className = 'project-category';
        cat.textContent = project.category;
        card.appendChild(cat);
        
        const title = document.createElement('h3');
        title.textContent = project.title;
        card.appendChild(title);
        
        const sum = document.createElement('p');
        sum.className = 'project-summary';
        sum.textContent = project.summary;
        card.appendChild(sum);
        
        const stack = document.createElement('div');
        stack.className = 'project-stack';
        project.stack.forEach(tech => {
            const tag = document.createElement('span');
            tag.className = 'stack-tag';
            tag.textContent = tech;
            stack.appendChild(tag);
        });
        card.appendChild(stack);
        
        const hlList = document.createElement('ul');
        hlList.className = 'project-highlights';
        project.highlights.forEach(hl => {
            const li = document.createElement('li');
            li.textContent = hl;
            hlList.appendChild(li);
        });
        card.appendChild(hlList);
        
        const actions = document.createElement('div');
        actions.className = 'project-actions';
        
        if (project.demoLink && project.demoLink !== '#') {
            const demoLink = document.createElement('a');
            demoLink.href = project.demoLink;
            demoLink.target = '_blank';
            demoLink.textContent = 'View Live Demo ↗';
            actions.appendChild(demoLink);
        }
        
        const repoLink = document.createElement('a');
        repoLink.href = project.repoLink;
        repoLink.target = '_blank';
        repoLink.textContent = 'Source Code (GitHub) ↗';
        actions.appendChild(repoLink);
        
        card.appendChild(actions);
        grid.appendChild(card);
    });
}

function renderSkills() {
    const grid = document.getElementById('skills-grid');
    if (!grid) return;
    grid.innerHTML = '';
    
    skills.forEach(skillSet => {
        const cat = document.createElement('div');
        cat.className = 'skill-category';
        
        const title = document.createElement('h3');
        title.textContent = skillSet.category;
        cat.appendChild(title);
        
        const items = document.createElement('div');
        items.className = 'skill-items';
        skillSet.items.forEach(item => {
            const span = document.createElement('span');
            span.textContent = item;
            items.appendChild(span);
        });
        cat.appendChild(items);
        
        grid.appendChild(cat);
    });
}

function renderHardwareLab() {
    const grid = document.getElementById('hardware-content');
    if (!grid) return;
    grid.innerHTML = '';
    
    hardwareLab.forEach(item => {
        const card = document.createElement('div');
        card.className = 'hardware-card';
        
        const title = document.createElement('h3');
        title.textContent = item.title;
        card.appendChild(title);
        
        const desc = document.createElement('p');
        desc.textContent = item.description;
        card.appendChild(desc);
        
        grid.appendChild(card);
    });
}

function renderLeadership() {
    const grid = document.getElementById('leadership-grid');
    if (!grid) return;
    grid.innerHTML = '';
    
    leadership.forEach(item => {
        const card = document.createElement('div');
        card.className = 'leadership-card';
        
        const title = document.createElement('h3');
        title.textContent = item.title;
        card.appendChild(title);
        
        const desc = document.createElement('p');
        desc.textContent = item.description;
        card.appendChild(desc);
        
        grid.appendChild(card);
    });
}
