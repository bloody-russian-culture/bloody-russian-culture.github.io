---
layout: single
title: Bloody Dostoevsky
permalink: /dostoevsky/
---

{% assign data = site.data.dostoevsky %}

{{ data.lead }}

Specifically
<ul>
    {%- for category in data.categories -%}
        {%- for quote in category.quotes -%}
            {% assign slug = quote.summary | downcase | replace: ' ', '-' | replace: '.', '' | replace: ',', '' %}
            <li><a href="#{{ slug }}">{{ quote.summary }}</a></li>
        {%- endfor -%}
    {%- endfor -%}
</ul>

<div>
    {% for category in data.categories %}
        <h2>{{ category.name }}</h2>
        <ul>
            {% for quote in category.quotes %}
                <li><h5>{{ quote.summary }}</h5></li>
                <blockquote>
                    {{ quote.excerpt }}
                    <details>
                        <summary>Original</summary>
                        {{ quote.original }}
                        <br><br>
                        <i>{{ quote.source }}</i>
                    </details>
                </blockquote>
            {% endfor %}
        </ul>
    {% endfor %}
</div>
