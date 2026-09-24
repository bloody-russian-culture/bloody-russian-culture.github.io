---
layout: single
---

<link rel="stylesheet" href="/assets/stylesheets/main.css"/>

{% assign locale = page.locale %}
{% unless locale %}{% assign locale = "en" %}{% endunless %}

<button
    type="button"
    class="go-up"
    data-go-up
    aria-label="{{ site.data[locale].main.go_up }}"
>&#8593;</button>

{{ content }}

{{ site.data[locale].main.donate }}

<br/><br/><br/>

<div class="slideshow-wrapper">
    {% assign folderNames = "russian_culture,blood" | split: "," %}
    {% for folderName in folderNames %}
        {% if forloop.first %}
            {% assign panelName = "left" %}
        {% else %}
            {% assign panelName = "right" %}
        {% endif %}
        <div class="slideshow-container">
            {% for image in site.static_files %}
                {% assign folderPath = "/assets/images/" | append: folderName | append: "/" %}
                {% if image.path contains folderPath %}
                    {% assign slides = '<div class="' | append: panelName | append: '-slides"><img src="' | append: image.path | append: '"></div>' %}
                    {% if page.data_source and page.no_footer_image != true %}
                        {% if image.path contains page.data_source %}
                            {{ slides }}
                        {% endif %}
                    {% else %}
                        {{ slides }}
                    {% endif %}
                {% endif %}
            {% endfor %}
        </div>
    {% endfor %}
</div>

<script src="/assets/javascript/main.js"></script>
