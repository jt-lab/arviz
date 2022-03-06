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
    
      
      
    
      const element = document.getElementById("47b8b0a2-e677-4654-aedd-a49370878489");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '47b8b0a2-e677-4654-aedd-a49370878489' but no matching script tag was found.")
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
                    
                  const docs_json = '{"7f69677e-ad5e-45e4-b76a-ffb652d39b0d":{"defs":[],"roots":{"references":[{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"21174","type":"BoxAnnotation"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAAACamZmZmZmpP5qZmZmZmbk/NDMzMzMzwz+amZmZmZnJPwAAAAAAANA/NDMzMzMz0z9nZmZmZmbWP5qZmZmZmdk/zczMzMzM3D8AAAAAAADgP5qZmZmZmeE/NDMzMzMz4z/NzMzMzMzkP2dmZmZmZuY/AAAAAAAA6D+amZmZmZnpPzQzMzMzM+s/zczMzMzM7D9nZmZmZmbuPw==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"PSWUrfrllUC6ZTfE07ObQIHSxpixD6BAXutlA2Fon0AWemawUmmdQBJdptJ4v59A48F0NdPPm0BhLg6FQP6cQNT8SMHKBJ1AN/hQuCybnECYCNGlG7+ZQOL2UqcslZtAhDgC8IHHmkDe0e+ORHOcQJp7JDyiB6BAxVCwvOY1n0BSmX0dHQ6gQFTe5JuCLJtAHVMIAw/Em0COFXr8JyGYQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"21207"},"selection_policy":{"id":"21206"}},"id":"21185","type":"ColumnDataSource"},{"attributes":{"overlay":{"id":"21175"}},"id":"21170","type":"LassoSelectTool"},{"attributes":{},"id":"21207","type":"Selection"},{"attributes":{},"id":"21202","type":"AllLabels"},{"attributes":{},"id":"21154","type":"LinearScale"},{"attributes":{},"id":"21205","type":"AllLabels"},{"attributes":{},"id":"21169","type":"WheelZoomTool"},{"attributes":{"children":[{"id":"21215"},{"id":"21213"}]},"id":"21216","type":"Column"},{"attributes":{"axis":{"id":"21162"},"coordinates":null,"dimension":1,"group":null,"ticker":null},"id":"21165","type":"Grid"},{"attributes":{"children":[[{"id":"21149"},0,0]]},"id":"21213","type":"GridBox"},{"attributes":{},"id":"21209","type":"Selection"},{"attributes":{},"id":"21152","type":"DataRange1d"},{"attributes":{"callback":null},"id":"21173","type":"HoverTool"},{"attributes":{"angle":{"value":1.5707963267948966},"line_alpha":{"value":0.35},"marker":{"value":"dash"},"size":{"value":8},"x":{"field":"rug_x"},"y":{"field":"rug_y"}},"id":"21191","type":"Scatter"},{"attributes":{},"id":"21201","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"21158"}],"center":[{"id":"21161"},{"id":"21165"}],"height":500,"left":[{"id":"21162"}],"output_backend":"webgl","renderers":[{"id":"21189"},{"id":"21193"},{"id":"21195"},{"id":"21196"}],"title":{"id":"21197"},"toolbar":{"id":"21176"},"toolbar_location":null,"width":500,"x_range":{"id":"21150"},"x_scale":{"id":"21154"},"y_range":{"id":"21152"},"y_scale":{"id":"21156"}},"id":"21149","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"21167","type":"PanTool"},{"attributes":{"source":{"id":"21185"}},"id":"21190","type":"CDSView"},{"attributes":{},"id":"21166","type":"ResetTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"21187","type":"Circle"},{"attributes":{},"id":"21204","type":"BasicTickFormatter"},{"attributes":{"coordinates":null,"data_source":{"id":"21192"},"glyph":{"id":"21191"},"group":null,"hover_glyph":null,"view":{"id":"21194"}},"id":"21193","type":"GlyphRenderer"},{"attributes":{},"id":"21208","type":"UnionRenderers"},{"attributes":{"source":{"id":"21192"}},"id":"21194","type":"CDSView"},{"attributes":{},"id":"21171","type":"UndoTool"},{"attributes":{"axis":{"id":"21158"},"coordinates":null,"group":null,"ticker":null},"id":"21161","type":"Grid"},{"attributes":{"axis_label":"ESS for small intervals","coordinates":null,"formatter":{"id":"21201"},"group":null,"major_label_policy":{"id":"21202"},"ticker":{"id":"21163"}},"id":"21162","type":"LinearAxis"},{"attributes":{"coordinates":null,"group":null,"line_alpha":0.7,"line_width":1.5,"location":0},"id":"21195","type":"Span"},{"attributes":{"axis_label":"Quantile","coordinates":null,"formatter":{"id":"21204"},"group":null,"major_label_policy":{"id":"21205"},"ticker":{"id":"21159"}},"id":"21158","type":"LinearAxis"},{"attributes":{"tools":[{"id":"21166"},{"id":"21167"},{"id":"21168"},{"id":"21169"},{"id":"21170"},{"id":"21171"},{"id":"21172"},{"id":"21173"}]},"id":"21176","type":"Toolbar"},{"attributes":{"coordinates":null,"data_source":{"id":"21185"},"glyph":{"id":"21186"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"21188"},"nonselection_glyph":{"id":"21187"},"view":{"id":"21190"}},"id":"21189","type":"GlyphRenderer"},{"attributes":{},"id":"21150","type":"DataRange1d"},{"attributes":{},"id":"21156","type":"LinearScale"},{"attributes":{},"id":"21163","type":"BasicTicker"},{"attributes":{},"id":"21159","type":"BasicTicker"},{"attributes":{},"id":"21206","type":"UnionRenderers"},{"attributes":{"data":{"rug_x":{"__ndarray__":"u/QnuP7V5z9SIsxa1SLgPw==","dtype":"float64","order":"little","shape":[2]},"rug_y":{"__ndarray__":"nB0+wbWyacCcHT7BtbJpwA==","dtype":"float64","order":"little","shape":[2]}},"selected":{"id":"21209"},"selection_policy":{"id":"21208"}},"id":"21192","type":"ColumnDataSource"},{"attributes":{"coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"21175","type":"PolyAnnotation"},{"attributes":{"toolbars":[{"id":"21176"}],"tools":[{"id":"21166"},{"id":"21167"},{"id":"21168"},{"id":"21169"},{"id":"21170"},{"id":"21171"},{"id":"21172"},{"id":"21173"}]},"id":"21214","type":"ProxyToolbar"},{"attributes":{},"id":"21172","type":"SaveTool"},{"attributes":{"coordinates":null,"group":null,"line_color":"red","line_dash":[6],"line_width":3,"location":400},"id":"21196","type":"Span"},{"attributes":{"coordinates":null,"group":null,"text":"mu"},"id":"21197","type":"Title"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"21186","type":"Circle"},{"attributes":{"toolbar":{"id":"21214"},"toolbar_location":"above"},"id":"21215","type":"ToolbarBox"},{"attributes":{"overlay":{"id":"21174"}},"id":"21168","type":"BoxZoomTool"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#1f77b4"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"21188","type":"Circle"}],"root_ids":["21216"]},"title":"Bokeh Application","version":"2.4.2"}}';
                  const render_items = [{"docid":"7f69677e-ad5e-45e4-b76a-ffb652d39b0d","root_ids":["21216"],"roots":{"21216":"47b8b0a2-e677-4654-aedd-a49370878489"}}];
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