---
pageClass: docs
---

# Two.Path


<div class="extends">

__Extends__: [Two.Shape](/docs/shape/)

</div>


This is the primary primitive class for creating all drawable shapes in Two.js. Unless specified methods return their instance of `Two.Path` for the purpose of chaining.


<div class="meta">
  <custom-button text="Source" type="source" href="https://github.com/jonobr1/two.js/blob/dev/src/path.js" />
</div>



### Constructor


| Argument | Description |
| ---- | ----------- |
|  vertices  | A list of [Two.Anchor](/docs/anchor)s that represent the order and coordinates to construct the rendered shape. |
|  closed  | Describes whether the shape is closed or open. |
|  curved  | Describes whether the shape automatically calculates bezier handles for each vertex. |
|  manual  | Describes whether the developer controls how vertices are plotted or if Two.js automatically plots coordinates based on closed and curved booleans. |



<div class="static member ">

## Properties

<h2 class="longname" aria-hidden="true"><a href="#Properties"><span class="prefix">Two.Path.</span><span class="shortname">Properties</span></a></h2>










<div class="properties">

A list of properties that are on every [Two.Path](/docs/path).

</div>








<div class="meta">

  [`path.js:178`](https://github.com/jonobr1/two.js/blob/dev/src/path.js#L178)

</div>






</div>



<div class="static function ">

## FlagVertices

<h2 class="longname" aria-hidden="true"><a href="#FlagVertices"><span class="prefix">Two.Path.</span><span class="shortname">FlagVertices</span></a></h2>















<div class="description">

Cached method to let renderers know vertices have been updated on a [Two.Path](/docs/path).

</div>



<div class="meta">

  [`path.js:203`](https://github.com/jonobr1/two.js/blob/dev/src/path.js#L203)

</div>






</div>



<div class="static function ">

## BindVertices

<h2 class="longname" aria-hidden="true"><a href="#BindVertices"><span class="prefix">Two.Path.</span><span class="shortname">BindVertices</span></a></h2>















<div class="description">

Cached method to let [Two.Path](/docs/path) know vertices have been added to the instance.

</div>



<div class="meta">

  [`path.js:216`](https://github.com/jonobr1/two.js/blob/dev/src/path.js#L216)

</div>






</div>



<div class="static function ">

## UnbindVertices

<h2 class="longname" aria-hidden="true"><a href="#UnbindVertices"><span class="prefix">Two.Path.</span><span class="shortname">UnbindVertices</span></a></h2>















<div class="description">

Cached method to let [Two.Path](/docs/path) know vertices have been removed from the instance.

</div>



<div class="meta">

  [`path.js:234`](https://github.com/jonobr1/two.js/blob/dev/src/path.js#L234)

</div>






</div>



<div class="static function ">

## FlagFill

<h2 class="longname" aria-hidden="true"><a href="#FlagFill"><span class="prefix">Two.Path.</span><span class="shortname">FlagFill</span></a></h2>















<div class="description">

Cached method to let [Two.Path](/docs/path) know the fill has changed.

</div>



<div class="meta">

  [`path.js:250`](https://github.com/jonobr1/two.js/blob/dev/src/path.js#L250)

</div>






</div>



<div class="static function ">

## FlagFill

<h2 class="longname" aria-hidden="true"><a href="#FlagFill"><span class="prefix">Two.Path.</span><span class="shortname">FlagFill</span></a></h2>















<div class="description">

Cached method to let [Two.Path](/docs/path) know the stroke has changed.

</div>



<div class="meta">

  [`path.js:259`](https://github.com/jonobr1/two.js/blob/dev/src/path.js#L259)

</div>






</div>



<div class="static function ">

## MakeObservable

<h2 class="longname" aria-hidden="true"><a href="#MakeObservable"><span class="prefix">Two.Path.</span><span class="shortname">MakeObservable</span></a></h2>












<div class="params">

| Argument | Description |
| ---- | ----------- |
|  object  | The object to make observable. |
</div>




<div class="description">

Convenience function to apply observable qualities of a [Two.Path](/docs/path) to any object. Handy if you'd like to extend the [Two.Path](/docs/path) class on a custom class.

</div>



<div class="meta">

  [`path.js:268`](https://github.com/jonobr1/two.js/blob/dev/src/path.js#L268)

</div>






</div>



<div class="instance member ">

## closed

<h2 class="longname" aria-hidden="true"><a href="#closed"><span class="prefix">Two.Path.</span><span class="shortname">closed</span></a></h2>










<div class="properties">

Determines whether a final line is drawn between the final point in the `vertices` array and the first point.

</div>








<div class="meta">

  [`path.js:54`](https://github.com/jonobr1/two.js/blob/dev/src/path.js#L54)

</div>






</div>



<div class="instance member ">

## curved

<h2 class="longname" aria-hidden="true"><a href="#curved"><span class="prefix">Two.Path.</span><span class="shortname">curved</span></a></h2>










<div class="properties">

When the path is `automatic = true` this boolean determines whether the lines between the points are curved or not.

</div>








<div class="meta">

  [`path.js:60`](https://github.com/jonobr1/two.js/blob/dev/src/path.js#L60)

</div>






</div>



<div class="instance member ">

## beginning

<h2 class="longname" aria-hidden="true"><a href="#beginning"><span class="prefix">Two.Path.</span><span class="shortname">beginning</span></a></h2>










<div class="properties">

Number between zero and one to state the beginning of where the path is rendered.

</div>






<div class="description">

[Two.Path.beginning](/docs/path/#two-path-beginning) is a percentage value that represents at what percentage into the path should the renderer start drawing.

</div>



<div class="meta">

  [`path.js:66`](https://github.com/jonobr1/two.js/blob/dev/src/path.js#L66)

</div>



<div class="tags">


::: tip nota-bene
This is great for animating in and out stroked paths in conjunction with [Two.Path.ending](/docs/path/#two-path-ending).
:::


</div>




</div>



<div class="instance member ">

## ending

<h2 class="longname" aria-hidden="true"><a href="#ending"><span class="prefix">Two.Path.</span><span class="shortname">ending</span></a></h2>










<div class="properties">

Number between zero and one to state the ending of where the path is rendered.

</div>






<div class="description">

[Two.Path.ending](/docs/path/#two-path-ending) is a percentage value that represents at what percentage into the path should the renderer start drawing.

</div>



<div class="meta">

  [`path.js:74`](https://github.com/jonobr1/two.js/blob/dev/src/path.js#L74)

</div>



<div class="tags">


::: tip nota-bene
This is great for animating in and out stroked paths in conjunction with [Two.Path.beginning](/docs/path/#two-path-beginning).
:::


</div>




</div>



<div class="instance member ">

## fill

<h2 class="longname" aria-hidden="true"><a href="#fill"><span class="prefix">Two.Path.</span><span class="shortname">fill</span></a></h2>










<div class="properties">

The value of what the path should be filled in with.

</div>








<div class="meta">

  [`path.js:84`](https://github.com/jonobr1/two.js/blob/dev/src/path.js#L84)

</div>





<div class="see">

[https://developer.mozilla.org/en-US/docs/Web/CSS/color_value](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value) for more information on CSS's colors as `String`.

</div>


</div>



<div class="instance member ">

## stroke

<h2 class="longname" aria-hidden="true"><a href="#stroke"><span class="prefix">Two.Path.</span><span class="shortname">stroke</span></a></h2>










<div class="properties">

The value of what the path should be outlined in with.

</div>








<div class="meta">

  [`path.js:91`](https://github.com/jonobr1/two.js/blob/dev/src/path.js#L91)

</div>





<div class="see">

[https://developer.mozilla.org/en-US/docs/Web/CSS/color_value](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value) for more information on CSS's colors as `String`.

</div>


</div>



<div class="instance member ">

## linewidth

<h2 class="longname" aria-hidden="true"><a href="#linewidth"><span class="prefix">Two.Path.</span><span class="shortname">linewidth</span></a></h2>










<div class="properties">

The thickness in pixels of the stroke.

</div>








<div class="meta">

  [`path.js:98`](https://github.com/jonobr1/two.js/blob/dev/src/path.js#L98)

</div>






</div>



<div class="instance member ">

## opacity

<h2 class="longname" aria-hidden="true"><a href="#opacity"><span class="prefix">Two.Path.</span><span class="shortname">opacity</span></a></h2>










<div class="properties">

The opaqueness of the path.

</div>








<div class="meta">

  [`path.js:104`](https://github.com/jonobr1/two.js/blob/dev/src/path.js#L104)

</div>



<div class="tags">


::: tip nota-bene
Can be used in conjunction with CSS Colors that have an alpha value.
:::


</div>




</div>



<div class="instance member ">

## className

<h2 class="longname" aria-hidden="true"><a href="#className"><span class="prefix">Two.Path.</span><span class="shortname">className</span></a></h2>










<div class="properties">

A class to be applied to the element to be compatible with CSS styling.

</div>








<div class="meta">

  [`path.js:111`](https://github.com/jonobr1/two.js/blob/dev/src/path.js#L111)

</div>



<div class="tags">


::: tip nota-bene
Only available for the SVG renderer.
:::


</div>




</div>



<div class="instance member ">

## visible

<h2 class="longname" aria-hidden="true"><a href="#visible"><span class="prefix">Two.Path.</span><span class="shortname">visible</span></a></h2>










<div class="properties">

Display the path or not.

</div>








<div class="meta">

  [`path.js:118`](https://github.com/jonobr1/two.js/blob/dev/src/path.js#L118)

</div>



<div class="tags">


::: tip nota-bene
For [Two.CanvasRenderer](/docs/canvasrenderer) and [Two.WebGLRenderer](/docs/webglrenderer) when set to false all updating is disabled improving performance dramatically with many objects in the scene.
:::


</div>




</div>



<div class="instance member ">

## cap

<h2 class="longname" aria-hidden="true"><a href="#cap"><span class="prefix">Two.Path.</span><span class="shortname">cap</span></a></h2>










<div class="properties">



</div>








<div class="meta">

  [`path.js:125`](https://github.com/jonobr1/two.js/blob/dev/src/path.js#L125)

</div>





<div class="see">

[https://www.w3.org/TR/SVG11/painting.html#StrokeLinecapProperty](https://www.w3.org/TR/SVG11/painting.html#StrokeLinecapProperty)

</div>


</div>



<div class="instance member ">

## join

<h2 class="longname" aria-hidden="true"><a href="#join"><span class="prefix">Two.Path.</span><span class="shortname">join</span></a></h2>










<div class="properties">



</div>








<div class="meta">

  [`path.js:132`](https://github.com/jonobr1/two.js/blob/dev/src/path.js#L132)

</div>





<div class="see">

[https://www.w3.org/TR/SVG11/painting.html#StrokeLinejoinProperty](https://www.w3.org/TR/SVG11/painting.html#StrokeLinejoinProperty)

</div>


</div>



<div class="instance member ">

## miter

<h2 class="longname" aria-hidden="true"><a href="#miter"><span class="prefix">Two.Path.</span><span class="shortname">miter</span></a></h2>










<div class="properties">



</div>








<div class="meta">

  [`path.js:139`](https://github.com/jonobr1/two.js/blob/dev/src/path.js#L139)

</div>





<div class="see">

[https://www.w3.org/TR/SVG11/painting.html#StrokeMiterlimitProperty](https://www.w3.org/TR/SVG11/painting.html#StrokeMiterlimitProperty)

</div>


</div>



<div class="instance member ">

## vertices

<h2 class="longname" aria-hidden="true"><a href="#vertices"><span class="prefix">Two.Path.</span><span class="shortname">vertices</span></a></h2>










<div class="properties">

An ordered list of anchor points for rendering the path.

</div>






<div class="description">

A list of [Two.Anchor](/docs/anchor) objects that consist of what form the path takes.

</div>



<div class="meta">

  [`path.js:146`](https://github.com/jonobr1/two.js/blob/dev/src/path.js#L146)

</div>



<div class="tags">


::: tip nota-bene
The array when manipulating is actually a [Two.Collection](/docs/collection).
:::


</div>




</div>



<div class="instance member ">

## automatic

<h2 class="longname" aria-hidden="true"><a href="#automatic"><span class="prefix">Two.Path.</span><span class="shortname">automatic</span></a></h2>










<div class="properties">

Determines whether or not Two.js should calculate curves, lines, and commands automatically for you or to let the developer manipulate them for themselves.

</div>








<div class="meta">

  [`path.js:154`](https://github.com/jonobr1/two.js/blob/dev/src/path.js#L154)

</div>






</div>



<div class="instance member ">

## dashes

<h2 class="longname" aria-hidden="true"><a href="#dashes"><span class="prefix">Two.Path.</span><span class="shortname">dashes</span></a></h2>










<div class="properties">

Array of numbers. Odd indices represent dash length. Even indices represent dash space.

</div>






<div class="description">

A list of numbers that represent the repeated dash length and dash space applied to the stroke of the text.

</div>



<div class="meta">

  [`path.js:160`](https://github.com/jonobr1/two.js/blob/dev/src/path.js#L160)

</div>





<div class="see">

[https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-dasharray](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-dasharray) for more information on the SVG stroke-dasharray attribute.

</div>


</div>



<div class="instance member ">

## dashes.offset

<h2 class="longname" aria-hidden="true"><a href="#dashes.offset"><span class="prefix">Two.Path.</span><span class="shortname">dashes.offset</span></a></h2>










<div class="properties">

A number in pixels to offset [Two.Path.dashes](/docs/path/#two-path-dashes) display.

</div>








<div class="meta">

  [`path.js:168`](https://github.com/jonobr1/two.js/blob/dev/src/path.js#L168)

</div>






</div>



<div class="instance member ">

## length

<h2 class="longname" aria-hidden="true"><a href="#length"><span class="prefix">Two.Path.</span><span class="shortname">length</span></a></h2>










<div class="properties">

The sum of distances between all [Two.Path.vertices](/docs/path/#two-path-vertices).

</div>








<div class="meta">

  [`path.js:336`](https://github.com/jonobr1/two.js/blob/dev/src/path.js#L336)

</div>






</div>



<div class="instance member ">

## mask

<h2 class="longname" aria-hidden="true"><a href="#mask"><span class="prefix">Two.Path.</span><span class="shortname">mask</span></a></h2>










<div class="properties">

The shape whose alpha property becomes a clipping area for the path.

</div>








<div class="meta">

  [`path.js:450`](https://github.com/jonobr1/two.js/blob/dev/src/path.js#L450)

</div>



<div class="tags">


::: tip nota-bene
This property is currently not working becuase of SVG spec issues found here {@link https://code.google.com/p/chromium/issues/detail?id=370951}.
:::


</div>




</div>



<div class="instance member ">

## clip

<h2 class="longname" aria-hidden="true"><a href="#clip"><span class="prefix">Two.Path.</span><span class="shortname">clip</span></a></h2>










<div class="properties">

Tells Two.js renderer if this object represents a mask for another object (or not).

</div>








<div class="meta">

  [`path.js:473`](https://github.com/jonobr1/two.js/blob/dev/src/path.js#L473)

</div>






</div>



<div class="instance function ">

## clone

<h2 class="longname" aria-hidden="true"><a href="#clone"><span class="prefix">Two.Path.</span><span class="shortname">clone</span></a></h2>




<div class="returns">

__Returns__: Two.Path



</div>









<div class="params">

| Argument | Description |
| ---- | ----------- |
|  parent  | The parent group or scene to add the clone to. |
</div>




<div class="description">

Create a new instance of [Two.Path](/docs/path) with the same properties of the current path.

</div>



<div class="meta">

  [`path.js:717`](https://github.com/jonobr1/two.js/blob/dev/src/path.js#L717)

</div>






</div>



<div class="instance function ">

## toObject

<h2 class="longname" aria-hidden="true"><a href="#toObject"><span class="prefix">Two.Path.</span><span class="shortname">toObject</span></a></h2>




<div class="returns">

__Returns__: Object



</div>












<div class="description">

Return a JSON compatible plain object that represents the path.

</div>



<div class="meta">

  [`path.js:757`](https://github.com/jonobr1/two.js/blob/dev/src/path.js#L757)

</div>






</div>



<div class="instance function ">

## noFill

<h2 class="longname" aria-hidden="true"><a href="#noFill"><span class="prefix">Two.Path.</span><span class="shortname">noFill</span></a></h2>















<div class="description">

Short hand method to set fill to `transparent`.

</div>



<div class="meta">

  [`path.js:797`](https://github.com/jonobr1/two.js/blob/dev/src/path.js#L797)

</div>






</div>



<div class="instance function ">

## noStroke

<h2 class="longname" aria-hidden="true"><a href="#noStroke"><span class="prefix">Two.Path.</span><span class="shortname">noStroke</span></a></h2>















<div class="description">

Short hand method to set stroke to `transparent`.

</div>



<div class="meta">

  [`path.js:807`](https://github.com/jonobr1/two.js/blob/dev/src/path.js#L807)

</div>






</div>



<div class="instance function ">

## corner

<h2 class="longname" aria-hidden="true"><a href="#corner"><span class="prefix">Two.Path.</span><span class="shortname">corner</span></a></h2>















<div class="description">

Orient the vertices of the shape to the upper left-hand corner of the path.

</div>



<div class="meta">

  [`path.js:817`](https://github.com/jonobr1/two.js/blob/dev/src/path.js#L817)

</div>






</div>



<div class="instance function ">

## center

<h2 class="longname" aria-hidden="true"><a href="#center"><span class="prefix">Two.Path.</span><span class="shortname">center</span></a></h2>















<div class="description">

Orient the vertices of the shape to the center of the path.

</div>



<div class="meta">

  [`path.js:842`](https://github.com/jonobr1/two.js/blob/dev/src/path.js#L842)

</div>






</div>



<div class="instance function ">

## remove

<h2 class="longname" aria-hidden="true"><a href="#remove"><span class="prefix">Two.Path.</span><span class="shortname">remove</span></a></h2>















<div class="description">

Remove self from the scene / parent.

</div>



<div class="meta">

  [`path.js:864`](https://github.com/jonobr1/two.js/blob/dev/src/path.js#L864)

</div>






</div>



<div class="instance function ">

## getBoundingClientRect

<h2 class="longname" aria-hidden="true"><a href="#getBoundingClientRect"><span class="prefix">Two.Path.</span><span class="shortname">getBoundingClientRect</span></a></h2>




<div class="returns">

__Returns__: Object


- Returns object with top, left, right, bottom, width, height attributes.


</div>









<div class="params">

| Argument | Description |
| ---- | ----------- |
|  shallow  | Describes whether to calculate off local matrix or world matrix. |
</div>




<div class="description">

Return an object with top, left, right, bottom, width, and height parameters of the path.

</div>



<div class="meta">

  [`path.js:881`](https://github.com/jonobr1/two.js/blob/dev/src/path.js#L881)

</div>






</div>



<div class="instance function ">

## getPointAt

<h2 class="longname" aria-hidden="true"><a href="#getPointAt"><span class="prefix">Two.Path.</span><span class="shortname">getPointAt</span></a></h2>




<div class="returns">

__Returns__: Object



</div>









<div class="params">

| Argument | Description |
| ---- | ----------- |
|  t  | Percentage value describing where on the [Two.Path](/docs/path) to estimate and assign coordinate values. |
|  object  | Object to apply calculated x, y to. If none available returns new `Object`. |
</div>




<div class="description">

Given a float `t` from 0 to 1, return a point or assign a passed `obj`'s coordinates to that percentage on this [Two.Path](/docs/path)'s curve.

</div>



<div class="meta">

  [`path.js:983`](https://github.com/jonobr1/two.js/blob/dev/src/path.js#L983)

</div>






</div>



<div class="instance function ">

## plot

<h2 class="longname" aria-hidden="true"><a href="#plot"><span class="prefix">Two.Path.</span><span class="shortname">plot</span></a></h2>















<div class="description">

Based on closed / curved and sorting of vertices plot where all points should be and where the respective handles should be too.

</div>



<div class="meta">

  [`path.js:1122`](https://github.com/jonobr1/two.js/blob/dev/src/path.js#L1122)

</div>



<div class="tags">


::: tip nota-bene
While this method is public it is internally called by [Two.Path._update](/docs/path/#two-path-_update) when `automatic = true`.
:::


</div>




</div>



<div class="instance function ">

## subdivide

<h2 class="longname" aria-hidden="true"><a href="#subdivide"><span class="prefix">Two.Path.</span><span class="shortname">subdivide</span></a></h2>












<div class="params">

| Argument | Description |
| ---- | ----------- |
|  limit  | How many times to recurse subdivisions. |
</div>




<div class="description">

Insert a [Two.Anchor](/docs/anchor) at the midpoint between every item in [Two.Path.vertices](/docs/path/#two-path-vertices).

</div>



<div class="meta">

  [`path.js:1143`](https://github.com/jonobr1/two.js/blob/dev/src/path.js#L1143)

</div>






</div>

