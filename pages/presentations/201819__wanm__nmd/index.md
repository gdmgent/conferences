---
layout      : revealjs.fullscreen
title       : Web & New Media in NMD
permalink   : /presentations/1819-nmd/
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
    <section data-markdown="{{ page_back_str }}/{{ page_path_folder | append: 'content/education__content__1.md' }}" data-ahs-background-image="https://www.eternalorganizer.com/wp-content/uploads/2017/09/Web-1.jpg"></section>
    <section data-markdown="{{ page_back_str }}/{{ page_path_folder | append: 'content/education__content__2.md' }}" data-ahs-background-image="https://alfapeople.com/uk/wp-content/uploads/sites/8/2016/01/AlfaPeople-Best-Practice-JavaScript-Code-Quality-780x551.jpg"></section>
    <section data-markdown="{{ page_back_str }}/{{ page_path_folder | append: 'content/education__content__3.md' }}" data-ahs-background-image="https://cdn-images-1.medium.com/max/2000/1*5pIi6YK3tw5k5MIPu4NNww.gif"></section>
    <section data-markdown="{{ page_back_str }}/{{ page_path_folder | append: 'content/education__content__4.md' }}" data-ahs-background-image="https://line25.com/wp-content/uploads/2014/animated/1.gif"></section>
    <section data-markdown="{{ page_back_str }}/{{ page_path_folder | append: 'content/education__content__5.md' }}" data-ahs-background-image="https://i.giphy.com/media/c5RF9309KiAbm/source.gif"></section>
    <section data-markdown="{{ page_back_str }}/{{ page_path_folder | append: 'content/education__content__6.md' }}" data-ahs-background-image="https://d585tldpucybw.cloudfront.net/sfimages/default-source/default-album/this-state.gif?sfvrsn=8f30c74e_1" data-ahs-background-position="center left"></section>
    <section data-markdown="{{ page_back_str }}/{{ page_path_folder | append: 'content/education__content__7.md' }}" data-ahs-background-image="https://www.drupal.org/files/screencast.gif"></section>
    <section data-markdown="{{ page_back_str }}/{{ page_path_folder | append: 'content/education__content__10.md' }}" data-ahs-background-image="https://pbs.twimg.com/media/DEEosbeXUAAf9cK.jpg:large"></section>
    <section data-markdown="{{ page_back_str }}/{{ page_path_folder | append: 'content/education__content__8.md' }}" data-ahs-background-image="https://pbs.twimg.com/media/DoGWuOhXUAcRRnj.jpg:large" data-ahs-background-position="center right"></section>
    <section data-markdown="{{ page_back_str }}/{{ page_path_folder | append: 'content/education__content__9.md' }}" data-ahs-background-image="http://www.arteveldehogeschool.be/campusGDM/wanm/conferences/leerpad/itp.jpg" data-ahs-background-position="center left"></section>
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
    <section data-markdown="{{ page_back_str }}/{{ page_path_folder | append: 'content/extra__2.md' }}" data-ahs-full-background-image="http://www.arteveldehogeschool.be/campusGDM/wanm/conferences/leerpad/reboot_blue@2x.png"></section>
    <section data-markdown="{{ page_back_str }}/{{ page_path_folder | append: 'content/extra__3.md' }}" data-ahs-background-image="https://pbs.twimg.com/media/DnX4V5bWwAA4qEs.jpg:large"></section>
    <section data-markdown="{{ page_back_str }}/{{ page_path_folder | append: 'content/extra__4.md' }}" data-ahs-background-image="https://pbs.twimg.com/media/DnX8W-AW0AAz5vO.jpg:large"></section>
    <section data-markdown="{{ page_back_str }}/{{ page_path_folder | append: 'content/extra__5.md' }}" data-ahs-background-image="https://pbs.twimg.com/media/DnX4SkaXsAEK_Uc.jpg:large"></section>
    <section data-markdown="{{ page_back_str }}/{{ page_path_folder | append: 'content/extra__6.md' }}" data-ahs-background-image="https://pbs.twimg.com/media/DnZ843mU0AAytfv.jpg:large"></section>
    <section data-markdown="{{ page_back_str }}/{{ page_path_folder | append: 'content/extra__7.md' }}" data-ahs-background-image="https://media.giphy.com/media/pH9hbxEjnqxEc/giphy.gif"></section>
    <section data-markdown="{{ page_back_str }}/{{ page_path_folder | append: 'content/extra__8.md' }}" data-ahs-background-image="http://www.arteveldehogeschool.be/campusGDM/wanm/conferences/leerpad/nmd_projectweek.jpg"></section>
    <section data-markdown="{{ page_back_str }}/{{ page_path_folder | append: 'content/extra__9.md' }}" data-ahs-background-image="http://www.arteveldehogeschool.be/campusGDM/wanm/conferences/leerpad/nmd_lmr.jpg" data-ahs-background-position="center left"></section>
    <section data-markdown="{{ page_back_str }}/{{ page_path_folder | append: 'content/extra__15.md' }}" data-ahs-background-image="http://www.arteveldehogeschool.be/campusGDM/wanm/conferences/leerpad/afg_eclips.png" data-ahs-background-position="center center"></section>
    <section data-markdown="{{ page_back_str }}/{{ page_path_folder | append: 'content/extra__10.md' }}" data-ahs-background-image="http://www.arteveldehogeschool.be/campusGDM/wanm/conferences/leerpad/afg_guc.png" data-ahs-background-position="center center"></section>
    <section data-markdown="{{ page_back_str }}/{{ page_path_folder | append: 'content/extra__11.md' }}" data-ahs-background-image="http://www.arteveldehogeschool.be/campusGDM/wanm/conferences/leerpad/afg_timber.png" data-ahs-background-position="center center"></section>
    <section data-markdown="{{ page_back_str }}/{{ page_path_folder | append: 'content/extra__12.md' }}" data-ahs-background-image="http://www.arteveldehogeschool.be/campusGDM/wanm/conferences/leerpad/afg_9k.png" data-ahs-background-position="center center"></section>
</section>