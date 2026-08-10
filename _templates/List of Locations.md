Locations are YAML arrays, one entry per line, in the order the day actually runs:

```yaml
location:
  - 💻 Remote
  - 🚘 Community Appts
  - 🌃🏫 CBC Campus
```

A location may repeat if the day returns to it (e.g. office, community, office). Order is meaningful — don't sort or dedupe.

## Locations

💻 Remote
🏫 Toppenish Campus
🏫 Kennewick Campus
🌃🏫 Kennewick Campus
🌃🏫 CBC Campus
🚘 Community Appts
🫥 by appt only
🛩️ Traveling
🚑 Medical
🏝️ Vacation
🤒 Sick
⚖️ Jury Duty

The 🌃 prefix marks an evening session at that campus.

## Locations for TRML

The `*_trml` arrays in weekly notes are plain text, no emoji, for the e-ink display:

Remote
Toppenish
Kennewick
CBC
Community
By appt
Travel
Vacation
