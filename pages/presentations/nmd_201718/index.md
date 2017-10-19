---
layout      : revealjs.fullscreen
title       : New Media Development
permalink   : /presentations/nmd/
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
    <section data-markdown="{{ page_back_str }}/{{ page_path_folder | append: 'content/intro__2.md' }}" data-ahs-background-image="{{ page_back_str }}/{{ page_path_folder | append: 'content/images/pattern_1.png' }}"></section>
    <section data-markdown="{{ page_back_str }}/{{ page_path_folder | append: 'content/intro__3.md' }}" data-ahs-background-image="{{ page_back_str }}/{{ page_path_folder | append: 'content/images/pattern_1.png' }}"></section>
</section>
<section class="slide__chapter">
    <section data-markdown="{{ page_back_str }}/{{ page_path_folder | append: 'content/jobs__1.md' }}" class="home"></section>
    <section data-markdown="{{ page_back_str }}/{{ page_path_folder | append: 'content/jobs__2.md' }}" data-ahs-background-image="{{ page_back_str }}/{{ page_path_folder | append: 'content/images/pattern_1.png' }}"></section>
    <section data-markdown="{{ page_back_str }}/{{ page_path_folder | append: 'content/jobs__3.md' }}" data-ahs-background-image="{{ page_back_str }}/{{ page_path_folder | append: 'content/images/pattern_1.png' }}"></section>
    <section data-markdown="{{ page_back_str }}/{{ page_path_folder | append: 'content/jobs__4.md' }}" data-ahs-background-image="{{ page_back_str }}/{{ page_path_folder | append: 'content/images/pattern_1.png' }}"></section>
</section>
<section class="slide__chapter">
    <section data-markdown="{{ page_back_str }}/{{ page_path_folder | append: 'content/education__1.md' }}" class="home"></section>
    <section data-markdown="{{ page_back_str }}/{{ page_path_folder | append: 'content/education__2.md' }}"></section>
    <section data-markdown="{{ page_back_str }}/{{ page_path_folder | append: 'content/education__3.md' }}"></section>
    <section data-markdown="{{ page_back_str }}/{{ page_path_folder | append: 'content/education__4.md' }}"></section>
    <section data-markdown="{{ page_back_str }}/{{ page_path_folder | append: 'content/education__5.md' }}"></section>
    <section data-markdown="{{ page_back_str }}/{{ page_path_folder | append: 'content/education__6.md' }}"></section>
    <section data-markdown="{{ page_back_str }}/{{ page_path_folder | append: 'content/education__7.md' }}"></section>
</section>