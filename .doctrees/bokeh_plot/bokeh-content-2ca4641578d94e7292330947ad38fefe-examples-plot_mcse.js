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
    
      
      
    
      const element = document.getElementById("256cd270-3567-4784-b64c-84d09c93e164");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '256cd270-3567-4784-b64c-84d09c93e164' but no matching script tag was found.")
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
                    
                  const docs_json = '{"160a32df-c9a5-4fbb-bc8b-4ede8e0d0208":{"defs":[],"roots":{"references":[{"attributes":{"callback":null},"id":"41861","type":"HoverTool"},{"attributes":{},"id":"41860","type":"SaveTool"},{"attributes":{},"id":"41859","type":"UndoTool"},{"attributes":{"axis_label":"MCSE for quantiles","coordinates":null,"formatter":{"id":"41955"},"group":null,"major_label_policy":{"id":"41956"},"ticker":{"id":"41887"}},"id":"41886","type":"LinearAxis"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"41862","type":"BoxAnnotation"},{"attributes":{"below":[{"id":"41846"}],"center":[{"id":"41849"},{"id":"41853"}],"height":500,"left":[{"id":"41850"}],"output_backend":"webgl","renderers":[{"id":"41913"},{"id":"41915"},{"id":"41916"},{"id":"41917"},{"id":"41920"}],"title":{"id":"41922"},"toolbar":{"id":"41864"},"toolbar_location":null,"width":500,"x_range":{"id":"41838"},"x_scale":{"id":"41842"},"y_range":{"id":"41840"},"y_scale":{"id":"41844"}},"id":"41837","subtype":"Figure","type":"Plot"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"41898","type":"BoxAnnotation"},{"attributes":{"source":{"id":"41919"}},"id":"41921","type":"CDSView"},{"attributes":{},"id":"41941","type":"BasicTickFormatter"},{"attributes":{},"id":"41942","type":"AllLabels"},{"attributes":{},"id":"41962","type":"UnionRenderers"},{"attributes":{},"id":"41944","type":"BasicTickFormatter"},{"attributes":{"coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"41863","type":"PolyAnnotation"},{"attributes":{},"id":"41963","type":"Selection"},{"attributes":{},"id":"41945","type":"AllLabels"},{"attributes":{"coordinates":null,"data_source":{"id":"41909"},"glyph":{"id":"41910"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"41912"},"nonselection_glyph":{"id":"41911"},"view":{"id":"41914"}},"id":"41913","type":"GlyphRenderer"},{"attributes":{"source":{"id":"41909"}},"id":"41914","type":"CDSView"},{"attributes":{},"id":"41878","type":"LinearScale"},{"attributes":{"data":{"x":{"__ndarray__":"mpmZmZmZqT/SjhUII+24P2wor6G8hsI/bolTv+eWyD9w6vfcEqfOP7klTv2eW9I/O1YgjLRj1T+8hvIaymvYPz23xKnfc9s/vueWOPV73j8gjLRjBcLgP2GkHSsQRuI/oryG8hrK4z/i1O+5JU7lPyPtWIEw0uY/YwXCSDtW6D+kHSsQRtrpP+U1lNdQXus/JU79nlvi7D9mZmZmZmbuPw==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"TOY7mm62yD/upazjteTNP/DqXfy8Lcs/HHCIRHVOzT9orzckCyTOP6y8CkfbP8w/iNx/9NF5yz+IfM+LFJ/NPygi8KloJ8w/oK0q3zNVzD/YcLH58jHPP6hWLqhoMNQ/IGaMl5nu0j8AebTCVJLRP+D0hUiIM80/uNpKBpu90z/A00Fq0J3TP2iCFjW8ldY/kLBgWUSo1j8QCPgZgPnXPw==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"41947"},"selection_policy":{"id":"41946"}},"id":"41909","type":"ColumnDataSource"},{"attributes":{"tools":[{"id":"41890"},{"id":"41891"},{"id":"41892"},{"id":"41893"},{"id":"41894"},{"id":"41895"},{"id":"41896"},{"id":"41897"}]},"id":"41900","type":"Toolbar"},{"attributes":{"data":{"rug_x":{"__ndarray__":"jQwCEA1Gsz9bBMLb9PjIP1Qd9Zram7E/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/zis1V/mKlP/OKzVX+YqU/84rNVf5ipT/zis1V/mKlP/OKzVX+YqU/84rNVf5ipT/zis1V/mKlP/OKzVX+YqU/aF85wG2piz9oXznAbamLP2hfOcBtqYs/aF85wG2piz9oXznAbamLP2hfOcBtqYs/pI3yRkqEyT9c/+ob+nG6P4OiBeyjALU/mx4fY+a33D9wF2c1cbTRPy51Aws2htg/P07TEgOYwz9FOncTGHy5P/BQ+ANPucc/uRO6PYJJzj9CRCWTDYpmP+UvVnGFsrI/8JR71fNwcj8=","dtype":"float64","order":"little","shape":[43]},"rug_y":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=","dtype":"float64","order":"little","shape":[43]}},"selected":{"id":"41949"},"selection_policy":{"id":"41948"}},"id":"41919","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"41897","type":"HoverTool"},{"attributes":{"coordinates":null,"group":null,"line_alpha":0.5,"line_width":0.75,"location":0.1782444431478369},"id":"41916","type":"Span"},{"attributes":{"coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"41899","type":"PolyAnnotation"},{"attributes":{},"id":"41946","type":"UnionRenderers"},{"attributes":{"end":1,"start":-0.05},"id":"41876","type":"DataRange1d"},{"attributes":{"coordinates":null,"group":null,"line_alpha":0.5,"line_width":1.5,"location":0.2148430013731262},"id":"41930","type":"Span"},{"attributes":{},"id":"41947","type":"Selection"},{"attributes":{"tools":[{"id":"41854"},{"id":"41855"},{"id":"41856"},{"id":"41857"},{"id":"41858"},{"id":"41859"},{"id":"41860"},{"id":"41861"}]},"id":"41864","type":"Toolbar"},{"attributes":{"source":{"id":"41924"}},"id":"41929","type":"CDSView"},{"attributes":{"data":{"x":{"__ndarray__":"mpmZmZmZqT/SjhUII+24P2wor6G8hsI/bolTv+eWyD9w6vfcEqfOP7klTv2eW9I/O1YgjLRj1T+8hvIaymvYPz23xKnfc9s/vueWOPV73j8gjLRjBcLgP2GkHSsQRuI/oryG8hrK4z/i1O+5JU7lPyPtWIEw0uY/YwXCSDtW6D+kHSsQRtrpP+U1lNdQXus/JU79nlvi7D9mZmZmZmbuPw==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"bcJe+Pxh3D88Eu5SUq3NPyL+eQAns8s/mzeOVbYJ1z+YvNPsmzTWP87j+UyletE/sIr1s8Bnzz8YN/msnr7PP8gPs0h4ec8/RNGUEkZ90z8g12riYrDUP+AlTxYjYc4/UBTOvdhAzD+AFwpyJ0DOPxDSzcUXbc4/kDNyJsikyj9AY0p3Si3PP8AWdsF70MQ/4I8dAXxLyD+grhW5nZrSPw==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"41961"},"selection_policy":{"id":"41960"}},"id":"41924","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#1f77b4"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"41912","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"41911","type":"Circle"},{"attributes":{"coordinates":null,"group":null,"line_alpha":0.7,"line_width":1.5,"location":0},"id":"41917","type":"Span"},{"attributes":{"angle":{"value":1.5707963267948966},"line_alpha":{"value":0.35},"marker":{"value":"dash"},"size":{"value":8},"x":{"field":"rug_x"},"y":{"field":"rug_y"}},"id":"41918","type":"Scatter"},{"attributes":{"source":{"id":"41934"}},"id":"41936","type":"CDSView"},{"attributes":{"axis_label":"Quantile","coordinates":null,"formatter":{"id":"41958"},"group":null,"major_label_policy":{"id":"41959"},"ticker":{"id":"41883"}},"id":"41882","type":"LinearAxis"},{"attributes":{"coordinates":null,"data_source":{"id":"41919"},"glyph":{"id":"41918"},"group":null,"hover_glyph":null,"view":{"id":"41921"}},"id":"41920","type":"GlyphRenderer"},{"attributes":{"coordinates":null,"group":null,"text":"tau"},"id":"41922","type":"Title"},{"attributes":{"toolbars":[{"id":"41864"},{"id":"41900"}],"tools":[{"id":"41854"},{"id":"41855"},{"id":"41856"},{"id":"41857"},{"id":"41858"},{"id":"41859"},{"id":"41860"},{"id":"41861"},{"id":"41890"},{"id":"41891"},{"id":"41892"},{"id":"41893"},{"id":"41894"},{"id":"41895"},{"id":"41896"},{"id":"41897"}]},"id":"41968","type":"ProxyToolbar"},{"attributes":{},"id":"41838","type":"DataRange1d"},{"attributes":{},"id":"41880","type":"LinearScale"},{"attributes":{},"id":"41883","type":"BasicTicker"},{"attributes":{"axis":{"id":"41882"},"coordinates":null,"group":null,"ticker":null},"id":"41885","type":"Grid"},{"attributes":{},"id":"41948","type":"UnionRenderers"},{"attributes":{"children":[[{"id":"41837"},0,0],[{"id":"41873"},0,1]]},"id":"41967","type":"GridBox"},{"attributes":{},"id":"41842","type":"LinearScale"},{"attributes":{},"id":"41949","type":"Selection"},{"attributes":{"toolbar":{"id":"41968"},"toolbar_location":"above"},"id":"41969","type":"ToolbarBox"},{"attributes":{"end":1,"start":-0.05},"id":"41840","type":"DataRange1d"},{"attributes":{},"id":"41955","type":"BasicTickFormatter"},{"attributes":{"coordinates":null,"group":null,"line_alpha":0.5,"line_width":1.5,"location":0.2515582690238702},"id":"41915","type":"Span"},{"attributes":{"coordinates":null,"group":null,"text":"mu"},"id":"41937","type":"Title"},{"attributes":{},"id":"41956","type":"AllLabels"},{"attributes":{},"id":"41857","type":"WheelZoomTool"},{"attributes":{"coordinates":null,"data_source":{"id":"41934"},"glyph":{"id":"41933"},"group":null,"hover_glyph":null,"view":{"id":"41936"}},"id":"41935","type":"GlyphRenderer"},{"attributes":{"below":[{"id":"41882"}],"center":[{"id":"41885"},{"id":"41889"}],"height":500,"left":[{"id":"41886"}],"output_backend":"webgl","renderers":[{"id":"41928"},{"id":"41930"},{"id":"41931"},{"id":"41932"},{"id":"41935"}],"title":{"id":"41937"},"toolbar":{"id":"41900"},"toolbar_location":null,"width":500,"x_range":{"id":"41874"},"x_scale":{"id":"41878"},"y_range":{"id":"41876"},"y_scale":{"id":"41880"}},"id":"41873","subtype":"Figure","type":"Plot"},{"attributes":{"angle":{"value":1.5707963267948966},"line_alpha":{"value":0.35},"marker":{"value":"dash"},"size":{"value":8},"x":{"field":"rug_x"},"y":{"field":"rug_y"}},"id":"41933","type":"Scatter"},{"attributes":{},"id":"41958","type":"BasicTickFormatter"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"41910","type":"Circle"},{"attributes":{"coordinates":null,"group":null,"line_alpha":0.7,"line_width":1.5,"location":0},"id":"41932","type":"Span"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"41926","type":"Circle"},{"attributes":{},"id":"41887","type":"BasicTicker"},{"attributes":{},"id":"41854","type":"ResetTool"},{"attributes":{"data":{"rug_x":{"__ndarray__":"fV36E1z/6j89DycBWWfXP73VlTJ7YsE/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz9P6PYIJnnCP0/o9ggmecI/T+j2CCZ5wj9P6PYIJnnCP0/o9ggmecI/T+j2CCZ5wj9P6PYIJnnCP0/o9ggmecI/txiR/XzQvD+3GJH9fNC8P7cYkf180Lw/txiR/XzQvD+3GJH9fNC8P7cYkf180Lw/Oqay45Jr6D86SHRMZcflP7HThSU1z+I/VdSaCTtd6D9Hvab2ZmSwP8UA5kQ6d4M/0GULqag1oz+aI/Yi4T7rP55DEK8H/NA/qgGd6qjX1D+VqnS/h2ThP/UnuP7VN+Q/TGXHJdeQ2z8=","dtype":"float64","order":"little","shape":[43]},"rug_y":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=","dtype":"float64","order":"little","shape":[43]}},"selected":{"id":"41963"},"selection_policy":{"id":"41962"}},"id":"41934","type":"ColumnDataSource"},{"attributes":{},"id":"41959","type":"AllLabels"},{"attributes":{},"id":"41895","type":"UndoTool"},{"attributes":{},"id":"41844","type":"LinearScale"},{"attributes":{"overlay":{"id":"41899"}},"id":"41894","type":"LassoSelectTool"},{"attributes":{},"id":"41847","type":"BasicTicker"},{"attributes":{},"id":"41893","type":"WheelZoomTool"},{"attributes":{"children":[{"id":"41969"},{"id":"41967"}]},"id":"41970","type":"Column"},{"attributes":{},"id":"41896","type":"SaveTool"},{"attributes":{"axis_label":"Quantile","coordinates":null,"formatter":{"id":"41944"},"group":null,"major_label_policy":{"id":"41945"},"ticker":{"id":"41847"}},"id":"41846","type":"LinearAxis"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"41925","type":"Circle"},{"attributes":{},"id":"41890","type":"ResetTool"},{"attributes":{},"id":"41891","type":"PanTool"},{"attributes":{"overlay":{"id":"41863"}},"id":"41858","type":"LassoSelectTool"},{"attributes":{"coordinates":null,"group":null,"line_alpha":0.5,"line_width":0.75,"location":0.15209716424958658},"id":"41931","type":"Span"},{"attributes":{"axis":{"id":"41846"},"coordinates":null,"group":null,"ticker":null},"id":"41849","type":"Grid"},{"attributes":{"coordinates":null,"data_source":{"id":"41924"},"glyph":{"id":"41925"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"41927"},"nonselection_glyph":{"id":"41926"},"view":{"id":"41929"}},"id":"41928","type":"GlyphRenderer"},{"attributes":{"axis_label":"MCSE for quantiles","coordinates":null,"formatter":{"id":"41941"},"group":null,"major_label_policy":{"id":"41942"},"ticker":{"id":"41851"}},"id":"41850","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#1f77b4"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"41927","type":"Circle"},{"attributes":{},"id":"41851","type":"BasicTicker"},{"attributes":{"overlay":{"id":"41898"}},"id":"41892","type":"BoxZoomTool"},{"attributes":{"axis":{"id":"41850"},"coordinates":null,"dimension":1,"group":null,"ticker":null},"id":"41853","type":"Grid"},{"attributes":{},"id":"41960","type":"UnionRenderers"},{"attributes":{},"id":"41874","type":"DataRange1d"},{"attributes":{},"id":"41961","type":"Selection"},{"attributes":{},"id":"41855","type":"PanTool"},{"attributes":{"overlay":{"id":"41862"}},"id":"41856","type":"BoxZoomTool"},{"attributes":{"axis":{"id":"41886"},"coordinates":null,"dimension":1,"group":null,"ticker":null},"id":"41889","type":"Grid"}],"root_ids":["41970"]},"title":"Bokeh Application","version":"2.4.2"}}';
                  const render_items = [{"docid":"160a32df-c9a5-4fbb-bc8b-4ede8e0d0208","root_ids":["41970"],"roots":{"41970":"256cd270-3567-4784-b64c-84d09c93e164"}}];
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