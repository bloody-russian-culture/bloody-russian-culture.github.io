---
layout: single
title: Bloody Russian Culture
related: false
---

Ever heard of the "Great" Russian culture?
Ever wondered what makes it so great?
The answer is __Imperialism__.

Russian culture is __imperialist__, __elitist__ and __chauvinistic__.
It's richness of Russian culture comes from the <span style="color: #780606">__blood__</span> of the people it colonized.

- The "father of the modern Russian language", [__Pushkin__](/pushkin/), approved the colonisation of
[Crimean Tatars](/pushkin/#approved-crimean-tatars-genocide-claimed-disarming-circassians-was-the-only-option-to-pacify-them-after-the-violent-conquest),
[Circassians](/pushkin/#approved-crimean-tatars-genocide-claimed-disarming-circassians-was-the-only-option-to-pacify-them-after-the-violent-conquest),
and
[Ossetians](/pushkin/#approved-prostitution-among-poor-ossetian-women).

- The "Poet of the Caucasus", or "Russia’s Second Poet", [__Lermontov__](/lermontov/), was a soldier himself,
and described [atrocities](/lermontov/#hussars-ignore-tears-and-prayers-and-brutally-traumatize-the-victim-because-of-an-arousal)
that accompanied these conquests.

- The "empathetic examiners of the human soul", [__Dostoevsky__](/dostoevsky/), openly despised
[Ukrainians](/dostoevsky/#despised-ukrainians-being-liberal-and-respecting-womens-rights-claimed-russian-patriarchy-to-be-natural),
[Jews](/dostoevsky/#used-antisemitic-slurs-despised-jews-for-not-being-christians),
[Poles](/dostoevsky/#claimed-poles-to-be-hostile-and-ultra-nationalist),
[Austrians](/dostoevsky/#called-old-poles-and-austrians-scum-claimed-them-to-be-unworthy-of-russian-sympathy)
and
[Serbs](/dostoevsky/#claimed-russians-to-be-superior-and-colonized-nations-to-be-inferior-and-harmful).

- The "visionary critic of Soviet society", [__Bulgakov__](/bulgakov/), was born and lived in Kyiv, yet mocked
[Kyivians](/bulgakov/#viewed-kyiv-as-inferior-to-moscow),
[Ukrainian language](/bulgakov/#mocked-ukrainian-language-and-didnt-take-it-seriously)
and
[Ukrainian speakers](/bulgakov/#mocked-people-who-switched-to-ukrainian-implying-russian-language-and-resources-are-richer).

- The "Russian opposition leader", [__Navalny__](/navalny/), supported
[Crimea annexation](/navalny/#supported-crimea-annexation-by-russia)
and despised [Crimean Tatars](/navalny/#referred-to-indigenous-crimean-tatars-as-agitating-interested-parties).

    His widow, the "New face of Russian opposition", __Yulia Navalnaya__ supports
    [Russian colonialism](/navalny/#yulia-navalnaya-wishes-to-punish-the-opponents-of-russian-colonialism).

<style>
  .slideshow-wrapper {
    display: flex;
  }
  
  .slideshow-container {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }
  
  .slideshow-container img {
    width: 100%; /* Forces image to fill width */
    height: 100%; /* Forces image to fill height */
    object-fit: cover; /* Scales image to fill container without white space */
  }
</style>

<div class="slideshow-wrapper">
  {% assign folderNames = "russian-culture,blood" | split: "," %}
  {% for folderName in folderNames %}
    <div class="slideshow-container">
      {% for image in site.static_files %}
        {% assign folderPath = "/assets/images/" | append: folderName | append: "/" %}
        {% if image.path contains folderPath %}
          <div class="{{ folderName }}-slides fade">
            <img src="{{ image.path }}" style="width:100%">
          </div>
        {% endif %}
      {% endfor %}
    </div>
  {% endfor %}
</div>

<script>
  showSlides("russian-culture", 0);
  showSlides("blood", 0);

  function showSlides(folderName, slideIndex) {
    let slides = document.getElementsByClassName(folderName + "-slides");
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 1500, folderName, slideIndex);
  }
</script>

### Ukraine is struggling against Russian imperialism and colonialism right now!

[Make a donation to Ukrainian Army (Come Back Alive)](https://savelife.in.ua/en/donate-en/)

[Make a humanitarian donation (United 24)](https://u24.gov.ua/)
