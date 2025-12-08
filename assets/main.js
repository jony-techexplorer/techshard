const tabData = {
  solve: {
    title: 'End-to-end execution',
    body: 'We design, build, and launch digital products with battle-tested playbooks. From discovery sprints to production-grade releases, your initiatives ship on time with analytics baked in.',
    pills: ['Workshops', 'Architecture', 'MVP Launch'],
    cta: '#projects'
  },
  accelerate: {
    title: 'Accelerate delivery',
    body: 'Dedicated pods with designers, engineers, and QA running weekly demos. Delivery time analytics keep stakeholders aligned and blockers cleared early.',
    pills: ['Pods', 'QA automation', 'Weekly demos'],
    cta: '#projects'
  },
  scale: {
    title: 'Scale securely',
    body: 'Cloud-native patterns, observability, security hardening, and performance tuning so your systems stay reliable while you grow.',
    pills: ['Cloud', 'Observability', 'Security'],
    cta: '#services'
  }
};

const modalContent = {
  contact: {
    title: 'Contact Us',
    body: `<p>Tell us about your goals and we will assemble the right squad.</p>
           <ul>
             <li>Email: <a href="mailto:hello@techshard.com">hello@techshard.com</a></li>
             <li>Phone: +1 (555) 010-2025</li>
             <li>Office hours: 8am – 6pm PT</li>
           </ul>`
  },
  about: {
    title: 'About TechShard Solutions',
    body: `<p>We are a modern IT services agency blending design systems, product thinking, and reliable engineering. Expect bold visuals, sharp delivery, and transparent analytics.</p>
           <p>Practices: Web, E-commerce, AI, Mobile, Cloud. Engagements include discovery sprints, builds, migrations, and run-state support.</p>`
  },
  privacy: {
    title: 'Privacy Policy',
    body: `<p>We collect only the data needed to deliver and improve services. Data is encrypted in transit and at rest. Access is least-privilege and monitored.</p>
           <p>For data requests or questions, email <a href="mailto:privacy@techshard.com">privacy@techshard.com</a>.</p>`
  }
};

const tabs = document.querySelectorAll('.tab');
const tabPanel = document.getElementById('tab-panel');
const pillsContainer = tabPanel.querySelector('.actions-inline');

function renderTab(key) {
  const { title, body, pills, cta } = tabData[key];
  tabPanel.querySelector('h3').textContent = title;
  tabPanel.querySelector('p').textContent = body;
  const pillsHtml = pills.map((p) => `<span class="pill">${p}</span>`).join('');
  pillsContainer.innerHTML = pillsHtml + `<a class="link-btn" href="${cta}">See details →</a>`;
}

tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    tabs.forEach((t) => {
      t.classList.toggle('active', t === tab);
      t.setAttribute('aria-selected', t === tab);
    });
    renderTab(tab.dataset.tab);
  });
});

renderTab('solve');

const modal = document.getElementById('modal');
const modalBody = document.getElementById('modal-body');
const modalClose = document.querySelector('.modal-close');

function openModal(type) {
  const content = modalContent[type];
  if (!content) return;
  modalBody.innerHTML = `<h2 style="margin-top:0; color: var(--purple-dark);">${content.title}</h2>${content.body}`;
  modal.classList.add('active');
}

document.querySelectorAll('[data-modal]').forEach((btn) => {
  btn.addEventListener('click', () => openModal(btn.dataset.modal));
});

modalClose.addEventListener('click', () => modal.classList.remove('active'));
modal.addEventListener('click', (e) => {
  if (e.target === modal) modal.classList.remove('active');
});

// Keyboard accessibility for modal
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modal.classList.contains('active')) {
    modal.classList.remove('active');
  }
});


