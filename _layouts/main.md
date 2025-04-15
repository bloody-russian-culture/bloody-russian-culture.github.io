---
layout: single
---

<link rel="stylesheet" href="/assets/stylesheets/main.css"/>

{{ content }}

<div class="slideshow-wrapper">
    {% assign folderNames = "russian-culture,blood" | split: "," %}
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
                    {% if page.data_source and page.no_image != true %}
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

{% assign locale = page.locale %}
{% unless locale %}{% assign locale = "en" %}{% endunless %}
{{ site.data[locale].main.donate }}
