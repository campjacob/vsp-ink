---
layout: default
permalink: /weekly
title: List of Weekly Entries
description: An archive of Jacob Campbell's weekly notes, showing the general plan and office hours for each week.
---
<h1 class="mb-3">Weekly Notes</h1>

<p class="lead">Each week I sketch out a general plan — which days I'm on which campus, working remotely, or out in the community — along with that week's drop-in office hours. This page is the full archive of {{ site.weekly | size }} weeks.</p>

<div class="alert alert-primary d-flex align-items-center" role="alert">
  <i class="fa-solid fa-calendar-week fa-lg me-3"></i>
  <div>
    <strong>Looking for this week?</strong> The <a href="/now" class="alert-link">now page</a> carries the current week's plan next to today's schedule, so you don't have to hunt for the right week here. My <a href="/hours" class="alert-link">office hours</a> page explains how the drop-in times generally work.
  </div>
</div>

<p class="text-body-secondary small">
  Plans change — a week's note reflects what I expected at the time. The <a href="/daily">daily notes</a> are the more reliable record of where I actually was.
</p>

{% assign entries = site.weekly | sort: 'slug' | reverse %}
{% assign years = entries | group_by_exp: "e", "e.slug | slice: 0, 4" %}
{% for year in years %}
<h2 class="mt-4 pb-2 border-bottom d-flex justify-content-between align-items-end">
  <span>{{ year.name }}</span>
  <span class="badge text-bg-secondary fs-6 fw-normal">{{ year.items | size }} weeks</span>
</h2>

<div class="row row-cols-2 row-cols-sm-3 row-cols-lg-4 g-2">
  {% for entry in year.items %}
    {%- assign range = entry.title | split: "(" | last | remove: ")" | strip -%}
    <div class="col">
      <a href="/weekly/{{ entry.slug }}" class="card h-100 text-decoration-none link-body-emphasis">
        <div class="card-body p-2 text-center">
          <div class="fw-semibold">Week {{ entry.slug | split: "-W" | last }}</div>
          {% if range contains "/" %}<div class="small text-body-secondary">{{ range }}</div>{% endif %}
        </div>
      </a>
    </div>
  {% endfor %}
</div>
{% endfor %}
