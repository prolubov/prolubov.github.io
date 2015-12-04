---
layout: landing
title: Самооценка
permalink: /selfesteem/
header: 
  title: "Быстрое поднятие самооценки"
  subtitle: "Практическое пособие, позволяющее привлечь в свою жизнь харизматичного мужчину"
  background: "/images/bg-thumbsup.jpg"
  buttontitle: "Заказать"
  morebuttontitle: "Узнать больше"

contents: 
  title: "Благодаря быстрому поднятию самооценки ты:"
  items:
    - Начнёшь относиться к себе с большим уважением
    - Станешь больше любить себя
    - Почувствуешь себя женственной и сексуальной
    - Сможешь обратить на себя внимание мужчины твоей мечты
    - Будешь общаться на равных с самыми лучшими в мире мужчинами

author: 
  title: "Автор"
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

{% include sections/contents.html contents=page.contents bg="" %}
{% include sections/author.html author=page.author bg="bg-clouds" %}

<div class="section" id="pricing">
  <div class="container">
    <h1 class="text-center">
      Заказать
    </h1>
    <h2 class="text-center">&euro;7 или 499&nbsp;рублей</h2>
    <p class="text-center"><i class="fa fa-headphones"></i> Аудио + <i class="fa fa-book"></i> электронная книга</p>
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
              <i class="fa fa-check"></i> Заказать
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>