// Get current page filename to set active nav link
const currentPage = window.location.pathname.split('/').pop() || 'index.html';

document.getElementById('nav-placeholder').innerHTML = `
<nav>
    <div class="nav-container">
        <a href="index.html" class="nav-logo-link">
            <img src="skoomlogo.svg" alt="Skoom Coffee" class="nav-logo">
        </a>
        <div class="menu-toggle" onclick="toggleMenu()">
            <span></span>
            <span></span>
            <span></span>
        </div>
        <ul class="nav-links" id="navLinks">
            <li><a href="index.html" class="${currentPage === 'index.html' || currentPage === '' ? 'active' : ''}">Home</a></li>
            <li><a href="events.html" class="${currentPage === 'events.html' ? 'active' : ''}">Events</a></li>
            <!-- TEMPORARILY HIDDEN - Uncomment when shop is ready to launch
            <li><a href="shop.html" class="${currentPage === 'shop.html' ? 'active' : ''}">Shop</a></li>
            -->
            <li><a href="contact.html" class="${currentPage === 'contact.html' ? 'active' : ''}">Contact</a></li>
        </ul>
    </div>
</nav>
`;

// Mobile menu toggle function
function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('active');
}
