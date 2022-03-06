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
    
      
      
    
      const element = document.getElementById("5bd98582-06c1-4d13-b6d8-fdd61dac186a");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '5bd98582-06c1-4d13-b6d8-fdd61dac186a' but no matching script tag was found.")
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
                    
                  const docs_json = '{"ad8e3ca4-ba9e-4b2c-9808-0a2bc6882e58":{"defs":[],"roots":{"references":[{"attributes":{},"id":"21289","type":"WheelZoomTool"},{"attributes":{},"id":"21272","type":"DataRange1d"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"21294","type":"BoxAnnotation"},{"attributes":{"source":{"id":"21305"}},"id":"21310","type":"CDSView"},{"attributes":{},"id":"21316","type":"BasicTickFormatter"},{"attributes":{},"id":"21291","type":"UndoTool"},{"attributes":{"axis_label":"Quantile","coordinates":null,"formatter":{"id":"21319"},"group":null,"major_label_policy":{"id":"21320"},"ticker":{"id":"21279"}},"id":"21278","type":"LinearAxis"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"21306","type":"Circle"},{"attributes":{},"id":"21292","type":"SaveTool"},{"attributes":{},"id":"21286","type":"ResetTool"},{"attributes":{"coordinates":null,"group":null,"line_color":"red","line_dash":[6],"line_width":3,"location":400},"id":"21311","type":"Span"},{"attributes":{"toolbars":[{"id":"21296"}],"tools":[{"id":"21286"},{"id":"21287"},{"id":"21288"},{"id":"21289"},{"id":"21290"},{"id":"21291"},{"id":"21292"},{"id":"21293"}]},"id":"21327","type":"ProxyToolbar"},{"attributes":{},"id":"21320","type":"AllLabels"},{"attributes":{"callback":null},"id":"21293","type":"HoverTool"},{"attributes":{},"id":"21317","type":"AllLabels"},{"attributes":{"below":[{"id":"21278"}],"center":[{"id":"21281"},{"id":"21285"}],"height":500,"left":[{"id":"21282"}],"output_backend":"webgl","renderers":[{"id":"21309"},{"id":"21311"}],"title":{"id":"21312"},"toolbar":{"id":"21296"},"toolbar_location":null,"width":500,"x_range":{"id":"21270"},"x_scale":{"id":"21274"},"y_range":{"id":"21272"},"y_scale":{"id":"21276"}},"id":"21269","subtype":"Figure","type":"Plot"},{"attributes":{"axis_label":"ESS for quantiles","coordinates":null,"formatter":{"id":"21316"},"group":null,"major_label_policy":{"id":"21317"},"ticker":{"id":"21283"}},"id":"21282","type":"LinearAxis"},{"attributes":{"toolbar":{"id":"21327"},"toolbar_location":"above"},"id":"21328","type":"ToolbarBox"},{"attributes":{"overlay":{"id":"21294"}},"id":"21288","type":"BoxZoomTool"},{"attributes":{},"id":"21321","type":"UnionRenderers"},{"attributes":{},"id":"21322","type":"Selection"},{"attributes":{"axis":{"id":"21282"},"coordinates":null,"dimension":1,"group":null,"ticker":null},"id":"21285","type":"Grid"},{"attributes":{},"id":"21283","type":"BasicTicker"},{"attributes":{},"id":"21319","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"21307","type":"Circle"},{"attributes":{"coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"21295","type":"PolyAnnotation"},{"attributes":{},"id":"21276","type":"LinearScale"},{"attributes":{"overlay":{"id":"21295"}},"id":"21290","type":"LassoSelectTool"},{"attributes":{"coordinates":null,"data_source":{"id":"21305"},"glyph":{"id":"21306"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"21308"},"nonselection_glyph":{"id":"21307"},"view":{"id":"21310"}},"id":"21309","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#1f77b4"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"21308","type":"Circle"},{"attributes":{"axis":{"id":"21278"},"coordinates":null,"group":null,"ticker":null},"id":"21281","type":"Grid"},{"attributes":{"tools":[{"id":"21286"},{"id":"21287"},{"id":"21288"},{"id":"21289"},{"id":"21290"},{"id":"21291"},{"id":"21292"},{"id":"21293"}]},"id":"21296","type":"Toolbar"},{"attributes":{"children":[{"id":"21328"},{"id":"21326"}]},"id":"21329","type":"Column"},{"attributes":{},"id":"21270","type":"DataRange1d"},{"attributes":{},"id":"21279","type":"BasicTicker"},{"attributes":{},"id":"21287","type":"PanTool"},{"attributes":{"children":[[{"id":"21269"},0,0]]},"id":"21326","type":"GridBox"},{"attributes":{"coordinates":null,"group":null,"text":"sigma"},"id":"21312","type":"Title"},{"attributes":{},"id":"21274","type":"LinearScale"},{"attributes":{"data":{"x":{"__ndarray__":"mpmZmZmZqT/SjhUII+24P2wor6G8hsI/bolTv+eWyD9w6vfcEqfOP7klTv2eW9I/O1YgjLRj1T+8hvIaymvYPz23xKnfc9s/vueWOPV73j8gjLRjBcLgP2GkHSsQRuI/oryG8hrK4z/i1O+5JU7lPyPtWIEw0uY/YwXCSDtW6D+kHSsQRtrpP+U1lNdQXus/JU79nlvi7D9mZmZmZmbuPw==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"R2riOHxslUDJrxt4rb2XQC8UfR7VtJlAMRHUGWndmUBKO3TVSyObQNp1b/0mJp1ASsbCePPwnkB+Du/cq5qgQH8ihBoHoKBAjJ8qLZB5oECYlOwhLnyfQD8CvMP22p1A58Gm42rqnEALInuU09KdQICWYY7d25xA2A/0ZSlsnEBzLBEly1mdQE4F40OedZlAKS7heDC7m0BmB8tcKnmYQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"21322"},"selection_policy":{"id":"21321"}},"id":"21305","type":"ColumnDataSource"}],"root_ids":["21329"]},"title":"Bokeh Application","version":"2.4.2"}}';
                  const render_items = [{"docid":"ad8e3ca4-ba9e-4b2c-9808-0a2bc6882e58","root_ids":["21329"],"roots":{"21329":"5bd98582-06c1-4d13-b6d8-fdd61dac186a"}}];
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