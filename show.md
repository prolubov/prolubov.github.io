---
layout: page
title: Шоу ProЛюбoff
permalink: /show/
sections:
  - title: Серия 1
    anchor: episode-1
    id: DD4ecbAtUiY
  - title: Серия 2
    anchor: episode-2
    id: AIF5NJe8nXw
  - title: Серия 3
    anchor: episode-3
    id: jPvO9lapLas
  - title: Серия 4
    anchor: episode-4
    id: AqXgqjaT8-0
  - title: Серия 5
    anchor: episode-5
    id: KH9zsKvyo8M
  - title: Серия 6
    anchor: episode-6
    id: XbXHKa9dxeo
  - title: Серия 7
    anchor: episode-7
    id: EuWpcM13bSk
  - title: Серия 8
    anchor: episode-8
    id: mrOr9BcFlk8
  - title: Серия 9
    anchor: episode-9
    id: eDE-ttVEgyM
  - title: Серия 10
    anchor: episode-10
    id: gweLGOsGiUI
  - title: Серия 11
    anchor: episode-11
    id: R5KVi7VtB_I
---

Восемь главных героинь **шоу «Про любовь»** — разные по возрасту, внешности,
образованию, взглядам на жизнь и амбициям молодые женщины. На время проекта
они оказываются под одной крышей.

Среди участниц есть как наивные романтичные девушки, так и успешные
бизнес-леди и даже роковые женщины-вамп. У каждой из них своя история
любви и разочарования в ней.

Объединяет героинь шоу «Про любовь» лишь одно — усталость от одиночества
и огромное желание построить крепкие, стабильные отношения с достойным
мужчиной.

**Тренер и ведущий проекта — Николай Воробьёв**

{% for section in page.sections %}
# {{ section.title }}
<div class="flex-video widescreen"><iframe allowfullscreen="" frameborder="0" src="http://www.youtube.com/embed/{{ section.id }}?rel=0"></iframe></div>

{% endfor %}