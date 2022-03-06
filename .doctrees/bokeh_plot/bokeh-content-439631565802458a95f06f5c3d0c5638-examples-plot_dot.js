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
    
      
      
    
      const element = document.getElementById("0eee2931-5475-4b0c-b8b6-de1eb64d1bc6");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '0eee2931-5475-4b0c-b8b6-de1eb64d1bc6' but no matching script tag was found.")
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
                    
                  const docs_json = '{"3733bc0b-970c-4f09-bcfb-a28758a1ee26":{"defs":[],"roots":{"references":[{"attributes":{},"id":"20611","type":"UnionRenderers"},{"attributes":{"toolbar":{"id":"20619"},"toolbar_location":"above"},"id":"20620","type":"ToolbarBox"},{"attributes":{"coordinates":null,"formatter":{"id":"20602"},"group":null,"major_label_policy":{"id":"20603"},"major_label_text_font_size":"0pt","major_tick_line_color":null,"minor_tick_line_color":null,"ticker":{"id":"20553"}},"id":"20552","type":"LinearAxis"},{"attributes":{"coordinates":null,"group":null},"id":"20599","type":"Title"},{"attributes":{},"id":"20544","type":"LinearScale"},{"attributes":{"callback":null},"id":"20563","type":"HoverTool"},{"attributes":{"line_color":"#c10c90","line_width":4.330127018922193,"x":{"field":"x"},"y":{"field":"y"}},"id":"20582","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"#c10c90","line_width":4.330127018922193,"x":{"field":"x"},"y":{"field":"y"}},"id":"20583","type":"Line"},{"attributes":{"source":{"id":"20587"}},"id":"20592","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#fa7c17"},"hatch_alpha":{"value":0.2},"hatch_color":{"value":"#fa7c17"},"line_alpha":{"value":0.2},"line_color":{"value":"#fa7c17"},"radius":{"value":0.16176044063520661},"radius_dimension":"y","x":{"field":"x"},"y":{"field":"y"}},"id":"20596","type":"Circle"},{"attributes":{"line_color":"#c10c90","line_width":2.1650635094610964,"x":{"field":"x"},"y":{"field":"y"}},"id":"20576","type":"Line"},{"attributes":{},"id":"20603","type":"AllLabels"},{"attributes":{},"id":"20557","type":"PanTool"},{"attributes":{"children":[[{"id":"20539"},0,0]]},"id":"20618","type":"GridBox"},{"attributes":{"line_alpha":0.2,"line_color":"#c10c90","line_width":4.330127018922193,"x":{"field":"x"},"y":{"field":"y"}},"id":"20584","type":"Line"},{"attributes":{},"id":"20561","type":"UndoTool"},{"attributes":{"coordinates":null,"data_source":{"id":"20575"},"glyph":{"id":"20576"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"20578"},"nonselection_glyph":{"id":"20577"},"view":{"id":"20580"}},"id":"20579","type":"GlyphRenderer"},{"attributes":{"axis":{"id":"20548"},"coordinates":null,"group":null,"ticker":null},"id":"20551","type":"Grid"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"#1f77b4"},"size":{"value":8.660254037844386},"x":{"value":-0.0029135803780740164},"y":{"value":0}},"id":"20588","type":"Circle"},{"attributes":{"toolbars":[{"id":"20566"}],"tools":[{"id":"20556"},{"id":"20557"},{"id":"20558"},{"id":"20559"},{"id":"20560"},{"id":"20561"},{"id":"20562"},{"id":"20563"}]},"id":"20619","type":"ProxyToolbar"},{"attributes":{},"id":"20602","type":"BasicTickFormatter"},{"attributes":{},"id":"20553","type":"BasicTicker"},{"attributes":{},"id":"20540","type":"DataRange1d"},{"attributes":{"overlay":{"id":"20565"}},"id":"20560","type":"LassoSelectTool"},{"attributes":{"coordinates":null,"formatter":{"id":"20605"},"group":null,"major_label_policy":{"id":"20606"},"ticker":{"id":"20549"}},"id":"20548","type":"LinearAxis"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"20564","type":"BoxAnnotation"},{"attributes":{"coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"20565","type":"PolyAnnotation"},{"attributes":{},"id":"20610","type":"Selection"},{"attributes":{},"id":"20556","type":"ResetTool"},{"attributes":{"source":{"id":"20593"}},"id":"20598","type":"CDSView"},{"attributes":{"axis":{"id":"20552"},"coordinates":null,"dimension":1,"group":null,"ticker":null},"id":"20555","type":"Grid"},{"attributes":{"source":{"id":"20575"}},"id":"20580","type":"CDSView"},{"attributes":{"fill_color":{"value":"#fa7c17"},"hatch_color":{"value":"#fa7c17"},"line_color":{"value":"#fa7c17"},"radius":{"value":0.16176044063520661},"radius_dimension":"y","x":{"field":"x"},"y":{"field":"y"}},"id":"20594","type":"Circle"},{"attributes":{},"id":"20559","type":"WheelZoomTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"hatch_alpha":{"value":0.1},"hatch_color":{"value":"#fa7c17"},"line_alpha":{"value":0.1},"line_color":{"value":"#fa7c17"},"radius":{"value":0.16176044063520661},"radius_dimension":"y","x":{"field":"x"},"y":{"field":"y"}},"id":"20595","type":"Circle"},{"attributes":{},"id":"20613","type":"UnionRenderers"},{"attributes":{},"id":"20614","type":"Selection"},{"attributes":{"data":{"x":{"__ndarray__":"FRx+8A5uAsDsq3R/ipD6v+yrdH+KkPq/7Kt0f4qQ+r80ET6N8b3yvzQRPo3xvfK/NBE+jfG98r80ET6N8b3yv6IYAQonyui/ohgBCifK6L+iGAEKJ8rov6IYAQonyui/ohgBCifK6L+iGAEKJ8rov3TEbrelstm/dMRut6Wy2b90xG63pbLZv3TEbrelstm/dMRut6Wy2b90xG63pbLZv3TEbrelstm/WhicSp3OqL9aGJxKnc6ov1oYnEqdzqi/WhicSp3OqL9aGJxKnc6ov1oYnEqdzqi/WhicSp3OqL9EFimaSU/TP0QWKZpJT9M/RBYpmklP0z9EFimaSU/TP0QWKZpJT9M/RBYpmklP0z9EFimaSU/TP456/k5DI+Q/jnr+TkMj5D+Oev5OQyPkP456/k5DI+Q/jnr+TkMj5D/ZQm3RXADwP9lCbdFcAPA/2UJt0VwA8D/ZQm3RXADwP9By6jDXYPY/0HLqMNdg9j/Qcuow12D2P2DXuW8eufw/YNe5bx65/D+lK8ris3EDQA==","dtype":"float64","order":"little","shape":[50]},"y":{"__ndarray__":"Hkoo7ZC0xD8eSijtkLTEPy1vvGPZDt8/plxyKLXh6T8eSijtkLTEPy1vvGPZDt8/plxyKLXh6T/aQIPP/h3yPx5KKO2QtMQ/LW+8Y9kO3z+mXHIoteHpP9pAg8/+HfI/YlPNCiNL9z/qZRdGR3j8Px5KKO2QtMQ/LW+8Y9kO3z+mXHIoteHpP9pAg8/+HfI/YlPNCiNL9z/qZRdGR3j8Pzi8sMC10gBAHkoo7ZC0xD8tb7xj2Q7fP6Zccii14ek/2kCDz/4d8j9iU80KI0v3P+plF0ZHePw/OLywwLXSAEAeSijtkLTEPy1vvGPZDt8/plxyKLXh6T/aQIPP/h3yP2JTzQojS/c/6mUXRkd4/D84vLDAtdIAQB5KKO2QtMQ/LW+8Y9kO3z+mXHIoteHpP9pAg8/+HfI/YlPNCiNL9z8eSijtkLTEPy1vvGPZDt8/plxyKLXh6T/aQIPP/h3yPx5KKO2QtMQ/LW+8Y9kO3z+mXHIoteHpPx5KKO2QtMQ/LW+8Y9kO3z8eSijtkLTEPw==","dtype":"float64","order":"little","shape":[50]}},"selected":{"id":"20614"},"selection_policy":{"id":"20613"}},"id":"20593","type":"ColumnDataSource"},{"attributes":{"children":[{"id":"20620"},{"id":"20618"}]},"id":"20621","type":"Column"},{"attributes":{"line_alpha":0.1,"line_color":"#c10c90","line_width":2.1650635094610964,"x":{"field":"x"},"y":{"field":"y"}},"id":"20577","type":"Line"},{"attributes":{},"id":"20607","type":"UnionRenderers"},{"attributes":{"overlay":{"id":"20564"}},"id":"20558","type":"BoxZoomTool"},{"attributes":{"data":{"x":[-1.9040259413199274,1.8078221014364193],"y":[0,0]},"selected":{"id":"20608"},"selection_policy":{"id":"20607"}},"id":"20575","type":"ColumnDataSource"},{"attributes":{"tools":[{"id":"20556"},{"id":"20557"},{"id":"20558"},{"id":"20559"},{"id":"20560"},{"id":"20561"},{"id":"20562"},{"id":"20563"}]},"id":"20566","type":"Toolbar"},{"attributes":{},"id":"20612","type":"Selection"},{"attributes":{},"id":"20546","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":8.660254037844386},"x":{"value":-0.0029135803780740164},"y":{"value":0}},"id":"20589","type":"Circle"},{"attributes":{},"id":"20562","type":"SaveTool"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#2a2eec"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"#1f77b4"},"size":{"value":8.660254037844386},"x":{"value":-0.0029135803780740164},"y":{"value":0}},"id":"20590","type":"Circle"},{"attributes":{"coordinates":null,"data_source":{"id":"20581"},"glyph":{"id":"20582"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"20584"},"nonselection_glyph":{"id":"20583"},"view":{"id":"20586"}},"id":"20585","type":"GlyphRenderer"},{"attributes":{},"id":"20549","type":"BasicTicker"},{"attributes":{},"id":"20608","type":"Selection"},{"attributes":{},"id":"20542","type":"DataRange1d"},{"attributes":{"line_alpha":0.2,"line_color":"#c10c90","line_width":2.1650635094610964,"x":{"field":"x"},"y":{"field":"y"}},"id":"20578","type":"Line"},{"attributes":{},"id":"20606","type":"AllLabels"},{"attributes":{"below":[{"id":"20548"}],"center":[{"id":"20551"},{"id":"20555"}],"height":360,"left":[{"id":"20552"}],"match_aspect":true,"output_backend":"webgl","renderers":[{"id":"20579"},{"id":"20585"},{"id":"20591"},{"id":"20597"}],"title":{"id":"20599"},"toolbar":{"id":"20566"},"toolbar_location":null,"width":720,"x_range":{"id":"20540"},"x_scale":{"id":"20544"},"y_range":{"id":"20542"},"y_scale":{"id":"20546"}},"id":"20539","subtype":"Figure","type":"Plot"},{"attributes":{"coordinates":null,"data_source":{"id":"20593"},"glyph":{"id":"20594"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"20596"},"nonselection_glyph":{"id":"20595"},"view":{"id":"20598"}},"id":"20597","type":"GlyphRenderer"},{"attributes":{"data":{"x":[-0.667808853419204,0.6382905789859445],"y":[0,0]},"selected":{"id":"20610"},"selection_policy":{"id":"20609"}},"id":"20581","type":"ColumnDataSource"},{"attributes":{"coordinates":null,"data_source":{"id":"20587"},"glyph":{"id":"20588"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"20590"},"nonselection_glyph":{"id":"20589"},"view":{"id":"20592"}},"id":"20591","type":"GlyphRenderer"},{"attributes":{"data":{},"selected":{"id":"20612"},"selection_policy":{"id":"20611"}},"id":"20587","type":"ColumnDataSource"},{"attributes":{},"id":"20605","type":"BasicTickFormatter"},{"attributes":{},"id":"20609","type":"UnionRenderers"},{"attributes":{"source":{"id":"20581"}},"id":"20586","type":"CDSView"}],"root_ids":["20621"]},"title":"Bokeh Application","version":"2.4.2"}}';
                  const render_items = [{"docid":"3733bc0b-970c-4f09-bcfb-a28758a1ee26","root_ids":["20621"],"roots":{"20621":"0eee2931-5475-4b0c-b8b6-de1eb64d1bc6"}}];
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