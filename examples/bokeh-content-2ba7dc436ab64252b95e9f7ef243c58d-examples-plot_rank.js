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
    
      
      
    
      const element = document.getElementById("c7b18ec3-7ac4-4ef7-be0b-606e970eea89");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'c7b18ec3-7ac4-4ef7-be0b-606e970eea89' but no matching script tag was found.")
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
                    
                  const docs_json = '{"8fac16bd-de0c-46b7-a31b-3bbc574a99bd":{"defs":[],"roots":{"references":[{"attributes":{"tools":[{"id":"48392"},{"id":"48393"},{"id":"48394"},{"id":"48395"},{"id":"48396"},{"id":"48397"},{"id":"48398"},{"id":"48399"}]},"id":"48402","type":"Toolbar"},{"attributes":{"source":{"id":"48477"}},"id":"48482","type":"CDSView"},{"attributes":{"coordinates":null,"data_source":{"id":"48498"},"glyph":{"id":"48499"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"48501"},"nonselection_glyph":{"id":"48500"},"view":{"id":"48503"}},"id":"48502","type":"GlyphRenderer"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"48434","type":"BoxAnnotation"},{"attributes":{"ticks":[0,1,2,3]},"id":"48505","type":"FixedTicker"},{"attributes":{"coordinates":null,"data_source":{"id":"48466"},"glyph":{"id":"48467"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"48469"},"nonselection_glyph":{"id":"48468"},"view":{"id":"48471"}},"id":"48470","type":"GlyphRenderer"},{"attributes":{},"id":"48392","type":"ResetTool"},{"attributes":{"data":{"top":{"__ndarray__":"ZWZmZmZm7j9OG+i0gU7XP2cDnTbQad8/WfKLJb9Y2j9Bpw102kDTP17JL5b8Yt0/PW2g0wY60T9U8oslv1jaP1ws+cWSX9w/WlVVVVVV2T9SVVVVVVXZPzTQaQOdNuA/ZgOdNtBp3z9m8oslv1jaP0h+seQXS9Y/SH6x5BdL1j84baDTBjrRPz+nDXTaQNM/SH6x5BdL1j8=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"48516"},"selection_policy":{"id":"48515"}},"id":"48445","type":"ColumnDataSource"},{"attributes":{"bottom":{"value":2},"fill_alpha":{"value":0.2},"fill_color":{"value":"#328c06"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48494","type":"VBar"},{"attributes":{},"id":"48393","type":"PanTool"},{"attributes":{},"id":"48521","type":"UnionRenderers"},{"attributes":{},"id":"48510","type":"BasicTickFormatter"},{"attributes":{},"id":"48419","type":"BasicTicker"},{"attributes":{},"id":"48519","type":"UnionRenderers"},{"attributes":{},"id":"48426","type":"ResetTool"},{"attributes":{},"id":"48376","type":"DataRange1d"},{"attributes":{"axis_label":"Rank (all chains)","coordinates":null,"formatter":{"id":"48530"},"group":null,"major_label_overrides":{"0":"0","1":"1","2":"2","3":"3"},"major_label_policy":{"id":"48531"},"ticker":{"id":"48419"}},"id":"48418","type":"LinearAxis"},{"attributes":{"axis":{"id":"48384"},"coordinates":null,"group":null,"ticker":null},"id":"48387","type":"Grid"},{"attributes":{"overlay":{"id":"48434"}},"id":"48428","type":"BoxZoomTool"},{"attributes":{},"id":"48427","type":"PanTool"},{"attributes":{},"id":"48382","type":"LinearScale"},{"attributes":{},"id":"48516","type":"Selection"},{"attributes":{"data":{"top":{"__ndarray__":"4Qd+4Af+BUDVSq3USq0EQBh6oRd6oQJAGHqhF3qhAkAUO7ETOzECQCu1Uiu10gRAd2IndmKnA0DFTuzETuwCQHIjN3IjNwNAJDdyIzfyA0Bu5EZu5MYCQB/4gR/4gQNAxU7sxE7sAkDTC73QCz0EQNALvdALPQRA0Au90As9BEB6oRd6oRcEQIIf+IEf+ARAhl7ohV5oBUA=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"48537"},"selection_policy":{"id":"48536"}},"id":"48491","type":"ColumnDataSource"},{"attributes":{"bottom":{"value":3},"fill_alpha":{"value":0.2},"fill_color":{"value":"#c10c90"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48501","type":"VBar"},{"attributes":{"coordinates":null,"group":null,"line_dash":[6],"location":2.480769230769231},"id":"48497","type":"Span"},{"attributes":{"bottom":{"value":3},"fill_color":{"value":"#c10c90"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48499","type":"VBar"},{"attributes":{"data":{"top":{"__ndarray__":"EPzAD/zACUAg+IEf+IELQMEP/MAPfApAdmIndmKnC0A4ciM3ciMOQIZe6IVeaA1Ah17ohV5oDUDYiZ3YiR0NQD7wAz/wAw9Ae6EXeqEXDEAbuZEbuRELQHZiJ3ZipwtAeqEXeqEXDEB0IzdyIzcLQBu5kRu5EQtAFDuxEzsxCkByIzdyIzcLQBu5kRu5EQtAxU7sxE7sCkA=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"48539"},"selection_policy":{"id":"48538"}},"id":"48498","type":"ColumnDataSource"},{"attributes":{"overlay":{"id":"48401"}},"id":"48396","type":"LassoSelectTool"},{"attributes":{"coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"48435","type":"PolyAnnotation"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48479","type":"VBar"},{"attributes":{"overlay":{"id":"48435"}},"id":"48430","type":"LassoSelectTool"},{"attributes":{"bottom":{"value":1},"fill_color":{"value":"#fa7c17"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48485","type":"VBar"},{"attributes":{},"id":"48395","type":"WheelZoomTool"},{"attributes":{"coordinates":null,"data_source":{"id":"48491"},"glyph":{"id":"48492"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"48494"},"nonselection_glyph":{"id":"48493"},"view":{"id":"48496"}},"id":"48495","type":"GlyphRenderer"},{"attributes":{"tools":[{"id":"48426"},{"id":"48427"},{"id":"48428"},{"id":"48429"},{"id":"48430"},{"id":"48431"},{"id":"48432"},{"id":"48433"}]},"id":"48436","type":"Toolbar"},{"attributes":{"coordinates":null,"data_source":{"id":"48477"},"glyph":{"id":"48478"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"48480"},"nonselection_glyph":{"id":"48479"},"view":{"id":"48482"}},"id":"48481","type":"GlyphRenderer"},{"attributes":{"coordinates":null,"group":null,"line_dash":[6],"location":0.48076923076923067},"id":"48483","type":"Span"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48446","type":"VBar"},{"attributes":{},"id":"48520","type":"Selection"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48478","type":"VBar"},{"attributes":{},"id":"48431","type":"UndoTool"},{"attributes":{"axis":{"id":"48418"},"coordinates":null,"group":null,"ticker":null},"id":"48421","type":"Grid"},{"attributes":{"source":{"id":"48484"}},"id":"48489","type":"CDSView"},{"attributes":{"bottom":{"value":2},"fill_color":{"value":"#328c06"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48492","type":"VBar"},{"attributes":{"coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"48401","type":"PolyAnnotation"},{"attributes":{"source":{"id":"48498"}},"id":"48503","type":"CDSView"},{"attributes":{},"id":"48432","type":"SaveTool"},{"attributes":{"bottom":{"value":1},"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48486","type":"VBar"},{"attributes":{},"id":"48535","type":"Selection"},{"attributes":{},"id":"48416","type":"LinearScale"},{"attributes":{},"id":"48517","type":"UnionRenderers"},{"attributes":{"toolbars":[{"id":"48402"},{"id":"48436"}],"tools":[{"id":"48392"},{"id":"48393"},{"id":"48394"},{"id":"48395"},{"id":"48396"},{"id":"48397"},{"id":"48398"},{"id":"48399"},{"id":"48426"},{"id":"48427"},{"id":"48428"},{"id":"48429"},{"id":"48430"},{"id":"48431"},{"id":"48432"},{"id":"48433"}]},"id":"48544","type":"ProxyToolbar"},{"attributes":{},"id":"48414","type":"LinearScale"},{"attributes":{"coordinates":null,"group":null,"text":"mu"},"id":"48507","type":"Title"},{"attributes":{"coordinates":null,"group":null,"line_dash":[6],"location":3.480769230769231},"id":"48504","type":"Span"},{"attributes":{"data":{"top":{"__ndarray__":"P/ADP/AD9z+SG7mRG7n2Py/0Qi/0QvU/eqEXeqEX9D9IbuRGbuT3P4If+IEf+PQ/MPRCL/RC9T+ZmZmZmZn3Pyd2Yid2YvQ/9kIv9EIv+D+4kRu5kRv7P7ATO7ETO/o/oBd6oRd6+D+mF3qhF3r4P1ZqpVZqpfk/9EIv9EIv+D9GbuRGbuT3P07sxE7sxPg/wA/8wA/8+z8=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"48535"},"selection_policy":{"id":"48534"}},"id":"48484","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"48433","type":"HoverTool"},{"attributes":{"coordinates":null,"group":null,"line_dash":[6],"location":1.4807692307692308},"id":"48490","type":"Span"},{"attributes":{"source":{"id":"48466"}},"id":"48471","type":"CDSView"},{"attributes":{"toolbar":{"id":"48544"},"toolbar_location":"above"},"id":"48545","type":"ToolbarBox"},{"attributes":{"axis_label":"Chain","coordinates":null,"formatter":{"id":"48527"},"group":null,"major_label_policy":{"id":"48528"},"ticker":{"id":"48505"}},"id":"48422","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#2a2eec"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48480","type":"VBar"},{"attributes":{"coordinates":null,"data_source":{"id":"48484"},"glyph":{"id":"48485"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"48487"},"nonselection_glyph":{"id":"48486"},"view":{"id":"48489"}},"id":"48488","type":"GlyphRenderer"},{"attributes":{"children":[{"id":"48545"},{"id":"48543"}]},"id":"48546","type":"Column"},{"attributes":{},"id":"48522","type":"Selection"},{"attributes":{"axis_label":"Chain","coordinates":null,"formatter":{"id":"48510"},"group":null,"major_label_policy":{"id":"48511"},"ticker":{"id":"48473"}},"id":"48388","type":"LinearAxis"},{"attributes":{},"id":"48534","type":"UnionRenderers"},{"attributes":{},"id":"48429","type":"WheelZoomTool"},{"attributes":{"bottom":{"value":2},"fill_alpha":{"value":0.1},"fill_color":{"value":"#328c06"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48493","type":"VBar"},{"attributes":{"source":{"id":"48491"}},"id":"48496","type":"CDSView"},{"attributes":{"coordinates":null,"group":null,"line_dash":[6],"location":3.4166666666666665},"id":"48472","type":"Span"},{"attributes":{},"id":"48397","type":"UndoTool"},{"attributes":{"axis":{"id":"48422"},"coordinates":null,"dimension":1,"group":null,"ticker":null},"id":"48425","type":"Grid"},{"attributes":{"callback":null},"id":"48399","type":"HoverTool"},{"attributes":{"below":[{"id":"48384"}],"center":[{"id":"48387"},{"id":"48391"},{"id":"48451"},{"id":"48458"},{"id":"48465"},{"id":"48472"}],"height":331,"left":[{"id":"48388"}],"output_backend":"webgl","renderers":[{"id":"48449"},{"id":"48456"},{"id":"48463"},{"id":"48470"}],"title":{"id":"48475"},"toolbar":{"id":"48402"},"toolbar_location":null,"width":496,"x_range":{"id":"48376"},"x_scale":{"id":"48380"},"y_range":{"id":"48378"},"y_scale":{"id":"48382"}},"id":"48375","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"48380","type":"LinearScale"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"48400","type":"BoxAnnotation"},{"attributes":{"ticks":[0,1,2,3]},"id":"48473","type":"FixedTicker"},{"attributes":{"data":{"top":{"__ndarray__":"6YVe6IVe4D9nZmZmZmbeP2dmZmZmZu4/WWqlVmql7D/eyI3cyI3YP7vQC73QC9U/uBM7sRM73T+vEzuxEzvdPyZ2Yid2Ytc/lxu5kRu52T8ZuZEbuZHfP5AbuZEbudk/QS/0Qi/04D8LwQ/8wA/cP5AbuZEbudk/q9RKrdRK4z9BL/RCL/TgPyZ2Yid2Ytc/USu1Uiu1wj8=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"48533"},"selection_policy":{"id":"48532"}},"id":"48477","type":"ColumnDataSource"},{"attributes":{"axis":{"id":"48388"},"coordinates":null,"dimension":1,"group":null,"ticker":null},"id":"48391","type":"Grid"},{"attributes":{"overlay":{"id":"48400"}},"id":"48394","type":"BoxZoomTool"},{"attributes":{"bottom":{"value":1},"fill_alpha":{"value":0.2},"fill_color":{"value":"#fa7c17"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48487","type":"VBar"},{"attributes":{},"id":"48532","type":"UnionRenderers"},{"attributes":{},"id":"48378","type":"DataRange1d"},{"attributes":{"bottom":{"value":3},"fill_alpha":{"value":0.1},"fill_color":{"value":"#c10c90"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48500","type":"VBar"},{"attributes":{},"id":"48398","type":"SaveTool"},{"attributes":{},"id":"48385","type":"BasicTicker"},{"attributes":{},"id":"48518","type":"Selection"},{"attributes":{"axis_label":"Rank (all chains)","coordinates":null,"formatter":{"id":"48513"},"group":null,"major_label_overrides":{"0":"0","1":"1","2":"2","3":"3"},"major_label_policy":{"id":"48514"},"ticker":{"id":"48385"}},"id":"48384","type":"LinearAxis"},{"attributes":{"coordinates":null,"group":null,"text":"tau"},"id":"48475","type":"Title"},{"attributes":{},"id":"48533","type":"Selection"},{"attributes":{"source":{"id":"48445"}},"id":"48450","type":"CDSView"},{"attributes":{"bottom":{"value":3},"fill_alpha":{"value":0.1},"fill_color":{"value":"#c10c90"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48468","type":"VBar"},{"attributes":{"coordinates":null,"data_source":{"id":"48445"},"glyph":{"id":"48446"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"48448"},"nonselection_glyph":{"id":"48447"},"view":{"id":"48450"}},"id":"48449","type":"GlyphRenderer"},{"attributes":{"data":{"top":{"__ndarray__":"MzMzMzOzDUC4HoXrUTgPQDCW/GLJrwxA0GkDnTbQDEBtoNMGOu0LQOi0gU4baApAzszMzMzMC0DrUbgehWsLQClcj8L1qApAqA102kAnCkBH4XoUrkcKQMaSXyz5xQlA6LSBThtoCkAqXI/C9agKQClcj8L1qApACtejcD0KC0AGOm2g0wYKQMkvlvxiyQpAaQOdNtDpCkA=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"48522"},"selection_policy":{"id":"48521"}},"id":"48466","type":"ColumnDataSource"},{"attributes":{},"id":"48536","type":"UnionRenderers"},{"attributes":{"bottom":{"value":2},"fill_color":{"value":"#328c06"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48460","type":"VBar"},{"attributes":{},"id":"48528","type":"AllLabels"},{"attributes":{"coordinates":null,"group":null,"line_dash":[6],"location":1.4166666666666665},"id":"48458","type":"Span"},{"attributes":{"coordinates":null,"data_source":{"id":"48452"},"glyph":{"id":"48453"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"48455"},"nonselection_glyph":{"id":"48454"},"view":{"id":"48457"}},"id":"48456","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#2a2eec"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48448","type":"VBar"},{"attributes":{},"id":"48531","type":"AllLabels"},{"attributes":{"source":{"id":"48452"}},"id":"48457","type":"CDSView"},{"attributes":{"children":[[{"id":"48375"},0,0],[{"id":"48411"},0,1]]},"id":"48543","type":"GridBox"},{"attributes":{"source":{"id":"48459"}},"id":"48464","type":"CDSView"},{"attributes":{"bottom":{"value":3},"fill_alpha":{"value":0.2},"fill_color":{"value":"#c10c90"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48469","type":"VBar"},{"attributes":{},"id":"48513","type":"BasicTickFormatter"},{"attributes":{},"id":"48537","type":"Selection"},{"attributes":{"bottom":{"value":1},"fill_alpha":{"value":0.2},"fill_color":{"value":"#fa7c17"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48455","type":"VBar"},{"attributes":{"coordinates":null,"data_source":{"id":"48459"},"glyph":{"id":"48460"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"48462"},"nonselection_glyph":{"id":"48461"},"view":{"id":"48464"}},"id":"48463","type":"GlyphRenderer"},{"attributes":{},"id":"48527","type":"BasicTickFormatter"},{"attributes":{"bottom":{"value":1},"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48454","type":"VBar"},{"attributes":{"coordinates":null,"group":null,"line_dash":[6],"location":2.4166666666666665},"id":"48465","type":"Span"},{"attributes":{"bottom":{"value":2},"fill_alpha":{"value":0.2},"fill_color":{"value":"#328c06"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48462","type":"VBar"},{"attributes":{"below":[{"id":"48418"}],"center":[{"id":"48421"},{"id":"48425"},{"id":"48483"},{"id":"48490"},{"id":"48497"},{"id":"48504"}],"height":331,"left":[{"id":"48422"}],"output_backend":"webgl","renderers":[{"id":"48481"},{"id":"48488"},{"id":"48495"},{"id":"48502"}],"title":{"id":"48507"},"toolbar":{"id":"48436"},"toolbar_location":null,"width":496,"x_range":{"id":"48376"},"x_scale":{"id":"48414"},"y_range":{"id":"48378"},"y_scale":{"id":"48416"}},"id":"48411","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"48515","type":"UnionRenderers"},{"attributes":{"bottom":{"value":3},"fill_color":{"value":"#c10c90"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48467","type":"VBar"},{"attributes":{"coordinates":null,"group":null,"line_dash":[6],"location":0.41666666666666663},"id":"48451","type":"Span"},{"attributes":{"bottom":{"value":2},"fill_alpha":{"value":0.1},"fill_color":{"value":"#328c06"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48461","type":"VBar"},{"attributes":{"data":{"top":{"__ndarray__":"AAAAAAAAAECkcD0K1yMBQCa/WPKLpQFA6LSBThtoAkBqA5020OkCQCz5xZJfrANA8O7u7u5uBEDrUbgehWsDQOtRuB6FawNAC9ejcD0KA0BKfrHkF0sDQA102kCnDQRAqqqqqqoqA0BQG+i0gU4EQC+W/GLJrwRAThvotIFOBECuR+F6FC4EQE4b6LSBTgRAcD0K16PwBEA=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"48520"},"selection_policy":{"id":"48519"}},"id":"48459","type":"ColumnDataSource"},{"attributes":{"data":{"top":{"__ndarray__":"AAAAAAAA8D8OdNpApw30PxSuR+F6FPY/1AY6baDT9T8c6LSBThv4PxdLfrHkF/c/1QY6baDT9T+V/GLJL5b2P1jyiyW/WPc/43oUrkfh+T8ehetRuB75PxdLfrHkF/c/mJmZmZmZ9z8YrkfhehT2P1RVVVVVVfY/lfxiyS+W9j/gehSuR+H5P5iZmZmZmfc/kl8s+cWS9T8=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"48518"},"selection_policy":{"id":"48517"}},"id":"48452","type":"ColumnDataSource"},{"attributes":{},"id":"48539","type":"Selection"},{"attributes":{},"id":"48538","type":"UnionRenderers"},{"attributes":{"bottom":{"value":1},"fill_color":{"value":"#fa7c17"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48453","type":"VBar"},{"attributes":{},"id":"48530","type":"BasicTickFormatter"},{"attributes":{},"id":"48514","type":"AllLabels"},{"attributes":{},"id":"48511","type":"AllLabels"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48447","type":"VBar"}],"root_ids":["48546"]},"title":"Bokeh Application","version":"2.4.2"}}';
                  const render_items = [{"docid":"8fac16bd-de0c-46b7-a31b-3bbc574a99bd","root_ids":["48546"],"roots":{"48546":"c7b18ec3-7ac4-4ef7-be0b-606e970eea89"}}];
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