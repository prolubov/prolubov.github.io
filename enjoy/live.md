---
layout: base
title: Вебинар по отношениям Николая&nbsp;Воробьёва
subtitle: 5 ноября в 20:00 мск
permalink: /live/
stream: 1h1A28uOH-w
event: https://plus.google.com/events/c4hnshficcdru1sib09vdtgst34
chat: false
button:
  ref: http://prolubov.com/ibo/
  text: Записаться на тренинг
---

<link href='http://fonts.googleapis.com/css?family=Roboto+Condensed:400,700&subset=latin,cyrillic' rel='stylesheet' type='text/css' />

<div id="header">
  <div class="container">
    <h1>{{ page.title }}</h1>
    {{ page.subtitle | markdownify }}
  </div>
</div>

<div id="hangout">
  <div class="content">
    <iframe style='border: 1px solid #666666' width="700" height="400" src="http://www.youtube.com/embed/{{ page.stream }}" frameborder="0" allowfullscreen></iframe>
    <p class="text-center"><a class="btn btn-primary" href="{{ page.button.ref }}" target="_blank">{{ page.button.text }}</a><br/></p>
  </div>
  <div class="content">
    <div id="vk_comments"></div>
  </div>
</div>
<!-- style="display:none;" -->

<script type="text/javascript" src="//vk.com/js/api/openapi.js?115"></script>
<script type="text/javascript">
VK.init({apiId: {{ site.vk_app_id }}, onlyWidgets: true});
VK.Widgets.Comments("vk_comments", {width: 700, limit: 100, attach: "*"}, '{{ page.stream }}');
</script>

<style type="text/css">
#header {
  text-align: center;
  border-bottom: 8px solid #d71b28;
}
#header h1 {
  font-weight: 700;
  font-size: 40px;
  line-height: 50px;
  text-transform: uppercase;
  margin: 15px 0;
  padding: 0;
  font-family: 'Roboto Condensed', sans-serif;
}
#header p {
  font-weight: 300;
  line-height: 28px;
  font-size: 28px;
  font-family: 'Roboto Condensed', sans-serif;
}
#hangout {
  padding-bottom: 60px;
  background: #f0f0f0;
}
.content {
  width: 700px;
  margin: 0 auto;
  padding: 40px 0 0 0;
}
</style>
