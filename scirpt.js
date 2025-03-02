//Toast Message Function
//use : <button onclick="showToast('success', 'Success! Your changes have been saved.')">Show Success Toast</button>

//toast container : <div class="toast-container" id="toastContainer"> </div>
const toastContainer = document.getElementById('toastContainer');
function showToast(type, message, duration = 3000) {
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    const toastContent = document.createElement('div');
    toastContent.className = 'toast-content';
    const icon = document.createElement('div');
    icon.className = 'toast-icon';
    const iconSVGs = {
        success: '<svg viewBox="0 0 24 24" fill="none" stroke="#28a745" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><path d="M22 4L12 14.01l-3-3"></path></svg>',
        error: '<svg viewBox="0 0 24 24" fill="none" stroke="#dc3545" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>',
        warning: '<svg viewBox="0 0 24 24" fill="none" stroke="#ffc107" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>',
        info: '<svg viewBox="0 0 24 24" fill="none" stroke="#17a2b8" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>'
    };
    icon.innerHTML = iconSVGs[type];
    toastContent.appendChild(icon);
    const toastMessage = document.createElement('div');
    toastMessage.className = 'toast-message';
    toastMessage.textContent = message;
    toastContent.appendChild(toastMessage);
    toast.appendChild(toastContent);
    const closeButton = document.createElement('button');
    closeButton.className = 'toast-close';
    closeButton.innerHTML = '&times;';
    closeButton.addEventListener('click', () => {
        removeToast(toast);
    });
    toast.appendChild(closeButton);
    toastContainer.appendChild(toast);
    setTimeout(() => {
        removeToast(toast);
    }, duration);
}
function removeToast(toast) {
    toast.classList.add('hiding');
    toast.addEventListener('animationend', () => {
        toast.remove();
    });
}
