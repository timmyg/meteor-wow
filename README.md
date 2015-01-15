# meteor-wow

#### 1. Initalize WOW
```coffeescript
Template.landing.rendered = ->
  new WOW().init()
```
  
#### 2. Add two classes to markup. "wow" and any [animate.css](http://daneden.github.io/animate.css/) animation as a class
```html
<div class="wow bounceOutDown">
  Content to Reveal Here
</div>

<!--  or -->

<div class="wow swing">
  Other Content to Reveal Here
</div>
```
