---
layout: default
permalink: /embed/
title: Embeddable Photo Albums
description: "An index of the photo album embeds hosted on VSP.ink, with copyable embed code for each."
---
# Embeddable Photo Albums

<p>Photo albums from <a href="https://photos.vsp.ink/">photos.VSP.ink</a> packaged as embeddable pages. Pick a style, copy the embed code, and drop an album into a blog post or any other page. See the <a href="/embed/documentation/">documentation</a> for live examples of every style.</p>

{% assign embeds = site.embed %}
{% for embed in embeds %}
{% assign cover = embed.images | where: 'img_active', true | first %}
{% unless cover %}{% assign cover = embed.images | first %}{% endunless %}
{% capture embed_code %}<iframe src="{{ embed.url | absolute_url }}" width="100%" height="800" frameborder="0" style="width: 100%; max-width: 100%; height: 800px; border: none;" loading="lazy" allowfullscreen title="{{ embed.title | escape }}"></iframe>{% endcapture %}
<div class="card mb-4">
  <div class="row g-0">
    <div class="col-md-4">
      <a href="{{ embed.url | relative_url }}">
        {% assign cover_ext = cover.img_url | downcase | split: '.' | last %}
        {% if cover.img_video or cover_ext == 'mov' or cover_ext == 'mp4' or cover_ext == 'm4v' or cover_ext == 'webm' %}
        <video class="w-100 h-100 rounded-start" style="object-fit: cover; max-height: 260px;" muted playsinline preload="metadata" aria-label="{{ cover.img_alt }}">
          <source src="{{ cover.img_url }}">
        </video>
        {% else %}
        <img src="{{ cover.img_url }}" alt="{{ cover.img_alt }}" class="img-fluid rounded-start w-100 h-100" style="object-fit: cover; max-height: 260px;" loading="lazy">
        {% endif %}
      </a>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title"><a href="{{ embed.url | relative_url }}">{{ embed.title }}</a></h5>
        <p class="card-text">{{ embed.description }}</p>
        <p class="card-text">
          <span class="badge text-bg-secondary">{{ embed.images | size }} photos</span>
          <a href="https://photos.vsp.ink/album/{{ embed.chevereto_id }}" target="_blank" rel="noopener" class="ms-2">Album on photos.VSP.ink</a>
        </p>
        <label class="form-label fw-bold" for="embed-code-{{ embed.chevereto_id }}">Embed code</label>
        <div class="input-group embed-copy">
          <select class="form-select flex-grow-0 w-auto" aria-label="Embed style" onchange="setEmbedStyle(this)">
            <option value="card" selected>Classic Card</option>
            <option value="mosaic">Mosaic</option>
            <option value="filmstrip">Filmstrip</option>
            <option value="editorial">Editorial</option>
            <option value="kenburns">Ken Burns</option>
          </select>
          <textarea id="embed-code-{{ embed.chevereto_id }}" class="form-control font-monospace" rows="3" readonly onclick="this.select()">{{ embed_code | escape }}</textarea>
          <button class="btn btn-outline-primary" type="button" onclick="copyEmbedCode(this)">Copy</button>
        </div>
        <button class="btn btn-link btn-sm px-0 mt-2" type="button" data-bs-toggle="collapse" data-bs-target="#embed-preview-{{ embed.chevereto_id }}" aria-expanded="false" aria-controls="embed-preview-{{ embed.chevereto_id }}">Toggle preview</button>
      </div>
    </div>
  </div>
  <div class="collapse" id="embed-preview-{{ embed.chevereto_id }}">
    <div class="card-footer bg-body">
      <iframe src="{{ embed.url | relative_url }}" style="width: 100%; max-width: 100%; height: 800px; border: none;" loading="lazy" title="{{ embed.title | escape }}"></iframe>
    </div>
  </div>
</div>
{% endfor %}

<script>
  const EMBED_HEIGHTS = { card: 800, mosaic: 800, filmstrip: 480, editorial: 500, kenburns: 600 };

  function setEmbedStyle(sel) {
    const textarea = sel.closest('.embed-copy').querySelector('textarea');
    if (!textarea.dataset.baseSrc) {
      textarea.dataset.baseSrc = (textarea.value.match(/src="([^"]*)"/) || [, ''])[1].split('?')[0];
    }
    const url = textarea.dataset.baseSrc + (sel.value === 'card' ? '' : '?style=' + sel.value);
    const height = EMBED_HEIGHTS[sel.value] || 800;
    textarea.value = textarea.value
      .replace(/src="[^"]*"/, 'src="' + url + '"')
      .replace(/height="\d+"/, 'height="' + height + '"')
      .replace(/height: \d+px/, 'height: ' + height + 'px');
    const previewFrame = sel.closest('.card').querySelector('.collapse iframe');
    if (previewFrame) {
      const base = previewFrame.getAttribute('src').split('?')[0];
      previewFrame.setAttribute('src', base + (sel.value === 'card' ? '' : '?style=' + sel.value));
      previewFrame.style.height = height + 'px';
    }
  }

  function copyEmbedCode(btn) {
    const textarea = btn.closest('.embed-copy').querySelector('textarea');
    const done = () => {
      const original = btn.textContent;
      btn.textContent = 'Copied!';
      btn.classList.replace('btn-outline-primary', 'btn-success');
      setTimeout(() => {
        btn.textContent = original;
        btn.classList.replace('btn-success', 'btn-outline-primary');
      }, 2000);
    };
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(textarea.value).then(done);
    } else {
      textarea.select();
      document.execCommand('copy');
      done();
    }
  }
</script>
