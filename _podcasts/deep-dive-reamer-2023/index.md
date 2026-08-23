---
layout: default
title: "Deep Dive: Reamer (2023)"
permalink: /podcasts/deep-dive-reamer-2023/
series: "deep-dive-reamer-2023"
---
# Deep Dive: Reamer (2023)

Welcome to the **Deep Dive** podcast series, supporting student readings from Reamer's (2023) _Ethical Standards in Social Work: A Review of the NASW Code of Ethics_ (revised 3rd ed.). Episodes are generated using Gemini Notebook. The intention of this resource is to support students in my SOWK 430 class as they go through the course, and to provide a secondary way for students to be exposed to course material. The expectation is to still read all of the required course materials.


<img class="img-fluid" src="/assets/media/deep-dive-reamer-2023-cover-art.png" alt="Deep Dive: Reamer (2023) Cover Art" />

{% assign eps = site.podcasts
  | where: "layout", "reading-support"
  | where_exp: "ep", "ep.path contains page.series"
  | sort: "date"
%}

{% for ep in eps %}
  <article>
    <h2><a href="{{ ep.url | relative_url }}">{{ ep.title }}</a></h2>
    <p>
      <small>
        {{ ep.date | date: "%B %-d, %Y" }}
        {% if ep.duration %} • {{ ep.duration }}{% endif %}
      </small>
    </p>
    {% if ep.description %}
      {{ ep.description | markdownify }}
    {% endif %}
    {% if ep.audio_url %}
      <audio controls src="{{ ep.audio_url }}"></audio>
    {% endif %}
  </article>
{% endfor %}

{% assign feed_url = '/' | append: page.series | append: '.xml' %}

<br /><br />

[Subscribe via RSS]({{ feed_url | relative_url }}) or see files hosted on [Panopto](https://heritage.hosted.panopto.com/Panopto/Pages/Sessions/List.aspx?folderID=b5df50b9-6164-4118-b985-b4af0043a5c8).

See help article [How do you manually add a podcast feed](https://transistor.fm/add-podcast/)
