---
layout: default
permalink: /daily
title: List of Daily Entries
description: An archive of Jacob Campbell's daily notes, grouped by month, showing where he was working each day.
---
<h1 class="mb-3">Daily Notes</h1>

{% assign oldest = site.daily | sort: 'slug' | first %}
<p class="lead">A daily note is where I put the day's schedule and where I'm working from. This page is the full archive — {{ site.daily | size }} entries going back to {{ oldest.slug | append: "T12:00:00" | date: "%B %Y" }}.</p>

<div class="alert alert-primary d-flex align-items-center" role="alert">
  <i class="fa-solid fa-location-dot fa-lg me-3"></i>
  <div>
    <strong>Looking for today?</strong> The <a href="/now" class="alert-link">now page</a> shows today's location and schedule alongside this week's plan — that's usually the page you want. For the week-by-week view, see the <a href="/weekly" class="alert-link">weekly notes</a>.
  </div>
</div>

<p class="text-body-secondary small">
  Each day links to its full entry. The icons show where I was:
  💻&nbsp;remote · 🏫&nbsp;campus · 🌃🏫&nbsp;evening class · 🚘&nbsp;community appointments · 🫥&nbsp;by appointment · 🛩️&nbsp;traveling · 🏝️&nbsp;vacation. Hover a day for the full list.
</p>

{% assign entries = site.daily | sort: 'slug' | reverse %}
{% assign years = entries | group_by_exp: "e", "e.slug | slice: 0, 4" %}
{% for year in years %}
<h2 class="mt-4 pb-2 border-bottom d-flex justify-content-between align-items-end">
  <span>{{ year.name }}</span>
  <span class="badge text-bg-secondary fs-6 fw-normal">{{ year.items | size }} entries</span>
</h2>

{% assign months = year.items | group_by_exp: "e", "e.slug | slice: 0, 7" %}
<div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-3">
  {% for month in months %}
  <div class="col">
    <div class="card h-100">
      <div class="card-header py-2 fw-semibold">
        {{ month.name | append: "-01" | date: "%B" }}
      </div>
      <div class="card-body p-2 d-flex flex-wrap align-items-start align-content-start gap-1">
        {% for entry in month.items reversed %}
          <a href="/daily/{{ entry.slug }}"
             class="btn btn-sm btn-outline-secondary text-nowrap py-1 px-2"
             title="{{ entry.slug }}{% if entry.location %} — {{ entry.location | join: ', ' }}{% endif %}">
            <span class="font-monospace">{{ entry.slug | slice: 8, 2 }}</span>
            {%- if entry.location %} <span aria-hidden="true">{% for loc in entry.location %}{{ loc | split: " " | first }}{% endfor %}</span>{% endif -%}
          </a>
        {% endfor %}
      </div>
    </div>
  </div>
  {% endfor %}
</div>
{% endfor %}
