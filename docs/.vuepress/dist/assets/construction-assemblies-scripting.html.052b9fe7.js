import{_ as e,o as t,c as i,a as o}from"./app.5d146afa.js";const a={},r=o('<h1 id="construction-assemblies" tabindex="-1"><a class="header-anchor" href="#construction-assemblies" aria-hidden="true">#</a> Construction Assemblies</h1><p>Revit has various <em>Construction Assemblies</em>, which are most commonly modelled as system families. The Construction Assemblies that we currently schedule in a project are:</p><ul><li>Walls</li><li>Floors</li><li>Ceilings</li><li>Roofs</li><li>Roof Soffits (Subcategory of Roofs in Revit)</li></ul><h2 id="revit-scheduling" tabindex="-1"><a class="header-anchor" href="#revit-scheduling" aria-hidden="true">#</a> Revit Scheduling</h2><p>The Revit Schedules are all formatted the same.</p><p>Notes:</p><ol><li>Where the Assembly Schedule does not have a &#39;Function&#39; the schedule is has the column for Assembly Layers increased by 3/4&quot;.</li><li>There are short names for the paramaters. (Add table of the parameter names here after...)</li><li>The Assembly Layers are padded at the beginning with 10 spaces and a &gt; <code>&gt; </code> to help schedule readability.</li><li>Likewise, the title for ULC Reference # is also padded with 10 spaces to help legibility.</li></ol><h3 id="walls" tabindex="-1"><a class="header-anchor" href="#walls" aria-hidden="true">#</a> Walls</h3><p>Partition Walls vs Interior Walls. In Revit, the <em>Function</em> parameter of the wall is limited in selections. It is implied that walls that are of the <em>Function</em> interior will always be:</p><ul><li>Partition Walls - Architectural wall types, these must contain a Core Construction which is set to the Structural Material of the wall. The parameter value for <em>Function</em> in these wall types will be substituted in the <em>Type Name</em> parameter value from <code>Interior</code> to <code>Partition</code> as will the type mark, which will be substituted from starting with an <code>I</code> to a <code>P</code>.</li><li>Interior Walls - Interior Design wall types, these are aesthetic. The <em>Core Constrcution</em> of these wall types should be set to empty. These wall types will always start with the <em>Type Name</em> value as <code>Interior</code> and <em>Type Mark</em> parameter value starts with an <code>I</code>.</li></ul><h3 id="floors" tabindex="-1"><a class="header-anchor" href="#floors" aria-hidden="true">#</a> Floors</h3><h3 id="ceilings" tabindex="-1"><a class="header-anchor" href="#ceilings" aria-hidden="true">#</a> Ceilings</h3><p>It is assumed that all ceilings on a project are indoors: this would be equivalent to their <em>Function</em> parameter being hard-coded to the value <em>Interior</em>. Ceilings outside are modelled and referred to as <em>Soffits</em>, see the <a href="#roof-soffits">Roof Soffits</a> section for more info. Ceilings can host lighting families and all sorts of other model elements that are part of the interior of the project.</p><h3 id="roofs" tabindex="-1"><a class="header-anchor" href="#roofs" aria-hidden="true">#</a> Roofs</h3><h3 id="roof-soffits" tabindex="-1"><a class="header-anchor" href="#roof-soffits" aria-hidden="true">#</a> Roof Soffits</h3><p>It is assumed that all soffits on a project are outdoors: this would be equivalent to their <em>Function</em> parameter being hard-coded to the value <em>Exterior</em>. It is also implied that soffits need thier own special category of electrical equipment, lighting &amp; even mechanical equipment as the specifications for items that are outside are functionally different and should be modelled as such.</p><h2 id="dynamo-scripting-for-assemblies" tabindex="-1"><a class="header-anchor" href="#dynamo-scripting-for-assemblies" aria-hidden="true">#</a> Dynamo Scripting for Assemblies</h2><p>You have access to a total of 10 custom scripts for working with and scheduling assemblies in your Revit Project.</p><p>It is required that prior to running any of the scripts, you complete the following checklist (the data entered here is used to name and populate your schedule):</p><ol><li>Ensure that your project has the proper Shared Parameters loaded and enabled!!! (We use Revit&#39;s Parameter Service for this...)</li><li>Enter the &#39;Function&#39; parameter properly on any Walls &amp; Floors you are going to be modifying!!!</li><li>Enter the &#39;Fire Rating (Hr)&#39; parameter properly on any walls!!! Choices for this one are: <ul><li><code>*EMPTY-FRR*</code></li><li><code>*Not Rated*</code></li><li><code>0 Hr</code></li><li><code>0.25 Hr</code> (Equivalent to 15 Minutes)</li><li><code>0.50 Hr</code> (Equivalent to 30 Minutes)</li><li><code>0.75 Hr</code> (Equivalent to 45 Minutes)</li><li><code>1 Hr</code></li><li><code>1.50 Hr</code> (Equivalent to 90 Minutes)</li><li><code>2 Hr</code></li><li><code>3 Hr</code></li><li><code>4 Hr</code></li></ul></li><li>Enter the Materials correctly for your <em>Construction Assemblies</em> prior to running the scripts!!! (We have documentation for this...)</li><li>Set the image for the &#39;Construction&#39; to our placeholder. (You can download a copy of the placeholder here... )</li><li>Enter the Discipline parameter to Architecture for all walls you want listed as Partitions instead of Interior</li></ol>',20),s=[r];function l(n,h){return t(),i("div",null,s)}const d=e(a,[["render",l],["__file","construction-assemblies-scripting.html.vue"]]);export{d as default};
