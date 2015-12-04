---
layout: landing
title: Женщина-магнит для настоящих мужчин
permalink: /magnet/
header: 
  title: "Женщина-магнит для настоящих мужчин"
  subtitle: "Практическая онлайн программа, которая позволит тебе познакомиться с настоящим мужчиной уже через 3 дня"
  background: "/images/bg-thumbsup.jpg"
  buttontitle: "Принять участие в программе"
  morebuttontitle: "Узнать больше"

features: 
  title: "Этот курс для тебя, если ты"
  feature1: "готова меняться к лучшему, чтобы **стать счастливее**"
  feature2: "хочешь, чтобы мужчины провожали тебя взглядом"
  feature3: "достойна начать встречаться **с лучшими мужчинами**"

lessons:
  - title: "Введение"
    items:
      - Найдешь причины, почему у тебя нет парня
      - Определишься, чего и кого хочется именно тебе
      - Поставишь вкусные цели на курс
  - title: "Внешний вид"
    items:
      - Узнаешь, что тебе стоит поменять во внешности
      - Станешь выглядеть намного лучше
  - title: "А что внутри?"
    items:
      - Поймёшь, почему тебе важно развиваться
      - Разберёшься  со своими страхами, которые мешают тебе выйти из зоны комфорта
      - Выберешь те области, в которых тебе стоит развиваться, чтобы стать особенной женщиной
  - title: "Цени себя"
    items:
      - Поймешь, что тебе надо изменить, чтобы больше ценить себя
      - Поднимешь свою самооценку вверх
  - title: "Твоя планка"
    items:
      - Нарисуешь портрет твоего идеального мужчины
      - Поставишь правильную планку
  - title: "Инициатива и первый контакт"
    items:
      - Выяснишь,  кто должен проявлять инициативу
      - Определишь, какие сигналы ценит мужчина
      - Научишься обращать на себя внимание
  - title: "Попадаются «не те» мужчины"
    items:
      - Выяснишь, кто такие приличные мужчины
      - Найдешь места, где найти достойных мужчин
      - Научишься знакомиться
  - title: "Не умею флиртовать"
    items:
      - Научишься правильно себя вести, чтоб понравится мужчине
      - Научишься говорить в нужном контексте, чтоб заинтересовать мужчину
      - Проработаешь свои основные ошибки во время флирта
  - title: "Как быть для него Женщиной"
    items:
      - Выяснишь, что мешает тебе Быть Настоящей Женщиной
      - Поймешь, что значит «Быть»
      - Станешь Женщиной-Мечтой

results:
  - name: Привлекательность
    text: "Научишься обращать на себя внимание при любых обстоятельствах"
  - name: Взгляд
    text: "Научишься взглядом привлекать мужчин"
  - name: Внимание
    text: "Сможешь получать комплименты и подарки"
  - name: Магнит
    text: "Станешь магнитом для настоящих мужчин"
  - name: Достоинство
    text: "Начнешь по-настоящему любить себя и ценить"
  - name: Интуиция
    text: "Начнешь разбираться в мужчинах и понимать, что им хочется"

author: 
  title: "Автор курса"
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

<div class="section contents bg-primary">
  <div class="container">
    <h1 class="text-center" style="margin-bottom: 60px;">Какие результаты ты получишь?</h1>
    <div class="row">
      {% for item in page.results %}
        <div class="col-xs-4 col-xs-offset-{% cycle 2, 1 %}">
          <p style="font-size: 20px; font-weight: bold;">
            <i class="fa fa-check-circle-o fa-2x text-success" style="float: left; margin-left: -50px; margin-top: -5px;"></i>
            {{ item.name }}
          </p>
          <p style="font-size: 20px; margin-bottom: 2em;">
            {{ item.text }}
          </p>
        </div>
        {% capture thecycle %}{% cycle 'odd', 'even' %}{% endcapture %}
        {% if thecycle == 'even' %}
          <div class="clearfix"></div>
        {% endif %}
      {% endfor %}
    </div>
    <p class="lead text-center" style="margin-bottom: 60px;">И, самое главное, ты станешь такой женщиной, с которой <b>достойные мужчины</b> сами захотят знакомиться и строить отношения</p>
  </div>
</div>

<div class="section">
  <div class="container">
    <h1 class="text-center">Что будет на курсе?</h1>
    <p class="lead text-center">9 видеоуроков с практическими заданиями и обратной связью от тренера</p>
    <div class="row">
    {% for item in page.lessons %}
      <div class="col-md-8 col-md-offset-2">
        <div class="numbercircle-md bg-nephritis text-white text-strong" style="float: left;">{{ forloop.index }}</div>
        <h2 style="margin: 0 0 0 80px; padding-top: 10px;">{{ item.title }}</h2>
        <ul style="margin-left: 80px;">
          {% for li in item.items %}
            <li>{{ li }}</li>
          {% endfor %}
        </ul>
      </div>
    {% endfor %}
    </div>
    <p class="lead text-center">Уже во время курса ты сможешь <b>с легкостью знакомиться и влюблять в себя</b> тех мужчин, которые тебе понравятся</p>
  </div>
</div>

{% include sections/author.html author=page.author bg="bg-clouds" %}

<div class="section" id="pricing">
  <div class="container">
    <h1 class="text-center">
      Готова встретить мужчину своей мечты?
    </h1>
    <!--h2 class="text-center">&euro;7 или 499&nbsp;рублей</h2-->
    <div class="row">
      <div class="col-md-6 col-md-offset-3">
        <div class="well">
          <form action="http://prolubov.prorealnost.com/shot/93" method="POST">
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
              Заказать курс
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>