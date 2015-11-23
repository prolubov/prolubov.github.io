---
layout: landing
title: 15 способов стать уверенной девушкой — Инструкция
permalink: /ksud/
header: 
  title: "15 способов стать<br/>уверенной девушкой"
  subtitle: "Мужчины начнут восхищаться тобой"
  background: "/images/bg-thumbsup.jpg"
  buttontitle: "Получить инструкцию"
  morebuttontitle: "Узнать больше"

features: 
  title: "Инструкция для тебя, если ты хочешь"
  feature1: "Чувствовать себя уверенно"
  feature2: "Производить хорошее впечатление на мужчин"
  feature3: "Заинтересовывать собой мужчин"

contents: 
  title: Что ты получишь
  items:
    - почувствуешь себя привлекательной
    - поднимешь самооценку
    - станешь лучше выглядеть
    - научишься общаться с мужчинами
    - твоё собственное мнение станет важнее мнения окружающих
    - будешь верить в себя и любить себя
    - станешь интересной для мужчин

author: 
  title: "Автор инструкции"
  name: "Николай Воробьев"
  photo: "/images/nickvorobiov.jpg"
  text: |
    - Тренер по отношениям с 12-летним опытом
    - Ведущий тренер международной компании ПроРеальность
    - Обучил более 15000 учеников в более чем 20 городах СНГ и Европы
    - Ведущий шоу «ПроЛюбовь» на телеканале 1+1
    - Автор книги по отношениям «Реальная Любовь»

---

<div class="section bg-primary text-center" style="background-image: url({{ page.header.background }}); background-size: cover; background-position: center; padding: 150px 0;">
  <div class="container">
    <h1 style="margin-top: 0; font-size: 48px;">{{ page.header.title }}</h1>
    <p class="lead">
      {{ page.header.subtitle }}
    </p>
    <a class="btn btn-danger" href="#pricing"><i class="fa fa-arrow-right"></i> {{ page.header.buttontitle }}</a>
    &nbsp;
    <a class="btn btn-info" href="#more"><i class="fa fa-arrow-down"></i> {{ page.header.morebuttontitle }}</a>
  </div>
</div>

<a name="more"></a>

{% include sections/features.html features=page.features bg="" %}
{% include sections/contents.html contents=page.contents bg="bg-primary" %}
{% include sections/author.html author=page.author title='Кто ведёт программу' bg="bg-clouds" %}

<div class="section">
  <div class="container">
    <h1 class="text-center">
      Получить инструкцию
    </h1>
    <h2 class="text-center">&euro;7 или 499&nbsp;рублей</h2>
    <div class="row">
      <div class="col-md-6 col-md-offset-3">
        <div class="well">
          <form action="http://money.prorealnost.com/shot/145" method="POST">
            <div class="form-group">
              <input type="text" name="name" class="form-control input-lg" placeholder="Имя" required="required"/>
            </div>
            <div class="form-group">
              <input type="text" name="phone" rules="phone" class="form-control input-lg" placeholder="Телефон" required="required"/>
            </div>
            <div class="form-group">
              <input type="email" name="email" class="form-control input-lg" placeholder="Емейл" required="required"/>
            </div>
            <button type="submit" class="btn btn-primary btn-lg btn-block">
              Заказать инструкцию
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>