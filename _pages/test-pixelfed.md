---
layout: plain
permalink: /test-pixelfed
title: Tesing Pixelfed Embed
---

The following element is a iframe code from a Pixelfed post. This website is pretty is a pretty bare bones layout of my Jekyll website and the code doesn't include anything that should block embeds.

---

<iframe title="Pixelfed Post Embed" src="https://media.vsp.ink/p/photos/807049239164366849/embed?caption=true&likes=false&layout=full" class="pixelfed__embed" style="max-width: 100%; border: 0" width="400" allowfullscreen="allowfullscreen"></iframe><script async defer src="https://media.vsp.ink/embed.js"></script>

---

It currently doesn't display the iframe. For simplicity sake, the following block is embed code wrapped in a `CODE` tag to show what is included in the page.

<code>
	<iframe title="Pixelfed Post Embed" src="https://media.vsp.ink/p/photos/807049239164366849/embed?caption=true&likes=false&layout=full" class="pixelfed__embed" style="max-width: 100%; border: 0" width="400" allowfullscreen="allowfullscreen"></iframe><script async defer src="https://media.vsp.ink/embed.js"></script>
</code>

In the server settings I have access to, there is an option to Allow Profile Embeds. You can see the same post above as a embed on my hosted site <https://media.vsp.ink/p/photos/807049239164366849/embed?caption=true&likes=false&layout=full>

As far as I can tell the problem is potentially at the server level where there is an option.

`X-Frame-Options: SAMEORIGIN`

Changing the setting to `X-Frame-Options: ALLOWALL` would make it so I am able to embed my posts places. 