### Using CSS and JavaScript

Partimos de un fichero javascript:

 wwwroot/js/jquery-function.js

Cuando se haga click en un elemento button hace una animacion en un div

<pre><code>
var value = 300;
$(function () {
    $('button').click(function () {
        $('.box')
            .animate({ width: '+=' + value + 'px'})
            .animate({ height: '+=' + value + 'px' })
            .animate({ marginLeft: ($(window).width() - ($('.box').width() + value)) / 2 + 'px' })
            .animate({ borderWidth: '10px'})
            .animate({ opacity: 0.5 });
    });
});
</code></pre>

Agregamos un npm Configuration File package.json y le añadimos el siguinete codigo.  Añadir Item/Configuration File package.json

<pre><code>
{
  "version": "1.0.0",
  "name": "asp.net",
  "private": true,
  "devDependencies": {},
  "dependencies": {"jquery": "3.3.1" }
}
</code></pre>


Añadimos Carpeta MIddleware y clase /ApplicationBuilderExtensions.cs

<pre><code>
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.IO;
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.FileProviders;

namespace NpmExample.Middleware
{
    public static class ApplicationBuilderExtensions
    {
        public static IApplicationBuilder UseNodeModules(this IApplicationBuilder applicationBuilder, string root)
        {
            var path = Path.Combine(root, "node_modules");
            var fileProvider = new PhysicalFileProvider(path);

            var options = new StaticFileOptions();
            options.RequestPath = "/node_modules";
            options.FileProvider = fileProvider;

            applicationBuilder.UseStaticFiles(options);
            return applicationBuilder;
        }
    }
}
</code></pre>

Modificamos el Startup.cs
<pre><code>
using NpmExample.Middleware;  //   Añadido por Middleware 

............

public void Configure(IApplicationBuilder app, IHostingEnvironment env)
	{
		app.UseMvcWithDefaultRoute();
		app.UseStaticFiles();
		app.UseNodeModules(env.ContentRootPath);
	}
</code></pre>


modificamos el Layout.cshtml
<pre><code>
<script src="~/node_modules/jquery/dist/jquery.min.js"></script>
  <script src="~/js/jquery-function.js"></script>
   
   <link href="~/css/style-example.css" rel="stylesheet" />  <!-- ya que estamos se lo añadimos también que será el punto 43 -->
</code></pre>

Aádimos una vista a la action Index

<pre><code>

@{
    ViewData["Title"] = "Index";
}

<h2>Index</h2>


<div>
    <h1>Use npm to Add a Library</h1>
    <button id="btn-jquery-func">Run jQuery Function</button>
    <div class="box"></div>
</div>

</code></pre>


Añdaimos una hoja de estilos style-example.css
<pre><code>
body {
    text-align: center;
}

h1 {
    color: #1B5E20;
    font-family: "Libre Baskerville", serif;
    font-size: 45px;
    font-weight: bolder;
    text-align: center;
}

#btn-jquery-func {
    font-size: 20px;
}

.box {
    width: 150px;
    height: 150px;
    background: #81C784;
    margin-top: 30px;
    margin-left: 150px;
    margin-right: auto;
    border-style: solid;
    border-color: #388E3C;
    font-size: x-large;
    font-weight: bold;
}
</code></pre>
