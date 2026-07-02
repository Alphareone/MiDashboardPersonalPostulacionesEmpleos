// Configuración Inicial de Datos
let jobs = JSON.parse(localStorage.getItem('myAdvancedJobs')) || [];

// Listener para el Formulario de Postulaciones
document.getElementById('jobForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const newJob = {
        id: Date.now(),
        date: new Date().toLocaleDateString('es-CL'),
        company: document.getElementById('company').value,
        role: document.getElementById('role').value,
        link: document.getElementById('link').value,
        modality: document.getElementById('modality').value,
        status: document.getElementById('status').value
    };

    jobs.unshift(newJob); // Agrega el nuevo registro al principio de la lista
    saveData();
    this.reset();
    renderJobs();
});

// Función para Guardar Datos en LocalStorage
function saveData() {
    localStorage.setItem('myAdvancedJobs', JSON.stringify(jobs));
    updateStats();
}

// Función para Eliminar un Registro
function deleteJob(id) {
    if(confirm('¿Seguro que quieres eliminar este registro?')) {
        jobs = jobs.filter(job => job.id !== id);
        saveData();
        renderJobs();
    }
}

// Función para Cambiar el Estado Directamente desde la Tarjeta
function updateStatus(id, newStatus) {
    const jobIndex = jobs.findIndex(job => job.id === id);
    if (jobIndex > -1) {
        jobs[jobIndex].status = newStatus;
        saveData();
        renderJobs();
    }
}

// Función para Actualizar el Panel de Estadísticas Superior
function updateStats() {
    document.getElementById('statTotal').innerText = jobs.length;
    document.getElementById('statEntrevistas').innerText = jobs.filter(j => j.status === 'Entrevista').length;
    document.getElementById('statOfertas').innerText = jobs.filter(j => j.status === 'Oferta').length;
}

// Función para Renderizar la Interfaz con los Filtros Aplicados
function renderJobs() {
    const container = document.getElementById('jobsContainer');
    const filter = document.getElementById('filterStatus').value;
    container.innerHTML = '';

    const filteredJobs = filter === 'Todos' ? jobs : jobs.filter(job => job.status === filter);

    if(filteredJobs.length === 0) {
        container.innerHTML = '<p style="color: gray; grid-column: 1 / -1; text-align: center; padding: 20px;">No hay registros para mostrar.</p>';
        return;
    }

    filteredJobs.forEach(job => {
        const card = document.createElement('div');
        card.className = `job-card border-${job.status.toLowerCase()}`;
        
        card.innerHTML = `
            <div class="job-header">
                <div>
                    <div class="job-title">${job.role}</div>
                    <div class="job-company"><i class="far fa-building"></i> ${job.company}</div>
                </div>
            </div>
            
            <div class="badges-container">
                <span class="badge badge-modality"><i class="fas fa-map-marker-alt"></i> ${job.modality}</span>
                <span class="badge bg-${job.status.toLowerCase()}">${job.status}</span>
            </div>

            <div class="job-date"><i class="far fa-calendar-alt"></i> Postulado el: ${job.date}</div>

            <div class="job-actions">
                ${job.link ? `<a href="${job.link}" target="_blank" class="btn-link"><i class="fas fa-external-link-alt"></i> Ver Oferta</a>` : '<span></span>'}
                
                <select onchange="updateStatus(${job.id}, this.value)" style="width: auto; padding: 5px; font-size: 0.8rem; margin-left: auto; margin-right: 10px;">
                    <option value="Postulado" ${job.status === 'Postulado' ? 'selected' : ''}>Mover a Postulado</option>
                    <option value="Contacto" ${job.status === 'Contacto' ? 'selected' : ''}>Mover a Contacto</option>
                    <option value="Entrevista" ${job.status === 'Entrevista' ? 'selected' : ''}>Mover a Entrevista</option>
                    <option value="Oferta" ${job.status === 'Oferta' ? 'selected' : ''}>Mover a Oferta</option>
                    <option value="Rechazado" ${job.status === 'Rechazado' ? 'selected' : ''}>Mover a Rechazado</option>
                </select>

                <button class="btn-delete" onclick="deleteJob(${job.id})" title="Eliminar"><i class="fas fa-trash-alt"></i></button>
            </div>
        `;
        container.appendChild(card);
    });
    
    updateStats();
}

// Carga Inicial Automática al Abrir el Sitio
renderJobs();
