---
layout: default
title: "Podcast Series"
permalink: /podcasts/
---

<h1>{{ page.title }}</h1>
<p>Explore the podcast series created to support readings and social work learning.</p>

{% comment %}
Collect unique series keys from all podcast items
{% endcomment %}
{% assign all_series = site.podcasts | map: "series" | uniq | sort %}

<div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 1.5rem; margin-top: 2rem;">
{% for s in all_series %}
  {% assign eps = site.podcasts | where: "series", s %}
  {% assign first = eps | first %}
  {% assign cover = first.image | default: '/assets/media/' | append: s | append: '-cover-art.png' %}
  {% assign index_path = '/' | append: s | append: '/' %}
  <div style="border: 1px solid #ddd; border-radius: 8px; padding: 1rem; background: #fff;">
    <a href="{{ index_path | relative_url }}" style="text-decoration:none; color:inherit;">
      <img src="{{ cover | relative_url }}" alt="{{ s }} cover" style="width:100%; border-radius:6px; margin-bottom:0.5rem;">
      <h2 style="margin:0 0 0.5rem;">{{ first.series_title | default: first.series | replace: '-', ' ' | capitalize }}</h2>
      <p style="font-size:0.9em; color:#555;">{{ eps | size }} episodes</p>
    </a>
  </div>
{% endfor %}
</div>