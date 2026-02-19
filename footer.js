document.getElementById('footer-placeholder').innerHTML = `
<footer class="footer">
    <div class="footer-content">
        <div class="footer-section">
            <h3>Visit</h3>
            <p>197 King St East<br>
            Toronto, ON M5A 1J5</p>
            <p class="hours">Mon–Sun 7am–7pm</p>
        </div>
        
        <div class="footer-section">
            <h3>Connect</h3>
            <!-- TEMPORARILY HIDDEN - Uncomment when ready to launch
            <p><a href="tel:+1234567890">123 456 7890</a></p>
            -->
            <p><a href="mailto:info@skoomcoffee.com">info@skoomcoffee.com</a></p>
            <p><a href="https://instagram.com/skoomcoffee" target="_blank">Instagram</a></p>
        </div>
        
        <div class="footer-section footer-newsletter">
            <h3>Newsletter</h3>
            <form id="footer-form" action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSdC929LWcphIc3nx-m2R0jdIDs-Jsfdg7LWAAaIQXXcbgkFjw/formResponse" 
                  method="POST" target="hidden_iframe_footer">
                <div class="newsletter-input">
                    <input type="email" name="entry.504539600" placeholder="Your email" required>
                    <button type="submit">→</button>
                </div>
            </form>
            <iframe name="hidden_iframe_footer" id="hidden_iframe_footer" style="display:none;"></iframe>
            <p id="footer-success" class="success-text">Thanks for signing up</p>
        </div>
    </div>
    
    <div class="footer-bottom">
        <p>© 2026 Skoom Coffee</p>
    </div>
</footer>

<style>
    .footer {
        background-color: var(--brown);
        color: var(--cream);
        padding: 6rem 2rem 2rem;
    }
    
    .footer-content {
        max-width: 1200px;
        margin: 0 auto;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 4rem;
        margin-bottom: 4rem;
    }
    
    .footer-section h3 {
        font-size: 0.75rem;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.15em;
        margin-bottom: 1.5rem;
        color: var(--cream);
        opacity: 0.6;
    }
    
    .footer-section p {
        color: var(--cream);
        line-height: 1.8;
        margin-bottom: 0.5rem;
        font-size: 1rem;
    }
    
    .footer-section a {
        color: var(--cream);
        text-decoration: none;
        transition: opacity 0.3s ease;
        border-bottom: 1px solid transparent;
    }
    
    .footer-section a:hover {
        opacity: 0.6;
        border-bottom: 1px solid var(--cream);
    }
    
    .hours {
        margin-top: 1rem;
        opacity: 0.7;
        font-size: 0.9rem;
    }
    
    /* Newsletter */
    .newsletter-input {
        display: flex;
        border-bottom: 2px solid var(--cream);
        padding-bottom: 0.5rem;
        margin-bottom: 1rem;
    }
    
    .newsletter-input input {
        flex: 1;
        background: transparent;
        border: none;
        color: var(--cream);
        font-size: 1rem;
        font-family: 'Helvetica Neue', sans-serif;
        outline: none;
    }
    
    .newsletter-input input::placeholder {
        color: var(--cream);
        opacity: 0.5;
    }
    
    .newsletter-input button {
        background: transparent;
        border: none;
        color: var(--cream);
        font-size: 1.5rem;
        cursor: pointer;
        padding: 0 0.5rem;
        transition: transform 0.2s ease;
    }
    
    .newsletter-input button:hover {
        transform: translateX(5px);
    }
    
    .success-text {
        display: none;
        font-size: 0.9rem;
        opacity: 0.7;
    }
    
    .footer-bottom {
        text-align: center;
        padding-top: 2rem;
        border-top: 1px solid rgba(244, 243, 235, 0.2);
        color: var(--cream);
        opacity: 0.4;
        font-size: 0.75rem;
        text-transform: uppercase;
        letter-spacing: 0.1em;
    }
    
    @media (max-width: 768px) {
        .footer-content {
            grid-template-columns: 1fr;
            gap: 3rem;
        }
    }
</style>
`;

// Handle newsletter submission
setTimeout(() => {
    const footerForm = document.getElementById('footer-form');
    if (footerForm) {
        footerForm.onsubmit = function() {
            this.style.display = 'none';
            document.getElementById('footer-success').style.display = 'block';
        };
    }
}, 100);
