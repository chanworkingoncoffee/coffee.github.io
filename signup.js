document.getElementById('signup-placeholder').innerHTML = `
<iframe name="hidden_iframe" id="hidden_iframe" style="display:none;"></iframe>

<style>
    .signup-section { background-color: #2C180F; padding: 4rem 2rem; text-align: center; }
    .signup-container { max-width: 800px; margin: 0 auto; }
    .signup-section h2 { font-size: 2.5rem; color: #F4F3EB; margin-bottom: 1rem; letter-spacing: 0.05em; }
    .signup-section p { font-size: 1.2rem; color: #95AAB7; margin-bottom: 2rem; line-height: 1.6; }
    
    #form-wrapper { max-width: 500px; margin: 0 auto; background: transparent; }

    .custom-form-layout { display: flex; justify-content: center; border: 1px solid #F4F3EB; }
    .custom-form-layout input[type="email"] { 
        flex: 1; padding: 15px; border: none; outline: none; 
        background-color: #F4F3EB; color: #2C180F; font-size: 16px; 
    }
    
    .custom-form-layout button { 
        padding: 15px 30px; background-color: #FE3D06; 
        color: #F4F3EB; border: none; cursor: pointer; font-weight: bold; 
    }

    /* Success Message Styling */
    .success-msg { color: #F4F3EB; padding: 20px; font-size: 1.5rem; display: none; }

    @media (max-width: 480px) {
        .custom-form-layout { display: block; border: none; }
        .custom-form-layout input { width: 100%; border: 1px solid #F4F3EB; margin-bottom: 10px; }
        .custom-form-layout button { width: 100%; }
    }
</style>

<section class="signup-section">
    <div class="signup-container">
        <h2>Stay in touch</h2>
        <p>Sign up for occasional promos and news. Opt out anytime.</p>
        
        <div id="form-wrapper">
            <form id="skoom-form" action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSdC929LWcphIc3nx-m2R0jdIDs-Jsfdg7LWAAaIQXXcbgkFjw/formResponse" 
                  method="POST" target="hidden_iframe">
                <div class="custom-form-layout">
                    <input type="email" name="entry.504539600" placeholder="Enter your email address" required>
                    <button type="submit">JOIN</button>
                </div>
            </form>
            <div id="success-message" class="success-msg">Welcome to Skoom!</div>
        </div>
    </div>
</section>
`;

// NEW RELIABLE LOGIC
document.getElementById('skoom-form').onsubmit = function() {
    // 1. Hide the form immediately
    this.style.display = 'none';
    // 2. Show the success message immediately
    document.getElementById('success-message').style.display = 'block';
};
