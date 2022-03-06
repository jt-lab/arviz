(function() {
  const fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      const force = false;
    
      if (typeof root._bokeh_onload_callbacks === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      const element = document.getElementById("944cf40f-81f1-47b0-a40d-ff8f24fe450b");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '944cf40f-81f1-47b0-a40d-ff8f24fe450b' but no matching script tag was found.")
        }
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) {
            if (callback != null)
              callback();
          });
        } finally {
          delete root._bokeh_onload_callbacks
        }
        console.debug("Bokeh: all callbacks have finished");
      }
    
      function load_libs(css_urls, js_urls, callback) {
        if (css_urls == null) css_urls = [];
        if (js_urls == null) js_urls = [];
    
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.debug("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.debug("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = css_urls.length + js_urls.length;
    
        function on_load() {
          root._bokeh_is_loading--;
          if (root._bokeh_is_loading === 0) {
            console.debug("Bokeh: all BokehJS libraries/stylesheets loaded");
            run_callbacks()
          }
        }
    
        function on_error(url) {
          console.error("failed to load " + url);
        }
    
        for (let i = 0; i < css_urls.length; i++) {
          const url = css_urls[i];
          const element = document.createElement("link");
          element.onload = on_load;
          element.onerror = on_error.bind(null, url);
          element.rel = "stylesheet";
          element.type = "text/css";
          element.href = url;
          console.debug("Bokeh: injecting link tag for BokehJS stylesheet: ", url);
          document.body.appendChild(element);
        }
    
        for (let i = 0; i < js_urls.length; i++) {
          const url = js_urls[i];
          const element = document.createElement('script');
          element.onload = on_load;
          element.onerror = on_error.bind(null, url);
          element.async = false;
          element.src = url;
          console.debug("Bokeh: injecting script tag for BokehJS library: ", url);
          document.head.appendChild(element);
        }
      };
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      
      const js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-2.4.2.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-2.4.2.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.4.2.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.4.2.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-mathjax-2.4.2.min.js"];
      const css_urls = [];
      
    
      const inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          (function() {
            const fn = function() {
              Bokeh.safely(function() {
                (function(root) {
                  function embed_document(root) {
                    
                  const docs_json = '{"e131d96b-a444-43c9-84ae-53ba03ce1ff0":{"defs":[],"roots":{"references":[{"attributes":{"children":[[{"id":"18193"},0,0]]},"id":"18282","type":"GridBox"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"18218","type":"BoxAnnotation"},{"attributes":{"tools":[{"id":"18210"},{"id":"18211"},{"id":"18212"},{"id":"18213"},{"id":"18214"},{"id":"18215"},{"id":"18216"},{"id":"18217"}]},"id":"18220","type":"Toolbar"},{"attributes":{"below":[{"id":"18202"}],"center":[{"id":"18205"},{"id":"18209"}],"height":500,"left":[{"id":"18206"}],"output_backend":"webgl","renderers":[{"id":"18235"},{"id":"18241"},{"id":"18247"},{"id":"18253"},{"id":"18259"},{"id":"18261"}],"title":{"id":"18262"},"toolbar":{"id":"18220"},"toolbar_location":null,"width":500,"x_range":{"id":"18194"},"x_scale":{"id":"18198"},"y_range":{"id":"18196"},"y_scale":{"id":"18200"}},"id":"18193","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"18270","type":"Selection"},{"attributes":{"data":{"x":{"__ndarray__":"F1Z2xwOwPsBGCx7Af88+wA==","dtype":"float64","order":"little","shape":[2]},"y":[0.0,-1.0]},"selected":{"id":"18274"},"selection_policy":{"id":"18273"}},"id":"18243","type":"ColumnDataSource"},{"attributes":{"toolbar":{"id":"18283"},"toolbar_location":"above"},"id":"18284","type":"ToolbarBox"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":null},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_width":{"value":2},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18245","type":"Circle"},{"attributes":{},"id":"18268","type":"AllLabels"},{"attributes":{"children":[{"id":"18284"},{"id":"18282"}]},"id":"18285","type":"Column"},{"attributes":{"toolbars":[{"id":"18220"}],"tools":[{"id":"18210"},{"id":"18211"},{"id":"18212"},{"id":"18213"},{"id":"18214"},{"id":"18215"},{"id":"18216"},{"id":"18217"}]},"id":"18283","type":"ProxyToolbar"},{"attributes":{},"id":"18269","type":"UnionRenderers"},{"attributes":{},"id":"18267","type":"BasicTickFormatter"},{"attributes":{"fill_color":{"value":"grey"},"line_color":{"value":"grey"},"line_width":{"value":2},"marker":{"value":"triangle"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18232","type":"Scatter"},{"attributes":{},"id":"18264","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":null},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_width":{"value":2},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18246","type":"Circle"},{"attributes":{},"id":"18272","type":"Selection"},{"attributes":{"coordinates":null,"data_source":{"id":"18249"},"glyph":{"id":"18250"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"18252"},"nonselection_glyph":{"id":"18251"},"view":{"id":"18254"}},"id":"18253","type":"GlyphRenderer"},{"attributes":{},"id":"18265","type":"AllLabels"},{"attributes":{"line_alpha":{"value":0.2},"line_color":{"value":"grey"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"18240","type":"MultiLine"},{"attributes":{"overlay":{"id":"18219"}},"id":"18214","type":"LassoSelectTool"},{"attributes":{},"id":"18275","type":"UnionRenderers"},{"attributes":{},"id":"18194","type":"DataRange1d"},{"attributes":{},"id":"18216","type":"SaveTool"},{"attributes":{"coordinates":null,"data_source":{"id":"18237"},"glyph":{"id":"18238"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"18240"},"nonselection_glyph":{"id":"18239"},"view":{"id":"18242"}},"id":"18241","type":"GlyphRenderer"},{"attributes":{"source":{"id":"18237"}},"id":"18242","type":"CDSView"},{"attributes":{"coordinates":null,"data_source":{"id":"18255"},"glyph":{"id":"18256"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"18258"},"nonselection_glyph":{"id":"18257"},"view":{"id":"18260"}},"id":"18259","type":"GlyphRenderer"},{"attributes":{"data":{"x":{"__ndarray__":"RgsewH/PPsA=","dtype":"float64","order":"little","shape":[1]},"y":[-0.75]},"selected":{"id":"18270"},"selection_policy":{"id":"18269"}},"id":"18231","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"black"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_width":{"value":2},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18258","type":"Circle"},{"attributes":{},"id":"18200","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"black"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_width":{"value":2},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18257","type":"Circle"},{"attributes":{"source":{"id":"18231"}},"id":"18236","type":"CDSView"},{"attributes":{"data":{"x":{"__ndarray__":"m/f9Q2zYPcDPGP3dN9s9wA==","dtype":"float64","order":"little","shape":[2]},"y":[0.0,-1.0]},"selected":{"id":"18278"},"selection_policy":{"id":"18277"}},"id":"18255","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"18217","type":"HoverTool"},{"attributes":{"source":{"id":"18243"}},"id":"18248","type":"CDSView"},{"attributes":{"data":{"xs":[[-32.05285582175997,-29.322259508727658],[-32.23767500713157,-29.38341112746424]],"ys":[[0.0,0.0],[-1.0,-1.0]]},"selected":{"id":"18276"},"selection_policy":{"id":"18275"}},"id":"18249","type":"ColumnDataSource"},{"attributes":{},"id":"18271","type":"UnionRenderers"},{"attributes":{"coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"18219","type":"PolyAnnotation"},{"attributes":{"source":{"id":"18255"}},"id":"18260","type":"CDSView"},{"attributes":{"overlay":{"id":"18218"}},"id":"18212","type":"BoxZoomTool"},{"attributes":{"axis_label":"Log","coordinates":null,"formatter":{"id":"18267"},"group":null,"major_label_policy":{"id":"18268"},"ticker":{"id":"18203"}},"id":"18202","type":"LinearAxis"},{"attributes":{"line_alpha":{"value":0.1},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"18251","type":"MultiLine"},{"attributes":{},"id":"18215","type":"UndoTool"},{"attributes":{},"id":"18277","type":"UnionRenderers"},{"attributes":{"line_color":{"value":"grey"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"18238","type":"MultiLine"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"grey"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"18239","type":"MultiLine"},{"attributes":{"end":0.5,"start":-1.5},"id":"18196","type":"DataRange1d"},{"attributes":{"axis":{"id":"18206"},"coordinates":null,"dimension":1,"group":null,"ticker":null},"id":"18209","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"grey"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"grey"},"line_width":{"value":2},"marker":{"value":"triangle"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18233","type":"Scatter"},{"attributes":{},"id":"18278","type":"Selection"},{"attributes":{},"id":"18210","type":"ResetTool"},{"attributes":{"coordinates":null,"formatter":{"id":"18264"},"group":null,"major_label_overrides":{"-0.75":"","-1":"Centered 8 schools","0":"Non-centered 8 schools"},"major_label_policy":{"id":"18265"},"ticker":{"id":"18229"}},"id":"18206","type":"LinearAxis"},{"attributes":{"fill_color":{"value":null},"line_width":{"value":2},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18244","type":"Circle"},{"attributes":{"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"18250","type":"MultiLine"},{"attributes":{"coordinates":null,"dimension":"height","group":null,"line_color":"grey","line_dash":[6],"line_width":1.7677669529663689,"location":-30.687557665243812},"id":"18261","type":"Span"},{"attributes":{},"id":"18211","type":"PanTool"},{"attributes":{"coordinates":null,"data_source":{"id":"18231"},"glyph":{"id":"18232"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"18234"},"nonselection_glyph":{"id":"18233"},"view":{"id":"18236"}},"id":"18235","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"black"},"line_width":{"value":2},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18256","type":"Circle"},{"attributes":{"axis":{"id":"18202"},"coordinates":null,"group":null,"ticker":null},"id":"18205","type":"Grid"},{"attributes":{},"id":"18276","type":"Selection"},{"attributes":{"ticks":[0.0,-0.75,-1.0]},"id":"18229","type":"FixedTicker"},{"attributes":{"coordinates":null,"data_source":{"id":"18243"},"glyph":{"id":"18244"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"18246"},"nonselection_glyph":{"id":"18245"},"view":{"id":"18248"}},"id":"18247","type":"GlyphRenderer"},{"attributes":{"line_alpha":{"value":0.2},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"18252","type":"MultiLine"},{"attributes":{"source":{"id":"18249"}},"id":"18254","type":"CDSView"},{"attributes":{"data":{"xs":[[-30.896502394616824,-30.72458373997899]],"ys":[[-0.75,-0.75]]},"selected":{"id":"18272"},"selection_policy":{"id":"18271"}},"id":"18237","type":"ColumnDataSource"},{"attributes":{},"id":"18213","type":"WheelZoomTool"},{"attributes":{"coordinates":null,"group":null},"id":"18262","type":"Title"},{"attributes":{},"id":"18274","type":"Selection"},{"attributes":{},"id":"18198","type":"LinearScale"},{"attributes":{},"id":"18273","type":"UnionRenderers"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"grey"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"grey"},"line_width":{"value":2},"marker":{"value":"triangle"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18234","type":"Scatter"},{"attributes":{},"id":"18203","type":"BasicTicker"}],"root_ids":["18285"]},"title":"Bokeh Application","version":"2.4.2"}}';
                  const render_items = [{"docid":"e131d96b-a444-43c9-84ae-53ba03ce1ff0","root_ids":["18285"],"roots":{"18285":"944cf40f-81f1-47b0-a40d-ff8f24fe450b"}}];
                  root.Bokeh.embed.embed_items(docs_json, render_items);
                
                  }
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    let attempts = 0;
                    const timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        clearInterval(timer);
                        embed_document(root);
                      } else {
                        attempts++;
                        if (attempts > 100) {
                          clearInterval(timer);
                          console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                        }
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
        
        
        }
      ];
    
      function run_inline_js() {
        
        for (let i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.debug("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(css_urls, js_urls, function() {
          console.debug("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();