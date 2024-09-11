---
layout: default
permalink: /daily
title: List of Daily Entires
---
# List of Daily Entries

<ul>
{% for entry in site.daily %}
<li><a href="/daily/{{ entry.slug }}">{{ entry.slug }}</a></li>
{% endfor %}
</ul>