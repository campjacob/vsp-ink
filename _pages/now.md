---
layout: default
title: Schedule Now
permalink: /now
---

<h1 class="text-uppercase text-center mb-n4" style="font-weight: 900;">Schedule Now</h1>

<div class="text-center" id="current-date"></div>

<script>
    // Function to get today's date and format it
    function getFormattedDate() {
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        const today = new Date();
        return today.toLocaleDateString('en-US', options);
    }

    // Display the formatted date in the HTML
    document.getElementById('current-date').innerText = getFormattedDate();
</script>

{% assign current_date = "now" | date: "%Y-%m-%d" %}
{% assign day_found = false %}

{% for day in site.daily %}
  {% assign day_date_normalized = day.date | date: "%Y-%m-%d" | strip %}
 
  {% if day_date_normalized == current_date %}
    {% assign day_found = true %}
  <div class="alert alert-success" role="alert">
    <strong>Jacob's Location:</strong> {{ day.location }}
  </div>
  {{ day.content }}
  {% endif %}
{% endfor %}

{% if day_found == false %}
  <div class="alert alert-success" role="alert">
    Jacob has not updated his daily schedule yet. See his weekly schedule below or contact him.
  </div>
{% endif %}


{% for week in site.weekly %}
{% assign week_year = site.time | date: "%Y" %}
{% assign week_number = site.time | date: "%V" %}
{% assign week_code = week_year | append: "-W" | append: week_number %}
{% assign week_found = false %}




{% if week.slug == week_code  %}
{% assign week_found = true %}

{% if week.monday %}
  {% assign monday_location = week.monday %}
{% else %}
  {% assign monday_location = "🫥 by appt only" %}
{% endif %}

{% if week.tuesday %}
  {% assign tuesday_location = week.tuesday %}
{% else %}
  {% assign tuesday_location = "🫥 by appt only" %}
{% endif %}

{% if week.wednesday %}
  {% assign wednesday_location = week.wednesday %}
{% else %}
  {% assign wednesday_location = "🫥 by appt only" %}
{% endif %}

{% if week.thursday %}
  {% assign thursday_location = week.thursday %}
{% else %}
  {% assign thursday_location = "🫥 by appt only" %}
{% endif %}

{% if week.friday %}
  {% assign friday_location = week.friday %}
{% else %}
  {% assign friday_location = "🫥 by appt only" %}
{% endif %}

{% if week.saturday %}
  {% assign saturday_location = week.saturday %}
{% else %}
  {% assign saturday_location = "🫥 by appt only" %}
{% endif %}

{% if week.sunday %}
  {% assign sunday_location = week.sunday %}
{% else %}
  {% assign sunday_location = "🫥 by appt only" %}
{% endif %}

{{ week.content }}

The following is my general plan for this week.

<table class="table">
  <thead>
    <tr>
      <th>Day</th>
      <th>Location</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Monday</td>
      <td>{{ monday_location }}</td>
    </tr>
    <tr>
      <td>Tuesday</td>
      <td>{{ tuesday_location }}</td>
    </tr>
    <tr>
      <td>Wednesday</td>
      <td>{{ wednesday_location }}</td>
    </tr>
    <tr>
      <td>Thursday</td>
      <td>{{ thursday_location }}</td>
    </tr>
    <tr>
      <td>Friday</td>
      <td>{{ friday_location }}</td>
    </tr>
    <tr>
      <td>Saturday</td>
      <td>{{ saturday_location }}</td>
    </tr>
    <tr>
      <td>Sunday</td>
      <td>{{ sunday_location }}</td>
    </tr>
  </tbody>
</table>

{% break %}
{% endif %}
{% endfor %}


{% unless week_found %}
<p class="text-center">Jacob does not have a weekly schedule for this week yet. Contact him</p>   
{% endunless %}



<!-- Button trigger modal -->
<div class="text-center">
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#contactModal">
  Contact Now
</button>
</div>

<!-- Modal -->
<div class="modal fade" id="contactModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Contact Jacob</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <p>If you were hoping to meet with Jacob, please reach out to him</p>
        <div class="vstack">
          <a class="icon-link" href="sms:+15093921056">
            <i class="fa-solid fa-comment-dots"></i>
            Text Me
          </a>
          <a class="icon-link" href="https://teams.microsoft.com/l/chat/0/0?users=campbell_j@heritage.edu">
            <i class="fa-brands fa-windows"></i>
            Microsoft Teams Me
          </a>
          <a class="icon-link" href="mailto:campbell_j@heritage.edu">
            <i class="fa-solid fa-envelope"></i>
            Email Me
          </a>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>