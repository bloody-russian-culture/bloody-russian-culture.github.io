---
layout: main
---

<link rel="stylesheet" href="/assets/stylesheets/plagiarisms.css"/>

{{ content }}

{% assign locale = page.locale %}
{% unless locale %}{% assign locale = "en" %}{% endunless %}
{% assign locale_data = site.data[locale] %}
{% assign data = locale_data[page.data_source] %}

{{ data.lead | markdownify }}

{{ locale_data.quotes.specifically }}:

<ul>
    {% for case in data.cases %}
        {% assign case_name_year = case.name %}
        {% if case.year %}
            {% assign case_name_year = case_name_year | append: " (" | append: case.year | append: ")" %}
        {% endif %}
        {% assign slug = case_name_year | downcase | replace: ' ', '-' | replace: '.', '' | replace: ',', '' | replace: "'", '' | replace: '!', '' | replace: '(', '' | replace: ')', '' | replace: '«', '' | replace: '»', '' | replace: '/', '' %}
        <li><a href="#{{ slug }}">{{ case_name_year }}</a></li>
    {% endfor %}
</ul>

{{ locale_data.plagiarisms.no_originality }}

{% for case in data.cases %}
    {% assign case_name_year = case.name %}
    {% if case.year %}
        {% assign case_name_year = case_name_year | append: " (" | append: case.year | append: ")" %}
    {% endif %}
    {% if case.link %}
        {% capture case_title %}## [{{ case_name_year }}]({{ case.link }}){% endcapture %}
    {% else %}
        {% capture case_title %}## {{ case_name_year }}{% endcapture %}
    {% endif %}
    {{ case_title | markdownify }}
    {% for origin in case.origins %}
        {% assign origin_name_year = origin.name %}
        {% if case.year %}
            {% assign origin_name_year = origin_name_year | append: " (" | append: case.year | append: ")" %}
        {% endif %}
        {% if case.link %}
            {% capture origin_title %}- ##### [{{ origin_name_year }}]({{ origin.link }}){% endcapture %}
        {% else %}
            {% capture origin_title %}- ##### {{ origin_name_year }}{% endcapture %}
        {% endif %}
        {{ origin_title | markdownify }}
        {% assign folderPath = "/assets/images/" | append: page.data_source | append: "/" | append: case.code | append: "/" | append: origin.code | append: "/" %}
        <div class="images-container">
            <div>
                {% for image in site.static_files %}
                    {% assign imagePath = folderPath | append: "case" %}
                    {% assign adapted = "" %}
                    {% if case.adapted %}
                        {% assign adapted = ", adaptation " | append: case.adapted %}
                    {% endif %}
                    {% if image.path contains imagePath %}
                        <figure>
                            {% assign slides = '<img src="' | append: image.path | append: '">' %}
                            {{ slides }}
                            {% if page.no_captions != true %}
                                <figcaption>{{ case_name_year | append: adapted }}</figcaption>
                            {% endif %}
                        </figure>
                    {% endif %}
                {% endfor %}
            </div>
            <div>
                {% for image in site.static_files %}
                    {% assign imagePath = folderPath | append: "origin" %}
                    {% assign adapted = "" %}
                    {% if origin.adapted %}
                        {% assign adapted = ", adaptation " | append: origin.adapted %}
                    {% endif %}
                    {% if image.path contains imagePath %}
                        <figure>
                            {% assign slides = '<img src="' | append: image.path | append: '">' %}
                            {{ slides }}
                            {% if page.no_captions != true %}
                                <figcaption>{{ origin_name_year  | append: adapted }}</figcaption>
                            {% endif %}
                        </figure>
                    {% endif %}
                {% endfor %}
            </div>
        </div>
    {% endfor %}
{% endfor %}

{% if data.sources %}
    {{ locale_data.quotes.sources }}:
{% endif %}
{{ data.sources | markdownify }}
