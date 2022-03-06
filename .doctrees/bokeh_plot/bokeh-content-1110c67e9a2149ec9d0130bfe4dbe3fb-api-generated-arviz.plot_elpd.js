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
    
      
      
    
      const element = document.getElementById("b76435f9-a37d-4945-aa14-e2b03b3188dd");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'b76435f9-a37d-4945-aa14-e2b03b3188dd' but no matching script tag was found.")
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
                    
                  const docs_json = '{"00fabbab-f7bb-4826-8f7f-00d8db9d4fad":{"defs":[],"roots":{"references":[{"attributes":{"overlay":{"id":"17424"}},"id":"17419","type":"LassoSelectTool"},{"attributes":{"coordinates":null,"group":null,"text":"centered model - non centered model"},"id":"17438","type":"Title"},{"attributes":{},"id":"17442","type":"BasicTickFormatter"},{"attributes":{},"id":"17445","type":"BasicTickFormatter"},{"attributes":{"line_color":{"value":"#2a2eec"},"marker":{"field":"Cross"},"size":{"field":"sizes"},"x":{"field":"xdata"},"y":{"field":"ydata"}},"id":"17434","type":"Scatter"},{"attributes":{},"id":"17401","type":"DataRange1d"},{"attributes":{},"id":"17399","type":"DataRange1d"},{"attributes":{"callback":null},"id":"17422","type":"HoverTool"},{"attributes":{},"id":"17408","type":"BasicTicker"},{"attributes":{"coordinates":null,"data_source":{"id":"17435"},"glyph":{"id":"17434"},"group":null,"hover_glyph":null,"view":{"id":"17437"}},"id":"17436","type":"GlyphRenderer"},{"attributes":{"coordinates":null,"formatter":{"id":"17445"},"group":null,"major_label_policy":{"id":"17446"},"ticker":{"id":"17408"}},"id":"17407","type":"LinearAxis"},{"attributes":{"axis_label":"ELPD difference","coordinates":null,"formatter":{"id":"17442"},"group":null,"major_label_policy":{"id":"17443"},"ticker":{"id":"17412"}},"id":"17411","type":"LinearAxis"},{"attributes":{"data":{"sizes":{"__ndarray__":"AAAAAAAAGEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAGEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAGEAAAAAAAAAYQA==","dtype":"float64","order":"little","shape":[8]},"xdata":[0,1,2,3,4,5,6,7],"ydata":{"__ndarray__":"AB6QFygcqb8AlPbM2OqMvwDAeMOrrEA/ABRdkUAak7+A2X/x9IekPwDAu3qf/FM/wBB6xSIVsb8AE7uac6iQvw==","dtype":"float64","order":"little","shape":[8]}},"selected":{"id":"17448"},"selection_policy":{"id":"17447"}},"id":"17435","type":"ColumnDataSource"},{"attributes":{},"id":"17446","type":"AllLabels"},{"attributes":{"source":{"id":"17435"}},"id":"17437","type":"CDSView"},{"attributes":{"toolbar":{"id":"17453"},"toolbar_location":"above"},"id":"17454","type":"ToolbarBox"},{"attributes":{},"id":"17421","type":"SaveTool"},{"attributes":{},"id":"17447","type":"UnionRenderers"},{"attributes":{"toolbars":[{"id":"17425"}],"tools":[{"id":"17415"},{"id":"17416"},{"id":"17417"},{"id":"17418"},{"id":"17419"},{"id":"17420"},{"id":"17421"},{"id":"17422"}]},"id":"17453","type":"ProxyToolbar"},{"attributes":{},"id":"17416","type":"PanTool"},{"attributes":{},"id":"17418","type":"WheelZoomTool"},{"attributes":{"children":[[{"id":"17398"},0,0]]},"id":"17452","type":"GridBox"},{"attributes":{"below":[{"id":"17407"}],"center":[{"id":"17410"},{"id":"17414"}],"height":288,"left":[{"id":"17411"}],"output_backend":"webgl","renderers":[{"id":"17436"}],"title":{"id":"17438"},"toolbar":{"id":"17425"},"toolbar_location":null,"width":432,"x_range":{"id":"17399"},"x_scale":{"id":"17403"},"y_range":{"id":"17401"},"y_scale":{"id":"17405"}},"id":"17398","subtype":"Figure","type":"Plot"},{"attributes":{"coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"17424","type":"PolyAnnotation"},{"attributes":{},"id":"17443","type":"AllLabels"},{"attributes":{},"id":"17448","type":"Selection"},{"attributes":{},"id":"17412","type":"BasicTicker"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"17423","type":"BoxAnnotation"},{"attributes":{},"id":"17405","type":"LinearScale"},{"attributes":{"children":[{"id":"17454"},{"id":"17452"}]},"id":"17455","type":"Column"},{"attributes":{"overlay":{"id":"17423"}},"id":"17417","type":"BoxZoomTool"},{"attributes":{},"id":"17420","type":"UndoTool"},{"attributes":{},"id":"17415","type":"ResetTool"},{"attributes":{"axis":{"id":"17407"},"coordinates":null,"group":null,"ticker":null},"id":"17410","type":"Grid"},{"attributes":{"tools":[{"id":"17415"},{"id":"17416"},{"id":"17417"},{"id":"17418"},{"id":"17419"},{"id":"17420"},{"id":"17421"},{"id":"17422"}]},"id":"17425","type":"Toolbar"},{"attributes":{"axis":{"id":"17411"},"coordinates":null,"dimension":1,"group":null,"ticker":null},"id":"17414","type":"Grid"},{"attributes":{},"id":"17403","type":"LinearScale"}],"root_ids":["17455"]},"title":"Bokeh Application","version":"2.4.2"}}';
                  const render_items = [{"docid":"00fabbab-f7bb-4826-8f7f-00d8db9d4fad","root_ids":["17455"],"roots":{"17455":"b76435f9-a37d-4945-aa14-e2b03b3188dd"}}];
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