---
layout      : revealjs.fullscreen
title       : Web & New Media in NMD
permalink   : /presentations/swiss/
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
    <section data-markdown="{{ page_back_str }}/{{ page_path_folder | append: 'content/wot__1.md' }}" class="home"></section>
</section>
<section class="slide__chapter">
    <section data-markdown="{{ page_back_str }}/{{ page_path_folder | append: 'content/bootcamp__1.md' }}" class="home"></section>
</section>
<section class="slide__chapter">
    <section data-markdown="{{ page_back_str }}/{{ page_path_folder | append: 'content/hackathon__1.md' }}" class="home"></section>
    <section data-markdown="{{ page_back_str }}/{{ page_path_folder | append: 'content/hackathon__2.md' }}"></section>
</section>


<section class="slide__chapter">
    <section data-markdown="{{ page_back_str }}/{{ page_path_folder | append: 'content/education__content.md' }}" class="home"></section>
    <section data-markdown="{{ page_back_str }}/{{ page_path_folder | append: 'content/education__content__1.md' }}" data-ahs-background-image="https://line25.com/wp-content/uploads/2014/animated/1.gif"></section>
    <section data-markdown="{{ page_back_str }}/{{ page_path_folder | append: 'content/education__content__2.md' }}" data-ahs-background-image="http://res.cloudinary.com/dk1rn2kmf/image/upload/v1486523096/typescript-hero_vxxzuk.gif"></section>
    <section data-markdown="{{ page_back_str }}/{{ page_path_folder | append: 'content/education__content__3.md' }}" data-ahs-background-image="https://www.drupal.org/files/screencast.gif"></section>
    <section data-markdown="{{ page_back_str }}/{{ page_path_folder | append: 'content/education__content__4.md' }}" data-ahs-background-image="https://i.giphy.com/media/c5RF9309KiAbm/source.gif"></section>
    <section data-markdown="{{ page_back_str }}/{{ page_path_folder | append: 'content/education__content__5-1.md' }}"></section>
    <section data-markdown="{{ page_back_str }}/{{ page_path_folder | append: 'content/education__content__5-2.md' }}"></section>
    <section data-markdown="{{ page_back_str }}/{{ page_path_folder | append: 'content/education__content__5-3.md' }}"></section>
    <section data-markdown="{{ page_back_str }}/{{ page_path_folder | append: 'content/education__content__5-4.md' }}"></section>
    <section data-markdown="{{ page_back_str }}/{{ page_path_folder | append: 'content/education__content__5-5.md' }}"></section>
    <section data-markdown="{{ page_back_str }}/{{ page_path_folder | append: 'content/education__content__5-6.md' }}"></section>
</section>
<section class="slide__chapter">
    <section data-markdown="{{ page_back_str }}/{{ page_path_folder | append: 'content/projects__1.md' }}" class="home"></section>
    <section data-markdown="{{ page_back_str }}/{{ page_path_folder | append: 'content/projects__2.md' }}" data-ahs-full-background-image="http://www.arteveldehogeschool.be/campusGDM/wanm/conferences/leerpad/1617_webd2_downtown.png"></section>
    <section data-markdown="{{ page_back_str }}/{{ page_path_folder | append: 'content/projects__3.md' }}" data-ahs-full-background-image="http://www.arteveldehogeschool.be/campusGDM/wanm/conferences/leerpad/1617_nmdad1_aidr.png"></section>
    <section data-markdown="{{ page_back_str }}/{{ page_path_folder | append: 'content/projects__4.md' }}" data-ahs-full-background-image="http://www.arteveldehogeschool.be/campusGDM/wanm/conferences/leerpad/1617_nmdad1_euroquiz.png"></section>
    <section data-markdown="{{ page_back_str }}/{{ page_path_folder | append: 'content/projects__5.md' }}" data-ahs-full-background-image="http://www.arteveldehogeschool.be/campusGDM/wanm/conferences/leerpad/1617_nmdad2_olympus.png"></section>
    <section data-markdown="{{ page_back_str }}/{{ page_path_folder | append: 'content/projects__6.md' }}" data-ahs-full-background-image="http://www.arteveldehogeschool.be/campusGDM/wanm/conferences/leerpad/1617_nmdad2_creathing.png"></section>
    <section data-markdown="{{ page_back_str }}/{{ page_path_folder | append: 'content/projects__7.md' }}" data-ahs-full-background-image="http://www.arteveldehogeschool.be/campusGDM/wanm/conferences/leerpad/1617_nmdad2_festivote.png"></section>
    <section data-markdown="{{ page_back_str }}/{{ page_path_folder | append: 'content/projects__8.md' }}" data-ahs-full-background-image="http://www.arteveldehogeschool.be/campusGDM/wanm/conferences/leerpad/1617_wdad3_goodfood.png"></section>
    <section data-markdown="{{ page_back_str }}/{{ page_path_folder | append: 'content/projects__9.md' }}" data-ahs-full-background-image="http://www.arteveldehogeschool.be/campusGDM/wanm/conferences/leerpad/1617_wdad3_tasty.png"></section>
    <section data-markdown="{{ page_back_str }}/{{ page_path_folder | append: 'content/projects__10.md' }}" data-ahs-full-background-image="http://www.arteveldehogeschool.be/campusGDM/wanm/conferences/leerpad/1617_wdad3_fome_2.png"></section>
    <section data-markdown="{{ page_back_str }}/{{ page_path_folder | append: 'content/projects__11.md' }}" data-ahs-full-background-image="http://www.arteveldehogeschool.be/campusGDM/wanm/conferences/leerpad/1617_nmdad3_zwerfvuil.png"></section>
    <section data-markdown="{{ page_back_str }}/{{ page_path_folder | append: 'content/projects__12.md' }}" data-ahs-full-background-image="http://www.arteveldehogeschool.be/campusGDM/wanm/conferences/leerpad/1617_nmdad3_trash.png"></section>
    <section data-markdown="{{ page_back_str }}/{{ page_path_folder | append: 'content/projects__13.md' }}" data-ahs-full-background-image="http://www.arteveldehogeschool.be/campusGDM/wanm/conferences/leerpad/1617_wdad4_lets.png"></section>
    <section data-markdown="{{ page_back_str }}/{{ page_path_folder | append: 'content/projects__14.md' }}" data-ahs-full-background-image="http://www.arteveldehogeschool.be/campusGDM/wanm/conferences/leerpad/1617_wdad4_lets_2.png"></section>
    <section data-markdown="{{ page_back_str }}/{{ page_path_folder | append: 'content/projects__15.md' }}" data-ahs-full-background-image="http://www.arteveldehogeschool.be/campusGDM/wanm/conferences/leerpad/1617_ep_azdelta.png"></section>
    <section data-markdown="{{ page_back_str }}/{{ page_path_folder | append: 'content/projects__16.md' }}" data-ahs-full-background-image="http://www.arteveldehogeschool.be/campusGDM/wanm/conferences/leerpad/1617_ep_gazet.png"></section>
    <section data-markdown="{{ page_back_str }}/{{ page_path_folder | append: 'content/projects__17.md' }}" data-ahs-full-background-image="http://www.arteveldehogeschool.be/campusGDM/wanm/conferences/leerpad/1617_ep_mkg.png"></section>
    <section data-markdown="{{ page_back_str }}/{{ page_path_folder | append: 'content/projects__18.md' }}" data-ahs-full-background-image="http://www.arteveldehogeschool.be/campusGDM/wanm/conferences/leerpad/1617_ep_trots.png"></section>
    <section data-markdown="{{ page_back_str }}/{{ page_path_folder | append: 'content/projects__19.md' }}" data-ahs-full-background-image="http://www.arteveldehogeschool.be/campusGDM/wanm/conferences/leerpad/1617_bp_streetartmap.png"></section>
</section>
<section class="slide__chapter">
    <section data-markdown="{{ page_back_str }}/{{ page_path_folder | append: 'content/extra__1.md' }}" class="home"></section>
    <section data-markdown="{{ page_back_str }}/{{ page_path_folder | append: 'content/extra__2.md' }}"></section>
    <section data-markdown="{{ page_back_str }}/{{ page_path_folder | append: 'content/extra__3.md' }}"></section>
    <section data-markdown="{{ page_back_str }}/{{ page_path_folder | append: 'content/extra__4.md' }}"></section>
    <section data-markdown="{{ page_back_str }}/{{ page_path_folder | append: 'content/extra__5.md' }}"></section>
</section>