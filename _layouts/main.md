---
layout: single
---

<link rel="stylesheet" href="/assets/stylesheets/main.css"/>

{{ content }}

<div class="slideshow-wrapper">
    {% assign folderNames = "russian-culture,blood" | split: "," %}
    {% for folderName in folderNames %}
        <div class="slideshow-container">
            {% for image in site.static_files %}
                {% assign folderPath = "/assets/images/" | append: folderName | append: "/" %}
                {% if image.path contains folderPath %}
                    {% assign slides = '<div class="' | append: folderName | append: '-slides fade"><img src="' | append: image.path | append: '" style="width:100%"></div>' %}
                    {% if folderName == "blood" %}
                        {{ slides }}
                    {% else %}
                        {% if page.data_source %}
                            {% if image.path contains page.data_source %}
                                {{ slides }}
                            {% endif %}
                        {% else %}
                            {{ slides }}
                        {% endif %}
                    {% endif %}
                {% endif %}
            {% endfor %}
        </div>
    {% endfor %}
</div>

<h3>Ukraine is struggling against Russian imperialism and colonialism right now!</h3>
<a href="https://savelife.in.ua/en/donate-en/">Make a donation to Ukrainian Army (Come Back Alive)</a>
<br>
<a href="https://u24.gov.ua/">Make a humanitarian donation (United 24)</a>


<script src="/assets/javascript/main.js"></script>
