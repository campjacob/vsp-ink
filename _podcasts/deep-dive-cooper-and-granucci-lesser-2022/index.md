---
layout: default
title: "Deep Dive: Cooper and Granucci Lesser (2022)"
permalink: /deep-dive-cooper-and-granucci-lesser-2022/
series: "deep-dive-cooper-and-granucci-lesser-2022"
---
# Deep Dive: Cooper and Granucci Lesser (2022)

Welcome to the **Deep Dive** podcast series, supporting student readings from Cooper and Granucci Lesser’s (2022) *Clinical Social Work Practice*. Episodes are generated using Google Notebook LM. The intention of this resource is to support students in my SOWK 581 class as they go through the course provide a secondary way for students to be exposed to course material.

<img class="img-fluid" src="/assets/media/deep-dive-cooper-and-granucci-lesser-2022-cover-art.png" alt="Deep Dive: Cooper and Granucci Lesser (2022) Cover Art" />

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

[Subscribe via RSS]({{ feed_url | relative_url }}) or see files hosted on [Panopto](https://heritage.hosted.panopto.com/Panopto/Pages/Sessions/List.aspx?folderID=4876159c-a8d9-47c0-84b7-b386016f7cbe).

See help article [How do you manually add a podcast feed](https://transistor.fm/add-podcast/)