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

<script src="/assets/javascript/main.js"></script>

{% assign locale = page.locale %}
{% unless locale %}{% assign locale = "en" %}{% endunless %}
{{ site.data[locale].main.donate }}
