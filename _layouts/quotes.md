---
layout: main
---

{{ content }}

{% assign locale = page.locale %}
{% unless locale %}{% assign locale = "en" %}{% endunless %}
{% assign locale_data = site.data[locale] %}
{% assign data = locale_data[page.data_source] %}

{{ data.lead | markdownify }}

{{ locale_data.quotes.specifically }}:

<ul>
    {%- for category in data.categories -%}
        {% for quote in category.quotes %}
            <li><a href="#{{ quote.summary | slugify }}">{{ quote.summary }}</a></li>
        {% endfor %}
    {%- endfor -%}
</ul>

{% for category in data.categories %}
    {% capture category_name %}## {{ category.name }} {#{{ category.name | slugify }}}{% endcapture %}
    {{ category_name | markdownify }}
    {% for quote in category.quotes %}
        {% capture quote_summary %}- ##### {{ quote.summary }} {#{{ quote.summary | slugify }}}{% endcapture %}
        {{ quote_summary | markdownify }}
        <blockquote>
            {{ quote.excerpt }}
            <details>
                <summary>Original</summary>
                {{ quote.original }}
                <br><br>
                {{ quote.source }}
            </details>
        </blockquote>
    {% endfor %}
{% endfor %}

{% if data.sources %}
    {{ locale_data.quotes.sources }}:
{% endif %}
{{ data.sources | markdownify }}
