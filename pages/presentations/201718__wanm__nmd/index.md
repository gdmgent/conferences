---
layout      : revealjs.fullscreen
title       : Web & New Media in NMD
permalink   : /presentations/wanm-nmd/
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
    <section data-markdown="{{ page_back_str }}/{{ page_path_folder | append: 'content/intro__2.md' }}"></section>
    <section data-markdown="{{ page_back_str }}/{{ page_path_folder | append: 'content/intro__3.md' }}" ></section>
</section>
<section class="slide__chapter">
    <section data-markdown="{{ page_back_str }}/{{ page_path_folder | append: 'content/jobs__1.md' }}" class="home"></section>
    <section data-markdown="{{ page_back_str }}/{{ page_path_folder | append: 'content/jobs__2.md' }}" data-ahs-background-image="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1950"></section>
    <section data-markdown="{{ page_back_str }}/{{ page_path_folder | append: 'content/jobs__3.md' }}" data-ahs-background-image="https://images.unsplash.com/photo-1495291158577-5f6a7097419f?w=1050"></section>
    <section data-markdown="{{ page_back_str }}/{{ page_path_folder | append: 'content/jobs__4.md' }}" data-ahs-background-image="https://images.unsplash.com/photo-1478358161113-b0e11994a36b?w=1234"></section>
</section>
<section class="slide__chapter">
    <section data-markdown="{{ page_back_str }}/{{ page_path_folder | append: 'content/education__content.md' }}" class="home"></section>
    <section data-markdown="{{ page_back_str }}/{{ page_path_folder | append: 'content/education__content__1.md' }}" data-ahs-background-image="https://line25.com/wp-content/uploads/2014/animated/1.gif"></section>
    <section data-markdown="{{ page_back_str }}/{{ page_path_folder | append: 'content/education__content__2.md' }}" data-ahs-background-image="http://res.cloudinary.com/dk1rn2kmf/image/upload/v1486523096/typescript-hero_vxxzuk.gif"></section>
    <section data-markdown="{{ page_back_str }}/{{ page_path_folder | append: 'content/education__content__3.md' }}" data-ahs-background-image="https://www.drupal.org/files/screencast.gif"></section>
    <section data-markdown="{{ page_back_str }}/{{ page_path_folder | append: 'content/education__content__4.md' }}" data-ahs-background-image="https://i.giphy.com/media/c5RF9309KiAbm/source.gif"></section>
</section>
<section class="slide__chapter">
    <section data-markdown="{{ page_back_str }}/{{ page_path_folder | append: 'content/education__programme__1.md' }}" class="home"></section>
    <section data-markdown="{{ page_back_str }}/{{ page_path_folder | append: 'content/education__programme__2.md' }}"></section>
    <section data-markdown="{{ page_back_str }}/{{ page_path_folder | append: 'content/education__programme__2__1.md' }}" data-ahs-background-image="https://i.giphy.com/media/c5RF9309KiAbm/source.gif"></section>
    <section data-markdown="{{ page_back_str }}/{{ page_path_folder | append: 'content/education__programme__3.md' }}"></section>
    <section data-markdown="{{ page_back_str }}/{{ page_path_folder | append: 'content/education__programme__3__1.md' }}" data-ahs-background-image="https://i.giphy.com/media/c5RF9309KiAbm/source.gif"></section>
    <section data-markdown="{{ page_back_str }}/{{ page_path_folder | append: 'content/education__programme__4.md' }}"></section>
    <section data-markdown="{{ page_back_str }}/{{ page_path_folder | append: 'content/education__programme__4__1.md' }}"></section>
    <section data-markdown="{{ page_back_str }}/{{ page_path_folder | append: 'content/education__programme__5.md' }}"></section>
    <section data-markdown="{{ page_back_str }}/{{ page_path_folder | append: 'content/education__programme__5__1.md' }}"></section>
    <section data-markdown="{{ page_back_str }}/{{ page_path_folder | append: 'content/education__programme__6.md' }}"></section>
    <section data-markdown="{{ page_back_str }}/{{ page_path_folder | append: 'content/education__programme__6__1.md' }}"></section>
    <section data-markdown="{{ page_back_str }}/{{ page_path_folder | append: 'content/education__programme__7.md' }}"></section>
    <section data-markdown="{{ page_back_str }}/{{ page_path_folder | append: 'content/education__programme__7__1.md' }}"></section>
    <section data-markdown="{{ page_back_str }}/{{ page_path_folder | append: 'content/education__programme__8.md' }}"></section>
    <section data-markdown="{{ page_back_str }}/{{ page_path_folder | append: 'content/education__programme__8__1.md' }}"></section>
    <section data-markdown="{{ page_back_str }}/{{ page_path_folder | append: 'content/education__programme__9.md' }}"></section>
    <section data-markdown="{{ page_back_str }}/{{ page_path_folder | append: 'content/education__programme__9__1.md' }}"></section>
</section>