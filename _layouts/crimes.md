---
layout: main
---

<link rel="stylesheet" href="/assets/stylesheets/crimes.css"/>

{{ content }}

{% assign locale = page.locale %}
{% unless locale %}{% assign locale = "en" %}{% endunless %}
{% assign locale_data = site.data[locale] %}
{% assign strings = locale_data.crimes %}
{% assign text = locale_data[page.data_source] %}
{% assign fallback = site.data.en[page.data_source] %}
{% assign facts = site.data.crimes[page.data_source] %}

{% assign lead = text.lead | default: fallback.lead %}
{{ lead | markdownify }}

{{ locale_data.quotes.specifically }}:

<ul class="crimes__toc">
    {% for entry in facts.entries %}
        {% assign link = entry.links[locale] | default: entry.links.en %}
        <li>
            <a href="#{{ entry.id }}">{{ link.title }}</a>
            <span class="crime__date">{{ entry.date }}</span>
        </li>
    {% endfor %}
</ul>

{% for entry in facts.entries %}
    {% assign link = entry.links[locale] | default: entry.links.en %}
    {% assign summary = text.entries[entry.id] | default: fallback.entries[entry.id] %}
    <section class="crime">
        <h2 id="{{ entry.id }}"><a href="{{ link.url }}">{{ link.title }}</a> <span class="crime__date">{{ entry.date }}</span></h2>
        <p class="crime__summary">{{ summary }}</p>
        {% if entry.images and entry.images.size > 0 %}
            <div class="carousel" data-carousel>
                <div class="carousel__track">
                    {% for image in entry.images %}
                        {% assign alt = image.caption | default: link.title %}
                        <figure class="carousel__slide">
                            <img src="/assets/images/crimes/{{ entry.id }}/{{ image.file }}"
                                 alt="{{ alt | strip_html | escape }}"
                                 loading="lazy" decoding="async">
                            <figcaption>{{ image.caption }}</figcaption>
                        </figure>
                    {% endfor %}
                </div>
                {% if entry.images.size > 1 %}
                    <button class="carousel__nav carousel__nav--prev" type="button"
                            data-carousel-prev aria-label="{{ strings.previous }}">&#8249;</button>
                    <button class="carousel__nav carousel__nav--next" type="button"
                            data-carousel-next aria-label="{{ strings.next }}">&#8250;</button>
                    <p class="carousel__count" data-carousel-count aria-live="polite"></p>
                {% endif %}
            </div>
        {% endif %}
    </section>
{% endfor %}

{{ strings.source_note | markdownify }}

{% assign credit_count = 0 %}
{% for entry in facts.entries %}{% for image in entry.images %}{% if image.credit %}{% assign credit_count = credit_count | plus: 1 %}{% endif %}{% endfor %}{% endfor %}

{% if credit_count > 0 %}
<details class="crimes__sources">
    <summary>{{ locale_data.quotes.sources }}</summary>
    <ul>
        {% for entry in facts.entries %}
            {% assign link = entry.links[locale] | default: entry.links.en %}
            {% for image in entry.images %}
                {% if image.credit %}
                    {% assign label = image.caption | default: link.title %}
                    <li><a href="{{ image.credit }}">{{ label | strip_html }}</a></li>
                {% endif %}
            {% endfor %}
        {% endfor %}
    </ul>
</details>
{% endif %}

<script src="/assets/javascript/crimes.js"></script>
