// Rest N Play Welcome Guide — navigation + helpers

function showPage(pageId) {
  // Hide all pages
  document.querySelectorAll('.page').forEach((page) => {
    page.classList.remove('active');
  });

  // Show requested page
  const target = document.getElementById(pageId);
  if (target) {
    target.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'instant' });
  }

  // Re-initialize icons (dynamic content / newly visible nodes)
  if (window.lucide) {
    lucide.createIcons();
  }
}

// Copy text helper (WiFi credentials)
function copyText(elementId) {
  const el = document.getElementById(elementId);
  if (!el) return;

  const text = el.textContent.trim();

  navigator.clipboard.writeText(text).then(() => {
    const btn = el.parentElement && el.parentElement.querySelector('.copy-btn');
    if (btn) {
      const original = btn.textContent;
      btn.textContent = 'Copied!';
      btn.style.background = '#2d6a4f';
      setTimeout(() => {
        btn.textContent = original;
        btn.style.background = '';
      }, 1600);
    }
  }).catch(() => {
    // Fallback for older browsers
    const range = document.createRange();
    range.selectNode(el);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    try {
      document.execCommand('copy');
      alert('Copied: ' + text);
    } catch (e) {
      alert('Please copy manually: ' + text);
    }
    window.getSelection().removeAllRanges();
  });
}

// Initialize icons on load
document.addEventListener('DOMContentLoaded', () => {
  if (window.lucide) {
    lucide.createIcons();
  }
});