---
layout: default
title: "Deep Dive: Linquiti (2022)"
permalink: /deep-dive-linquiti-2022/
series: "deep-dive-linquiti-2022"
---
# Deep Dive: Linquiti (2022)

Welcome to the **Deep Dive** podcast series, supporting student readings from Deep Dive: Linquiti (2022) _Rebooting Policy Analysis: Strengthening the Foundation, Expanding the Scope_. Episodes are generated using Google Notebook LM. The intention of this resource is to support students in my SOWK 588 class as they go through the course provide a secondary way for students to be exposed to course material. The expectation is to still read all of the required course materials.


<img class="img-fluid" src="/assets/media/deep-dive-linquiti-2022-cover-art.png" alt="Deep Dive: Linquiti (2022) Cover Art" />

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
      <p>{{ ep.description }}</p>
    {% endif %}
    {% if ep.audio_url %}
      <audio controls src="{{ ep.audio_url }}"></audio>
    {% endif %}
  </article>
{% endfor %}

{% assign feed_url = '/' | append: page.series | append: '.xml' %}

<br /><br />

[Subscribe via RSS]({{ feed_url | relative_url }}) or see files hosted on [Panopto](https://heritage.hosted.panopto.com/Panopto/Pages/Sessions/List.aspx?folderID=a78ced54-14a7-4e7e-8076-b459017e4ebf).

See help article [How do you manually add a podcast feed](https://transistor.fm/add-podcast/)