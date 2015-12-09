---
layout: landing
title: Как влюбить в себя мужчину на первом свидании
permalink: /first-date/
header: 
  title: "Как влюбить в себя мужчину на первом свидании"
  subtitle: "Практическая онлайн программа, которая позволит тебе сделать так, чтобы мужчина был без ума от тебя уже после первого свидания"
  background: "/images/bg-thumbsup.jpg"
  buttontitle: "Принять участие в программе"
  morebuttontitle: "Узнать больше"

features: 
  title: "Хочешь..."
  feature1: "Чтобы в его глазах ты выглядела желанной и сексуальной?"
  feature2: "Чтобы он увидел тебя открытой и уверенной в себе женщиной?"
  feature3: "Чтобы на свидании он смотрел на тебя с обожанием и восхищением?"

lessons:
  -
    title: Внешний вид
    items:
      - Как тебе выглядеть и что надеть на свидание
      - Как не попасть впросак и не оказаться «в лесу на каблуках»
  -
    title: Внутреннее состояние
    items:
      - Как придти на свидание в хорошем настроении. Что делать, если тебя что-то тревожит или волнует, а портить свидание не хочется
      - Что делать, если мужчина очень понравился, и ты начала слишком сильно волноваться
  -
    title: Искренность
    items:
      - Как сделать так, чтобы мужчина был с тобой непринуждённым и искренним, а не напрягался, не пытался тебе понравиться и скрыть за этим себя настоящего
      - Как быть непринуждённой и искренней самой
  -
    title: Темы для разговора
    items:
      - О чём стоит и не стоит разговаривать
      - Как на свидании выяснить, подходите ли вы друг другу
  -
    title: Комплименты и поддержка
    items:
      - Как реагировать на комплименты и стоит ли делать комплименты
      - Зачем мужчинам нужна женская поддержка и как поддерживать мужчину уже на свидании
  -
    title: Контекст
    items:
      - Как вести себя, чтобы контекст свидания был не дружеским, а чтобы мужчина видел в тебе женщину
      - Ухаживания и знаки внимания со стороны мужчины
      - Знаки внимания со стороны женщины
  -
    title: Приличная девушка
    items:
      - Стоит ли соглашаться на секс на первом свидании и что при этом подумает о тебе мужчина
      - Что он подумает, если наоборот — вам обоим хочется, но у тебя принципы
  -
    title: Фишки
    items:
      - Критические ошибки на свидании, которых тебе стоит избежать любой ценой

results:
  - "Научишься понимать, насколько вы подходите друг другу"
  - "Узнаешь, как быть интересной собеседницей и избавишься от проблем с общением на свидании"
  - "Будешь легко принимать знаки внимания и научишься получать от этого удовольствие"
  - "Перестанешь чувствовать неловкость и начнешь принимать ухаживания  без стеснения"
  - "Узнаешь, как на мужчину влияет твоя одежда и что одеть на первом свидании, чтобы он был без ума"

topics:
  - "Куда пойти на первом свидании: должен ли мужчина выбирать, или ты можешь сделать кое-что неожиданное?"
  - "Пошаговый план — как себя вести и что конкретно делать, чтобы понравиться мужчине"
  - "Как на свидании быть уверенной, открытой и женственной"
  - "На что соглашаться на первом свидании, а на что нет"
  - "Чего КАТЕГОРИЧЕСКИ нельзя делать на первом свидани"
  - "Как вдохновить его так, чтобы он смотрел на тебя восхищенным взглядом на протяжении всего свидания"

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
          <p style="font-size: 20px; margin-bottom: 2em;">
            <i class="fa fa-check-circle-o fa-2x text-success" style="float: left; margin-left: -50px; margin-top: -5px;"></i>
            {{ item }}
          </p>
        </div>
        {% capture thecycle %}{% cycle 'odd', 'even' %}{% endcapture %}
        {% if thecycle == 'even' %}
          <div class="clearfix"></div>
        {% endif %}
      {% endfor %}
    </div>
    <p class="lead text-center" style="margin-bottom: 60px;">И, самое главное — сможешь сделать так, чтобы всего лишь за несколько часов свидания он влюбился в тебя по уши и позвонил сразу на следующий день.</p>
  </div>
</div>

<div class="section contents bg-clouds-lighter">
  <div class="container">
    <h1 class="text-center" style="margin-bottom: 60px;">Ты узнаешь:</h1>
    <div class="row">
      {% for item in page.topics %}
        <div class="col-xs-4 col-xs-offset-{% cycle 2, 1 %}">
          <p style="font-size: 20px; margin-bottom: 2em;">
            <i class="fa fa-check-circle-o fa-2x text-orange" style="float: left; margin-left: -50px; margin-top: -5px;"></i>
            {{ item }}
          </p>
        </div>
        {% capture thecycle3 %}{% cycle 'odd1', 'even1' %}{% endcapture %}
        {% if thecycle3 == 'even1' %}
          <div class="clearfix"></div>
        {% endif %}
      {% endfor %}
    </div>
    <p class="lead text-center" style="margin-bottom: 60px;">Ты настолько понравишься мужчине на первом свидании, что он поймет, что ты для него — единственная, а другие девушки перестанут его интересовать.</p>
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
    <p class="lead text-center">Если ты выполнишь все задания курса, и после нескольких свиданий ни один мужчина тебе не позвонит — я верну тебе деньги</p>
  </div>
</div>

{% include sections/author.html author=page.author bg="bg-clouds" %}

<div class="section" id="pricing">
  <div class="container">
    <h1 class="text-center">
      Хочешь, чтобы мужчина сходил с ума по тебе после первого свидания?
    </h1>
    <!--h2 class="text-center">&euro;7 или 499&nbsp;рублей</h2-->
    <div class="row">
      <div class="col-md-6 col-md-offset-3">
        <div class="well">
          <form action="http://prolubov.prorealnost.com/shot/95" method="POST">
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