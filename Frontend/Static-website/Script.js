// THEME TOGGLE
const toggleBtn = document.getElementById('themeToggle');

function setTheme(theme) {
  document.body.className = theme;
  localStorage.setItem('theme', theme);
}

toggleBtn.addEventListener('click', () => {
  const current = document.body.classList.contains('light') ? 'light' : 'dark';
  setTheme(current === 'dark' ? 'light' : 'dark');
});

// Load saved theme
(function () {
  const saved = localStorage.getItem('theme') || 'dark';
  setTheme(saved);
})();

// FADE-IN ANIMATION
const faders = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('visible');
  });
});

faders.forEach(el => observer.observe(el));

// BLOG DATA (Cloud Case Studies)
const posts = [
  {
    title: "Scaling to 1M Requests on GCP",
    desc: "How I used Cloud Run + Load Balancing to scale efficiently.",
  },
  {
    title: "Reducing GCP Costs by 40%",
    desc: "Strategies using committed use discounts & autoscaling.",
  },
  {
    title: "Secure VPC Architecture",
    desc: "Designing zero-trust networks in Google Cloud.",
  }
];

// RENDER BLOG
const container = document.getElementById('blogContainer');

posts.forEach(post => {
  const div = document.createElement('div');
  div.className = 'blog-card';
  div.innerHTML = `
    <h3>${post.title}</h3>
    <p>${post.desc}</p>
  `;
  container.appendChild(div);
});

// DOWNLOAD BUTTON
function downloadResume() {
  const link = document.createElement('a');
  link.href = 'resume.pdf';
  link.download = 'resume.pdf';
  link.click();
}
