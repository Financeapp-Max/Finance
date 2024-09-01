// Función para agregar un recordatorio
document.getElementById('add-reminder').addEventListener('click', function() {
    const reminderText = document.getElementById('reminder-text').value;
    const reminderDate = document.getElementById('reminder-date').value;
    const reminderTime = document.getElementById('reminder-time').value;
    
    if (reminderText && reminderDate && reminderTime) {
        const reminderDateTime = new Date(`${reminderDate}T${reminderTime}`);
        const now = new Date();
        
        if (reminderDateTime > now) {
            addReminder(reminderText, reminderDateTime);
            scheduleNotification(reminderText, reminderDateTime);
            clearForm();
        } else {
            alert("La fecha y hora deben ser en el futuro.");
        }
    } else {
        alert("Por favor, completa todos los campos.");
    }
});

// Función para agregar el recordatorio a la lista
function addReminder(text, dateTime) {
    const reminderList = document.getElementById('reminder-list');
    const listItem = document.createElement('li');
    
    listItem.textContent = `${text} - ${dateTime.toLocaleString()}`;
    
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Eliminar';
    deleteButton.addEventListener('click', function() {
        reminderList.removeChild(listItem);
    });
    
    listItem.appendChild(deleteButton);
    reminderList.appendChild(listItem);
}

// Función para programar la notificación
function scheduleNotification(text, dateTime) {
    const timeUntilNotification = dateTime.getTime() - new Date().getTime();
    
    setTimeout(function() {
        alert(`¡Recordatorio! ${text}`);
    }, timeUntilNotification);
}

// Función para limpiar el formulario después de agregar un recordatorio
function clearForm() {
    document.getElementById('reminder-text').value = '';
    document.getElementById('reminder-date').value = '';
    document.getElementById('reminder-time').value = '';
}

// Función para el botón de "Volver"
document.getElementById('btnBackFromRecordatorio').addEventListener('click', function() {
    // Redirige a la página anterior o a una página específica
    window.history.back(); // Esto hará que el navegador vuelva a la página anterior
});



document.getElementById('btnGestorGastos').addEventListener('click', function() {
    window.location.href = 'gestor_gastos.html';
});

document.getElementById('btnRecomendaciones').addEventListener('click', function() {
    window.location.href = 'recomendaciones.html';
});

document.getElementById('btnRecordatorio').addEventListener('click', function() {
    window.location.href = 'recordatorio.html';
});

document.getElementById('btnBackFromRecomendaciones').addEventListener('click', function() {
    window.location.href = 'index.html';
});

document.getElementById('btnBackFromRecordatorio').addEventListener('click', function() {
    window.location.href = 'index.html';
});

document.getElementById('btnBackFromGastos').addEventListener('click', function() {
    window.location.href = 'index.html';
});

