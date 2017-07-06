---
layout      : revealjs.fullscreen
title       : Hackathons
permalink   : /presentations/hackathons/
page_styles: ['/css/ahs.css']
---

{% assign page_path = page.path | split: '/' %}
{% capture page_path_folder %}{{ page_path[0] }}/{{ page_path[1] }}/{{ page_path[2] }}/{% endcapture %} 
{% assign page_url_parts = page.url | split: '/' %}
{% assign page_back_amount = page_url_parts.size | minus: 1 %}
{% assign page_back_str = '' %}
{% for i in (1..page_back_amount) %}
    {% assign page_back_str = page_back_str | append: '../' %}
{% endfor %}

<section class="slide__chapter">
    <section data-markdown="{{ page_back_str }}/{{ page_path_folder | append: 'content/intro__1.md' }}" class="home"></section>
</section>
<section class="slide__chapter">
    <section data-markdown="{{ page_back_str }}/{{ page_path_folder | append: 'content/whatisit__1.md' }}" class="home"></section>
    <section data-markdown="{{ page_back_str }}/{{ page_path_folder | append: 'content/whatisit__2.md' }}" data-ahs-background-image="{{ page_back_str }}/{{ page_path_folder | append: 'content/images/pattern_1.png' }}"></section>
</section>
<section class="slide__chapter">
    <section data-markdown="{{ page_back_str }}/{{ page_path_folder | append: 'content/winners__1.md' }}" class="home"></section>
    <section data-markdown="{{ page_back_str }}/{{ page_path_folder | append: 'content/winners__2.md' }}" data-ahs-background-image="{{ page_back_str }}/{{ page_path_folder | append: 'content/images/nmd4live.jpg' }}"></section>
    <section data-markdown="{{ page_back_str }}/{{ page_path_folder | append: 'content/winners__3.md' }}" data-ahs-background-image="{{ page_back_str }}/{{ page_path_folder | append: 'content/images/supertof.jpg' }}"></section>
    <section data-markdown="{{ page_back_str }}/{{ page_path_folder | append: 'content/winners__4.md' }}" data-ahs-background-image="{{ page_back_str }}/{{ page_path_folder | append: 'content/images/prodev4live.jpg' }}"></section>
</section>
<section class="slide__chapter">
    <section data-markdown="{{ page_back_str }}/{{ page_path_folder | append: 'content/questions__1.md' }}" class="home"></section>
</section>