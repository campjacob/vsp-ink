---
layout: default
permalink: /weekly
title: List of Weekly Entries
---
# List of Weekly Entries

<ul>
{% for entry in site.weekly %}
<li><a href="/weekly/{{ entry.slug }}">{{ entry.slug }}</a></li>
{% endfor %}
</ul>