---
layout      : revealjs.fullscreen
title       : Cursussen en syllabi co-creëren met professionele IT-tools 
permalink   : /presentations/onderwijsdag/
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
    <section data-markdown="{{ page_back_str }}/{{ page_path_folder | append: 'content/intro.md' }}" class="home"></section>
</section>
<section class="slide__chapter">
    <section data-markdown="{{ page_back_str }}/{{ page_path_folder | append: 'content/problems__1.md' }}" class="home"></section>
    <section data-markdown="{{ page_back_str }}/{{ page_path_folder | append: 'content/problems__2.md' }}" data-ahs-background-image="http://i.huffpost.com/gen/1698265/images/o-MATH-ON-CHALKBOARD-facebook.jpg"></section>
    <section data-markdown="{{ page_back_str }}/{{ page_path_folder | append: 'content/problems__3.md' }}"></section>
</section>
<section class="slide__chapter">
    <section data-markdown="{{ page_back_str }}/{{ page_path_folder | append: 'content/future__1.md' }}" class="home"></section>
    <section data-markdown="{{ page_back_str }}/{{ page_path_folder | append: 'content/future__2.md' }}"></section>
    <section data-markdown="{{ page_back_str }}/{{ page_path_folder | append: 'content/future__3.md' }}"></section>
</section>
<section class="slide__chapter">
    <section data-markdown="{{ page_back_str }}/{{ page_path_folder | append: 'content/syllabi__1.md' }}" class="home"></section>
    <section data-markdown="{{ page_back_str }}/{{ page_path_folder | append: 'content/syllabi__2.md' }}" data-ahs-background-image="http://i.huffpost.com/gen/1698265/images/o-MATH-ON-CHALKBOARD-facebook.jpg"></section>
    <section data-markdown="{{ page_back_str }}/{{ page_path_folder | append: 'content/syllabi__3.md' }}"></section>
</section>