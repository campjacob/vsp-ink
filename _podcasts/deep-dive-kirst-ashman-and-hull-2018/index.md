---
layout: default
title: "Deep Dive: Kirst-Ashman and Hull (2018)"
permalink: /deep-dive-kirst-ashman-and-hull-2018/
series: "deep-dive-kirst-ashman-and-hull-2018"
---
# Deep Dive: Kirst-Ashman and Hull (2018)

Welcome to the **Deep Dive** podcast series, supporting student readings from Deep Dive: Kirst-Ashman and Hull (2018) _Empowerment Series: Generalist Practice with Organizations and Communities_. Episodes are generated using Google Notebook LM. The intention of this resource is to support students in my SOWK 531 class as they go through the course provide a secondary way for students to be exposed to course material.


<img class="img-fluid" src="/assets/media/deep-dive-kirst-ashman-and-hull-2018-cover-art.png" alt="Deep Dive: Kirst-Ashman and Hull (2018) Cover Art" />

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

[Subscribe via RSS]({{ feed_url | relative_url }}) or see files hosted on [Panopto](https://heritage.hosted.panopto.com/Panopto/Pages/Sessions/List.aspx?folderID=c49c4634-4505-40d9-80e3-b3d80180f039).

See help article [How do you manually add a podcast feed](https://transistor.fm/add-podcast/)