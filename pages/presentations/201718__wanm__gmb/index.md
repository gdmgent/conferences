---
layout      : revealjs.fullscreen
title       : Web & New Media in GMB
permalink   : /presentations/wanm-gmb/
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
    <section data-markdown="{{ page_back_str }}/{{ page_path_folder | append: 'content/intro__4.md' }}"></section>
</section>
<section class="slide__chapter">
    <section data-markdown="{{ page_back_str }}/{{ page_path_folder | append: 'content/jobs__1.md' }}" class="home"></section>
    <section data-markdown="{{ page_back_str }}/{{ page_path_folder | append: 'content/jobs__2.md' }}" data-ahs-background-image="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1950"></section>
</section>
<section class="slide__chapter">
    <section data-markdown="{{ page_back_str }}/{{ page_path_folder | append: 'content/education__content__1.md' }}" class="home"></section>
    <section data-markdown="{{ page_back_str }}/{{ page_path_folder | append: 'content/education__content__2.md' }}" data-ahs-background-image="https://line25.com/wp-content/uploads/2014/animated/1.gif"></section>
    <section data-markdown="{{ page_back_str }}/{{ page_path_folder | append: 'content/education__content__3-1.md' }}"></section>
    <section data-markdown="{{ page_back_str }}/{{ page_path_folder | append: 'content/education__content__3-2.md' }}" ></section>
    <section data-markdown="{{ page_back_str }}/{{ page_path_folder | append: 'content/education__content__3-3.md' }}"></section>
    <section data-markdown="{{ page_back_str }}/{{ page_path_folder | append: 'content/education__content__3-4.md' }}"></section>
</section>
<section class="slide__chapter">
    <section data-markdown="{{ page_back_str }}/{{ page_path_folder | append: 'content/projects__1.md' }}" class="home"></section>
    <section data-markdown="{{ page_back_str }}/{{ page_path_folder | append: 'content/projects__2.md' }}" data-ahs-full-background-image="http://www.arteveldehogeschool.be/campusGDM/wanm/conferences/leerpad/1617_webd2_downtown.png"></section>
    <section data-markdown="{{ page_back_str }}/{{ page_path_folder | append: 'content/projects__15.md' }}" data-ahs-full-background-image="http://www.arteveldehogeschool.be/campusGDM/wanm/conferences/leerpad/1617_ep_azdelta.png"></section>
    <section data-markdown="{{ page_back_str }}/{{ page_path_folder | append: 'content/projects__16.md' }}" data-ahs-full-background-image="http://www.arteveldehogeschool.be/campusGDM/wanm/conferences/leerpad/1617_ep_gazet.png"></section>
</section>