/*
 Module: highlights-intem.js
 Description: Item for hightlight panel
 */
define([
    'modules/component'
], function (
    Component
    ) {

    function Highlight(data) {
        this.data = data;
    }

    Component.define(Highlight);

    Highlight.prototype.templateName = 'highlight-item';
    Highlight.prototype.componentClass = 'highlight-item';
    Highlight.prototype.classes = {
            link: 'url',
            image: 'img',
            headline: 'headline' };
    Highlight.prototype.useBem = true;

    Highlight.prototype.template = '<li class="highlight-item"><a class="highlight-item__url media" href="">'
        + '<img class="highlight-item__img media__img" src="" alt=""/><h3 class="highlight-item__headline media__body">'
        + '</h3></a></li>';

    Highlight.prototype.prerender = function() {
        if(this.data.itemPicture) { this.getElem(this.classes.image).src = this.data.itemPicture; }
        this.getElem(this.classes.link).href = this.data.url;
        this.getElem(this.classes.headline).innerHTML = this.data.headline;
    };

    return Highlight;

});
