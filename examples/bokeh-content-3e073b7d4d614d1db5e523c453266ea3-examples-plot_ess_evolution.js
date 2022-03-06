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
    
      
      
    
      const element = document.getElementById("69ca4e34-4dda-44cc-a792-3a1e1f4953fd");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '69ca4e34-4dda-44cc-a792-3a1e1f4953fd' but no matching script tag was found.")
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
                    
                  const docs_json = '{"7a8dda2e-9757-4f71-b842-576b893bf7e1":{"defs":[],"roots":{"references":[{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"21031","type":"Circle"},{"attributes":{},"id":"21000","type":"LinearScale"},{"attributes":{},"id":"21016","type":"SaveTool"},{"attributes":{},"id":"21013","type":"WheelZoomTool"},{"attributes":{"coordinates":null,"group":null,"line_color":"red","line_dash":[6],"line_width":3,"location":400},"id":"21053","type":"Span"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"21037","type":"Line"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"21018","type":"BoxAnnotation"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#1f77b4"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"21032","type":"Circle"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"kUgpITo5UkD/4xVCu9ZkQIwda8wmdG9AKVV7klfmc0B9iLN6f4t2QCN384Oug3lAXRIP57k5gEDe8oZZBOGEQCI3trf/S4dAdSETuLRMikCa5sM7ewSJQLpDDoqDVoxADogAvE7ZjUBXvDQTTveQQPztYWbX55BATSx1OrcnkUCJGFkHolCTQIz00+lP8ZNAUA/0blR0lEAOVbAHnSuWQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"21073"},"selection_policy":{"id":"21072"}},"id":"21047","type":"ColumnDataSource"},{"attributes":{"coordinates":null,"group":null,"text":"b"},"id":"21057","type":"Title"},{"attributes":{"axis_label":"Total number of draws","coordinates":null,"formatter":{"id":"21064"},"group":null,"major_label_policy":{"id":"21065"},"ticker":{"id":"21003"}},"id":"21002","type":"LinearAxis"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"21030","type":"Circle"},{"attributes":{"line_alpha":0.2,"line_color":"orange","x":{"field":"x"},"y":{"field":"y"}},"id":"21044","type":"Line"},{"attributes":{},"id":"21071","type":"Selection"},{"attributes":{"coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"21019","type":"PolyAnnotation"},{"attributes":{"coordinates":null,"data_source":{"id":"21029"},"glyph":{"id":"21030"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"21032"},"nonselection_glyph":{"id":"21031"},"view":{"id":"21034"}},"id":"21033","type":"GlyphRenderer"},{"attributes":{},"id":"21070","type":"UnionRenderers"},{"attributes":{"coordinates":null,"data_source":{"id":"21041"},"glyph":{"id":"21042"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"21044"},"nonselection_glyph":{"id":"21043"},"view":{"id":"21046"}},"id":"21045","type":"GlyphRenderer"},{"attributes":{},"id":"21072","type":"UnionRenderers"},{"attributes":{},"id":"21015","type":"UndoTool"},{"attributes":{"axis":{"id":"21006"},"coordinates":null,"dimension":1,"group":null,"ticker":null},"id":"21009","type":"Grid"},{"attributes":{"line_alpha":0.1,"line_color":"orange","x":{"field":"x"},"y":{"field":"y"}},"id":"21043","type":"Line"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"0glo/ZHQYUCWuV3JG5ppQMqT1P2iwXVAqY8DrPB3e0Bh+Z3qJ/WAQBkscwHQK4RAmBvOlEfWikBL3Hu21ASOQLfWD/YkmpBAzy5bwfaykkBL+YYwKf6TQNX3Ngx5b5VAciIDv7ZVlkBpY4usN1KYQKnVB/o5gplAPOgo6bOym0CHt7M3Mq+fQCfqDPZjtqBAJ784mgSeoUD/m8TvrdqhQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"21069"},"selection_policy":{"id":"21068"}},"id":"21035","type":"ColumnDataSource"},{"attributes":{"axis":{"id":"21002"},"coordinates":null,"group":null,"ticker":null},"id":"21005","type":"Grid"},{"attributes":{"source":{"id":"21041"}},"id":"21046","type":"CDSView"},{"attributes":{},"id":"21003","type":"BasicTicker"},{"attributes":{"source":{"id":"21029"}},"id":"21034","type":"CDSView"},{"attributes":{"click_policy":"hide","coordinates":null,"group":null,"items":[{"id":"21055"},{"id":"21056"}],"location":"center_right","orientation":"horizontal"},"id":"21054","type":"Legend"},{"attributes":{},"id":"21069","type":"Selection"},{"attributes":{"label":{"value":"tail"},"renderers":[{"id":"21051"},{"id":"21045"}]},"id":"21056","type":"LegendItem"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"orange"},"hatch_alpha":{"value":0.2},"hatch_color":{"value":"orange"},"line_alpha":{"value":0.2},"line_color":{"value":"orange"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"21050","type":"Circle"},{"attributes":{"callback":null},"id":"21017","type":"HoverTool"},{"attributes":{},"id":"21007","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"orange"},"hatch_alpha":{"value":0.1},"hatch_color":{"value":"orange"},"line_alpha":{"value":0.1},"line_color":{"value":"orange"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"21049","type":"Circle"},{"attributes":{},"id":"21066","type":"UnionRenderers"},{"attributes":{},"id":"20994","type":"DataRange1d"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"kUgpITo5UkD/4xVCu9ZkQIwda8wmdG9AKVV7klfmc0B9iLN6f4t2QCN384Oug3lAXRIP57k5gEDe8oZZBOGEQCI3trf/S4dAdSETuLRMikCa5sM7ewSJQLpDDoqDVoxADogAvE7ZjUBXvDQTTveQQPztYWbX55BATSx1OrcnkUCJGFkHolCTQIz00+lP8ZNAUA/0blR0lEAOVbAHnSuWQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"21071"},"selection_policy":{"id":"21070"}},"id":"21041","type":"ColumnDataSource"},{"attributes":{},"id":"21010","type":"ResetTool"},{"attributes":{"source":{"id":"21035"}},"id":"21040","type":"CDSView"},{"attributes":{},"id":"21068","type":"UnionRenderers"},{"attributes":{},"id":"21073","type":"Selection"},{"attributes":{},"id":"21065","type":"AllLabels"},{"attributes":{},"id":"21061","type":"BasicTickFormatter"},{"attributes":{"label":{"value":"bulk"},"renderers":[{"id":"21033"},{"id":"21039"}]},"id":"21055","type":"LegendItem"},{"attributes":{"toolbars":[{"id":"21020"}],"tools":[{"id":"21010"},{"id":"21011"},{"id":"21012"},{"id":"21013"},{"id":"21014"},{"id":"21015"},{"id":"21016"},{"id":"21017"}]},"id":"21078","type":"ProxyToolbar"},{"attributes":{"children":[{"id":"21079"},{"id":"21077"}]},"id":"21080","type":"Column"},{"attributes":{"overlay":{"id":"21018"}},"id":"21012","type":"BoxZoomTool"},{"attributes":{},"id":"21062","type":"AllLabels"},{"attributes":{"coordinates":null,"data_source":{"id":"21035"},"glyph":{"id":"21036"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"21038"},"nonselection_glyph":{"id":"21037"},"view":{"id":"21040"}},"id":"21039","type":"GlyphRenderer"},{"attributes":{},"id":"21064","type":"BasicTickFormatter"},{"attributes":{},"id":"21067","type":"Selection"},{"attributes":{"axis_label":"ESS","coordinates":null,"formatter":{"id":"21061"},"group":null,"major_label_policy":{"id":"21062"},"ticker":{"id":"21007"}},"id":"21006","type":"LinearAxis"},{"attributes":{"line_color":"orange","x":{"field":"x"},"y":{"field":"y"}},"id":"21042","type":"Line"},{"attributes":{},"id":"20996","type":"DataRange1d"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"0glo/ZHQYUCWuV3JG5ppQMqT1P2iwXVAqY8DrPB3e0Bh+Z3qJ/WAQBkscwHQK4RAmBvOlEfWikBL3Hu21ASOQLfWD/YkmpBAzy5bwfaykkBL+YYwKf6TQNX3Ngx5b5VAciIDv7ZVlkBpY4usN1KYQKnVB/o5gplAPOgo6bOym0CHt7M3Mq+fQCfqDPZjtqBAJ784mgSeoUD/m8TvrdqhQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"21067"},"selection_policy":{"id":"21066"}},"id":"21029","type":"ColumnDataSource"},{"attributes":{},"id":"20998","type":"LinearScale"},{"attributes":{"tools":[{"id":"21010"},{"id":"21011"},{"id":"21012"},{"id":"21013"},{"id":"21014"},{"id":"21015"},{"id":"21016"},{"id":"21017"}]},"id":"21020","type":"Toolbar"},{"attributes":{"coordinates":null,"data_source":{"id":"21047"},"glyph":{"id":"21048"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"21050"},"nonselection_glyph":{"id":"21049"},"view":{"id":"21052"}},"id":"21051","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.2,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"21038","type":"Line"},{"attributes":{"toolbar":{"id":"21078"},"toolbar_location":"above"},"id":"21079","type":"ToolbarBox"},{"attributes":{"fill_color":{"value":"orange"},"hatch_color":{"value":"orange"},"line_color":{"value":"orange"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"21048","type":"Circle"},{"attributes":{},"id":"21011","type":"PanTool"},{"attributes":{"above":[{"id":"21054"}],"below":[{"id":"21002"}],"center":[{"id":"21005"},{"id":"21009"}],"height":500,"left":[{"id":"21006"}],"output_backend":"webgl","renderers":[{"id":"21033"},{"id":"21039"},{"id":"21045"},{"id":"21051"},{"id":"21053"}],"title":{"id":"21057"},"toolbar":{"id":"21020"},"toolbar_location":null,"width":500,"x_range":{"id":"20994"},"x_scale":{"id":"20998"},"y_range":{"id":"20996"},"y_scale":{"id":"21000"}},"id":"20993","subtype":"Figure","type":"Plot"},{"attributes":{"overlay":{"id":"21019"}},"id":"21014","type":"LassoSelectTool"},{"attributes":{"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"21036","type":"Line"},{"attributes":{"children":[[{"id":"20993"},0,0]]},"id":"21077","type":"GridBox"},{"attributes":{"source":{"id":"21047"}},"id":"21052","type":"CDSView"}],"root_ids":["21080"]},"title":"Bokeh Application","version":"2.4.2"}}';
                  const render_items = [{"docid":"7a8dda2e-9757-4f71-b842-576b893bf7e1","root_ids":["21080"],"roots":{"21080":"69ca4e34-4dda-44cc-a792-3a1e1f4953fd"}}];
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