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
    
      
      
    
      const element = document.getElementById("7ad872df-49d9-4bd8-a807-a162c6b65aa9");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '7ad872df-49d9-4bd8-a807-a162c6b65aa9' but no matching script tag was found.")
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
                    
                  const docs_json = '{"6bea3d46-d697-4a96-ac00-68088f05d95e":{"defs":[],"roots":{"references":[{"attributes":{"coordinates":null,"data_source":{"id":"23936"},"glyph":{"id":"23937"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"23939"},"nonselection_glyph":{"id":"23938"},"view":{"id":"23941"}},"id":"23940","type":"GlyphRenderer"},{"attributes":{},"id":"23897","type":"DataRange1d"},{"attributes":{},"id":"23960","type":"UnionRenderers"},{"attributes":{"coordinates":null,"formatter":{"id":"23951"},"group":null,"major_label_policy":{"id":"23952"},"ticker":{"id":"23908"}},"id":"23907","type":"LinearAxis"},{"attributes":{"fill_color":"#1764ab","line_alpha":0.25,"line_color":"#1764ab","x":{"field":"x"},"y":{"field":"y"}},"id":"23943","type":"Patch"},{"attributes":{},"id":"23961","type":"Selection"},{"attributes":{"fill_color":"#4a98c9","line_alpha":0.25,"line_color":"#4a98c9","x":{"field":"x"},"y":{"field":"y"}},"id":"23937","type":"Patch"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"23919","type":"BoxAnnotation"},{"attributes":{},"id":"23901","type":"LinearScale"},{"attributes":{"fill_alpha":0.2,"fill_color":"#1764ab","hatch_alpha":0.2,"line_alpha":0.2,"line_color":"#1764ab","x":{"field":"x"},"y":{"field":"y"}},"id":"23945","type":"Patch"},{"attributes":{},"id":"23911","type":"ResetTool"},{"attributes":{"toolbar":{"id":"23966"},"toolbar_location":"above"},"id":"23967","type":"ToolbarBox"},{"attributes":{},"id":"23952","type":"AllLabels"},{"attributes":{"fill_alpha":0.1,"fill_color":"#1764ab","hatch_alpha":0.1,"line_alpha":0.1,"line_color":"#1764ab","x":{"field":"x"},"y":{"field":"y"}},"id":"23944","type":"Patch"},{"attributes":{},"id":"23904","type":"BasicTicker"},{"attributes":{},"id":"23954","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"23903"}],"center":[{"id":"23906"},{"id":"23910"}],"height":500,"left":[{"id":"23907"}],"output_backend":"webgl","renderers":[{"id":"23934"},{"id":"23940"},{"id":"23946"}],"title":{"id":"23948"},"toolbar":{"id":"23921"},"toolbar_location":null,"width":500,"x_range":{"id":"23895"},"x_scale":{"id":"23899"},"y_range":{"id":"23897"},"y_scale":{"id":"23901"}},"id":"23894","subtype":"Figure","type":"Plot"},{"attributes":{"axis":{"id":"23903"},"coordinates":null,"grid_line_color":null,"group":null,"ticker":null},"id":"23906","type":"Grid"},{"attributes":{"fill_alpha":0.1,"fill_color":"#4a98c9","hatch_alpha":0.1,"line_alpha":0.1,"line_color":"#4a98c9","x":{"field":"x"},"y":{"field":"y"}},"id":"23938","type":"Patch"},{"attributes":{},"id":"23957","type":"Selection"},{"attributes":{"children":[{"id":"23967"},{"id":"23965"}]},"id":"23968","type":"Column"},{"attributes":{"coordinates":null,"group":null},"id":"23948","type":"Title"},{"attributes":{"coordinates":null,"formatter":{"id":"23954"},"group":null,"major_label_policy":{"id":"23955"},"ticker":{"id":"23904"}},"id":"23903","type":"LinearAxis"},{"attributes":{"fill_alpha":0.2,"fill_color":"#4a98c9","hatch_alpha":0.2,"line_alpha":0.2,"line_color":"#4a98c9","x":{"field":"x"},"y":{"field":"y"}},"id":"23939","type":"Patch"},{"attributes":{"data":{"x":{"__ndarray__":"QJZQ4c4k8D/GUTGTma/vP1Wo60qGY+8/6rRgPKFh7z82XrW0gq7vP5r4DU+oGfA/0m8tAlVk8D8NSJNmbWjwP76e87E53PA/uZG7GKR78T+8OyMjyaHxP69DMbo4M/I/+zYJoQnc8j+mBxlEPd/yP4RbiN2naPM/NuEsMh8L9D+P0w5lsRz0PwSokFEA2vQ/fJ8EhiVa9T8WXWy9W971P2Rr+qaZl/Y/rhseyhP59j9QN/DHDdX3P4n/TPNkI/g/OAPm6IES+T9gXnL51Wb5PyTP2wn2T/o/JIKgnT/L+j8Qm9Eqao37PzFyxCWlgPw/+GbHS97K/D/kMr1sUgj+P9ZspfhQkP4/zP6yjcZF/z9cZVRXnUEAQJzdUucznwBAUEvPZ1fgAEBGMUp4EX8BQDwXxYjLHQJAMP0/mYW8AkAm47qpP1sDQBrJNbr5+QNAEK+wyrOYBEAElSvbbTcFQPp6pusn1gVAH1ilgWBhBkDwYCH84XQGQORGnAycEwdAPd0niwoWB0BFKh8up30HQNosFx1WsgdAnlPUffu+B0AUgZDYYt0HQKBuvOTX7QdAzMG1nVb2B0BFn/bmmf0HQMJyONt09QdA3l73jarTB0DaLBcdVrIHQG2r+oiXpwdAoJ/C8Mx7B0DUxOg4iEsHQORGnAycEwdAGQxbW8/IBkDwYCH84XQGQLkt7qBAcQZAPBMFK6cIBkD6eqbrJ9YFQIaeNwSFmAVABJUr2203BUCAgLVsNh8FQBCvsMqzmARAR0v+DlqWBEAkPi2Aj/4DQBvJNbr5+QNARtMmqT9iA0An47qpP1sDQDD9P5mFvAJA0ssVy82xAkA8F8WIyx0CQEofCOwA1gFARjFKeBF/AUBQS89nV+AAQLGb2VNa3gBAXGVUV51BAEDBAQLPclD/P8z+so3GRf8/5DK9bFII/j/4ZsdL3sr8PxCb0Spqjfs/ggerycQx+z8kz9sJ9k/6PzgD5uiBEvk/fKnvZNCS+D9QN/DHDdX3P2Rr+qaZl/Y/fJ8EhiVa9T+Q0w5lsRz0P7yGbd4wq/M/pgcZRD3f8j8iCpsfnEjyP7w7IyPJofE/iqDL7XN58T+sbyefnrnwP9JvLQJVZPA/QJZQ4c4k8D8=","dtype":"float64","order":"little","shape":[106]},"y":{"__ndarray__":"4k62Krmf9z9+Q8Dvsq74Pxg4yrSsvfk/tCzUeabM+j9QId4+oNv7P+wV6AOa6vw/WlGvj2jr/T+ICvLIk/n9PyT/+42NCP8/4PmCqcMLAED+7hMjbScAQC70B4xAkwBAeu6Mbr0aAUCagfZrth0BQMjoEVE6ogFAF+OWM7cpAkBQq8fWaTUCQGTdGxY0sQJAmkFxZE70AkCy16D4sDgDQHC4pb1lkgNAANIl2y3AA0AqWGgQlSUEQE7Mqr2qRwRANRSrYnytBECcxi+gJ88EQOEM6om4KgVA6sC0gqRWBUAI/G1+fJgFQDa7OWUh3gVAEpg+1KryBUDQUrVFUkQGQIS1vkeeZQZArjoqH0WSBkB/WaFTIdIGQNKvQyob7QZAesKCl+QAB0CghFg6BScHQKO+4sQ4SgdAgzbYRohiB0DLqJW2y2EHQPdwDc55UgdApHoBKKVBB0CWLUCcoi4HQPh7DDTwFgdA0q9DKhvtBkDDZSU3d+YGQDfr5pdIaAZAhLW+R55lBkA2uzllId4FQPMu1BWCdAVA68C0gqRWBUCcxi+gJ88EQE7Mqr2qRwRAANIl2y3AA0Cy16D4sDgDQGTdGxY0sQJAFuOWM7cpAkBFr0Zb2sQBQMjoEVE6ogFAeu6Mbr0aAUAu9AeMQJMAQOD5gqnDCwBAJP/7jY0I/z/YNUQvVgT+P4gK8siT+f0/7BXoA5rq/D9oQJ+Ux3L8P1Ah3j6g2/s/dvzQGrgB+z+0LNR5psz6P0yb7tUJwvk/GDjKtKy9+T9+Q8Dvsq74P4qcv/SQpvg/4k62Krmf9z/G9q5ZopP3P/bynstBnvY/RlqsZb+Q9j89HCZ6ZtL1P6xloqDFgfU/Sk53NKUg9T9jxMFUzHT0PxBxmNvLcvQ/RpTOFGXd8z90fI4W0mPzP9sDOaWjX/M/eIoFJI/t8j/kZua+bI/yPySGRZfaV/I/2IeEUdhU8j89PlWS7kzyP5g/0GmwUPI/2IeEUdhU8j8E21ULLFvyP4mri160efI/W639g6i68j9JK11e5CjzP3R8jhbSY/M/n0VEUAzh8z8QcZjby3L0PxtkCIJ6SvU/rGWioMWB9T9GWqxlv5D2P1JZhfK7Jfc/4k62Krmf9z8=","dtype":"float64","order":"little","shape":[106]}},"selected":{"id":"23961"},"selection_policy":{"id":"23960"}},"id":"23942","type":"ColumnDataSource"},{"attributes":{"axis":{"id":"23907"},"coordinates":null,"dimension":1,"grid_line_color":null,"group":null,"ticker":null},"id":"23910","type":"Grid"},{"attributes":{},"id":"23951","type":"BasicTickFormatter"},{"attributes":{},"id":"23958","type":"UnionRenderers"},{"attributes":{"overlay":{"id":"23920"}},"id":"23915","type":"LassoSelectTool"},{"attributes":{},"id":"23899","type":"LinearScale"},{"attributes":{"source":{"id":"23942"}},"id":"23947","type":"CDSView"},{"attributes":{"overlay":{"id":"23919"}},"id":"23913","type":"BoxZoomTool"},{"attributes":{},"id":"23908","type":"BasicTicker"},{"attributes":{"tools":[{"id":"23911"},{"id":"23912"},{"id":"23913"},{"id":"23914"},{"id":"23915"},{"id":"23916"},{"id":"23917"},{"id":"23918"}]},"id":"23921","type":"Toolbar"},{"attributes":{"data":{"x":{"__ndarray__":"xHp2OAJccT88TgyCZZ+Nv2FiNIsC8KC/vBk2O8ISor/4eS9EmDeZvyJrDvedYoq/yFWIwY8CWb8AO4Vs1VuRPx4VsLlN2pE/eFs61NqWoz+zFuO3XEWtP21YQVemBrI/huKXfDfJtT9gDX5qNy64P3FTsIqK77o/7oj2r+1dwD+PJR+sz/TDPwBm7by8AsY/FQX19T/dxz/RNzCDpH3LP4fwGetie88/UMWbxF3uzz9Y1pGZZvTRPwi+dj6ffdQ/UBIlZv/s1D+Wf9XqKTPXP/hB/OnP4tk/S5WcVFsG2j+kpkmKiQDdP6hx022g2N4/w0rmV7JB4D+oUNV4OOfhP2sgo4HaT+I/fOjAuiBi5D8oF9J/g4HkP2tpMpE3muY/UYCs/Ajd5j+GVmpAFY3oPyQYmD7xV+k/v9DxgYd46j/4r4OA2dLrPxgqvOoMcew/0EdvwsFN7j9gWn0477TuP9JvLQJVZPA/uC9VPCis8D+8OyMjyaHxP0iowutLF/I/pgcZRD3f8j9+nWpRY4/zP5DTDmWxHPQ/vQYBkUsS9T98nwSGJVr1PyijMvExi/Y/ZGv6ppmX9j9QN/DHDdX3P6dOqtoIBvg/OAPm6IES+T/4jDH17bj5PyTP2wn2T/o/EJvRKmqN+z/Obu8EVbj7P/hmx0veyvw/YHJSrBsH/j/kMr1sUgj+P8z+so3GRf8/XGVUV51BAECNP043EnUAQFBLz2dX4ABARjFKeBF/AUBhkLL3zggCQDwXxYjLHQJAMP0/mYW8AkAm47qpP1sDQI2+k8WbwgNAGsk1uvn5A0AQr7DKs5gEQASVK9ttNwVA+nqm6yfWBUDwYCH84XQGQORGnAycEwdA2iwXHVayB0DOEpItEFEIQMT4DD7K7whAut6HToSOCUAcH7G5L8YJQK7EAl8+LQpApKp9b/jLCkCYkPh/smoLQDZvuNw5qQtAjnZzkGwJDEB9/yIGBaQMQIJc7qAmqAxAeUJpseBGDUBct5HtXm0NQG4o5MGa5Q1A9Wf88SAGDkDYrWGeEHYOQGIOX9JUhA5AgiCsrOrKDkCPIPxpYA4PQFj02eIOIw9AXuIxlBBqD0DiHHcltMAPQEzaVPPIwQ9ArgoJHezvD0BVNQRqrAQQQOjMOYFxDhBA6AyV5AUVEEB4AvbBUhYQQJ2q3MSVFBBA7ZvflT4PEEDH7l0XDgQQQABIvFOU6w9A7CUHX63LD0BM2lTzyMEPQLAIlb5brg9ABey5/FuRD0BjsCSqOW0PQEK0EpJOPA9AV/TZ4g4jD0D0p6FqnwIPQDZq//lPxQ5AkwtKKIOJDkBiDl/SVIQOQEqL1U6iTw5AIshy228KDkBuKOTBmuUNQMw8d292vQ1AOWjbIkJvDUB4Qmmx4EYNQD5bZlwCGg1A8hTN+5u6DECCXO6gJqgMQKILTA4tWAxAjnZzkGwJDED3XDbhmuYLQJiQ+H+yagtAXV7rQadlC0C6q1kShucKQKSqfW/4ywpAplx4RBl3CkCuxAJfPi0KQHKGzG2yBgpAut6HToSOCUBAg9mQ0IgJQFObenKt/ghAxPgMPsrvCEAzCBqBymsIQM4Ski0QUQhAX/+fVePJB0DbLBcdVrIHQPPEqoOqFwdA5EacDJwTB0DwYCH84XQGQB9UoglvZQZA+nqm6yfWBUDo5e1DorcFQASVK9ttNwVAJ6GjTXkABUAQr7DKs5gEQK6oE6k4NQRAGsk1uvn5A0Am47qpP1sDQCq8dj7PTwNAMP0/mYW8AkBAaHN2IFICQDwXxYjLHQJARjFKeBF/AUDTuXPCjRgBQFBLz2dX4ABAXGVUV51BAECL+HoUdoD/P8z+so3GRf8/5DK9bFII/j9oNAMuDgr9P/hmx0veyvw/EJvRKmqN+z8kz9sJ9k/6PytuSD8wKPk/OAPm6IES+T9QN/DHDdX3P2Rr+qaZl/Y/fJ8EhiVa9T+Q0w5lsRz0P6YHGUQ93/I/vDsjI8mh8T/Sby0CVWTwP9BHb8LBTe4/+K+DgNnS6z8kGJg+8VfpP1CArPwI3eY//wtQcbdR5j986MC6IGLkP6hQ1Xg45+E/Tzf8IRSb4D+ocdNtoNjeP89W4Gk7L9o/+EH86c/i2T9QEiVm/+zUP59rssWNrNI/UMWbxF3uzz8rMsakJ8LMP1ggf9+/4MY/AGbtvLwCxj8ur0HPbP69P2ANfmo3Lrg/2WQH7pfRsj9j6bx0QOaoPzYNMMpaLJ4/ADuFbNVbkT/EenY4AlxxP9JvLQJVZPA/rG8nn5658D+KoMvtc3nxP7w7IyPJofE/IgqbH5xI8j+mBxlEPd/yP7yGbd4wq/M/kNMOZbEc9D98nwSGJVr1P2Rr+qaZl/Y/UDfwxw3V9z98qe9k0JL4PzgD5uiBEvk/JM/bCfZP+j+CB6vJxDH7PxCb0Spqjfs/+GbHS97K/D/kMr1sUgj+P8z+so3GRf8/wAECz3JQ/z9cZVRXnUEAQLGb2VNa3gBAUEvPZ1fgAEBGMUp4EX8BQEofCOwA1gFAPBfFiMsdAkDSyxXLzbECQDH9P5mFvAJAJuO6qT9bA0BG0yapP2IDQBrJNbr5+QNAJD4tgI/+A0BHS/4OWpYEQBCvsMqzmARAgIC1bDYfBUAElSvbbTcFQIaeNwSFmAVA+nqm6yfWBUA9EwUrpwgGQLgt7qBAcQZA8GAh/OF0BkAZDFtbz8gGQORGnAycEwdA1MToOIhLB0Chn8LwzHsHQG2r+oiXpwdA2iwXHVayB0DeXveNqtMHQMJyONt09QdARZ/25pn9B0DMwbWdVvYHQKBuvOTX7QdAFIGQ2GLdB0CeU9R9+74HQNosFx1WsgdARSofLqd9B0A93SeLChYHQORGnAycEwdA8GAh/OF0BkAfWKWBYGEGQPp6pusn1gVABJUr2203BUAQr7DKs5gEQBrJNbr5+QNAJuO6qT9bA0Aw/T+ZhbwCQDwXxYjLHQJARjFKeBF/AUBQS89nV+AAQJzdUucznwBAXGVUV51BAEDM/rKNxkX/P9dspfhQkP4/5DK9bFII/j/4ZsdL3sr8PzFyxCWlgPw/EJvRKmqN+z8kgqCdP8v6PyTP2wn2T/o/YF5y+dVm+T84A+bogRL5P4r/TPNkI/g/UDfwxw3V9z+uGx7KE/n2P2Rr+qaZl/Y/Fl1svVve9T98nwSGJVr1PwSokFEA2vQ/kNMOZbEc9D814SwyHwv0P4RbiN2naPM/pgcZRD3f8j/7NgmhCdzyP7BDMbo4M/I/vDsjI8mh8T+4kbsYpHvxP76e87E53PA/DUiTZm1o8D/Sby0CVWTwP5r4DU+oGfA/Nl61tIKu7z/qtGA8oWHvP1ao60qGY+8/xlExk5mv7z9AllDhziTwP9JvLQJVZPA/","dtype":"float64","order":"little","shape":[318]},"y":{"__ndarray__":"op5wx+Q28D88k3qM3kXxP9iHhFHYVPI/dHyOFtJj8z8QcZjby3L0P6xloqDFgfU/RlqsZb+Q9j+NWlh7UJf3P+JOtiq5n/c/fkPA77Ku+D8YOMq0rL35P7Qs1HmmzPo/UCHePqDb+z+q9UrdKEz8P+wV6AOa6vw/iAryyJP5/T8k//uNjQj/P6QMsCUDk/8/4PmCqcMLAEAu9AeMQJMAQHrujG69GgFA0R2FTVQoAUDI6BFROqIBQBbjljO3KQJAZyP0D5c+AkBk3RsWNLECQK2XrA7TMQNAsteg+LA4A0AA0iXbLcADQODNIux3CARATsyqvapHBEC1tkQRfbMEQJzGL6AnzwRAYI2eQHROBUDqwLSCpFYFQDe7OWUh3gVAuHZtv6zvBUCEtb5HnmUGQEYSGs3xngZA0q9DKhvtBkAnbWEyC0wHQCCqyAyYdAdA7F/VDjHlB0BupE3vFPwHQCxnJdhuaAhAvJ7S0ZGDCED40wb1LeIIQAqZV7QOCwlAwegEYE5WCUBYk9yWi5IJQItPiycDxglApY1heQgaCkB5fMteozMKQPKH5luFoQpAyfZsYf6lCkBIvhlaPRgLQECCaz4CKQtACLoihVN/C0COfPAgf7ALQDBPo/I03AtAZtDamBMuDEDcdnUD/DcMQKuIi7CHewxAKnH65Xi/DEDK6TBlvb8MQDFfCcJDAQ1A7PUV1Wo2DUB4a3/I9UYNQITS5tTLaw1AsOSXbVehDUDHZQSrcs4NQKFMGqRJ1g1AmE1TirMODkCxDsFlRj8OQBRgiY3vVQ5AA7pdV11jDkCcs4sz53kOQGL4miQujw5A6gUfvyWnDkDkUMi7BbsOQGuUZ14exg5A0TWCwGPLDkCc2iyC0MoOQE4R479Psg5A8SzCZWdxDkATYImN71UOQLqUjKrJMQ5A9aAZuwoGDkCaQXqAdeINQMZlBKtyzg1A7vh0vueoDUB4a3/I9UYNQP3C6r1HRA1AgIFa2OvaDEAqcfrleL8MQL9j0TSnWQxA3HZ1A/w3DECOfPAgf7ALQHAX+9usnAtAQIJrPgIpC0Dyh+ZbhaEKQM7uQqXkfwpApo1heQgaCkBYk9yWi5IJQKCmgc9zjwlACplXtA4LCUC8ntLRkYMIQG6kTe8U/AdAIKrIDJh0B0DSr0MqG+0GQIS1vkeeZQZANrs5ZSHeBUDqwLSCpFYFQJzGL6AnzwRATcyqvapHBEBMoX2D+hwEQADSJdstwANAsteg+LA4A0Bk3RsWNLECQBbjljO3KQJAzaASXBLxAUDI6BFROqIBQHrujG69GgFALfQHjECTAEBeEjMgfYcAQOD5gqnDCwBAJP/7jY0I/z9+iss7PYr+P4gK8siT+f0/7BXoA5rq/D+ouGigcXH8P1Ah3j6g2/s/tCzUeabM+j+jw2VpPp36Pxg4yrSsvfk/zr/aCCIC+T9+Q8Dvsq74P3QoMhklqvc/4k62Krmf9z9GWqxlv5D2P//yNSvCTvY/rGWioMWB9T+dkiJMPM/0PxBxmNvLcvQ/cudgXZ5v8z90fI4W0mPzP9iHhFHYVPI/0l/mKBg58j88k3qM3kXxP7YdUatEGfE/op5wx+Q28D9SMbPisBLwPwtUzQTWT+4//lyJVzZD7j/x6P2+yWDsP9RquXriMew/628PlUhu6j+cgaXw7hPqP1HyrYmnkOg/aJiRZvv15z9Bez3dZNfmPzCvfdwH2OU/nwKAIXFF5T8H9/7MpNTjP/jFaVIUuuM/YWPjA91v4j/A3FXIIJzhP4awQ37WLuE/uoxb/wgT4D8Q54N8WvzeP5iQKphDPt4/hGonFtpX3D+oFFxoc8DaP82j0v8tXto/qmNjgxYa2D84QjRUjITWP0d76BasHtY/fi59bQ9l1D+7F5OflBvTP8hvDEClSNI//VnZQG040j/O8hD5CInRP+QQlnUDFNE/RcQSciG40D/OsaHcGSXQPxzOEtZytM4/rFDTPTpZzT871W1sHcDMP9raMqBnY80/Svo7gRh/zz9lMU/Z1ObQP87tPC0l/tE/yG8MQKVI0j9be4FCT1rTP4SjgDPnJtU/OEI0VIyE1j/cd0PQMcvXP6gUXGhzwNo/YHjX/g/y2j88V38djqHdPxHng3xa/N4/D8SJMfaL4D/A3FXIIJzhP/jFaVIUuuM/Uqxejqz84z8wr33cB9jlPzUcH2hL3+Y/aJiRZvv15z+cgaXw7hPqP9RquXriMew/DFTNBNZP7j+innDH5DbwP1JZhfK7Jfc/RlqsZb+Q9j+sZaKgxYH1PxtkCIJ6SvU/EHGY28ty9D+fRURQDOHzP3R8jhbSY/M/SitdXuQo8z9brf2DqLryP4mri160efI/BNtVCyxb8j/Yh4RR2FTyP5g/0GmwUPI/PT5Vku5M8j/Yh4RR2FTyPySGRZfaV/I/5GbmvmyP8j94igUkj+3yP9sDOaWjX/M/dHyOFtJj8z9GlM4UZd3zPxBxmNvLcvQ/Y8TBVMx09D9JTnc0pSD1P6xloqDFgfU/PRwmembS9T9GWqxlv5D2P/bynstBnvY/xvauWaKT9z/iTrYquZ/3P4qcv/SQpvg/fkPA77Ku+D8YOMq0rL35P0ub7tUJwvk/syzUeabM+j92/NAauAH7P1Ah3j6g2/s/aUCflMdy/D/sFegDmur8P4gK8siT+f0/2DVEL1YE/j8k//uNjQj/P+D5gqnDCwBALvQHjECTAEB67oxuvRoBQMfoEVE6ogFARq9GW9rEAUAW45YztykCQGTdGxY0sQJAsteg+LA4A0AA0iXbLcADQE7Mqr2qRwRAnMYvoCfPBEDqwLSCpFYFQPMu1BWCdAVANrs5ZSHeBUCEtb5HnmUGQDbr5pdIaAZAw2UlN3fmBkDTr0MqG+0GQPh7DDTwFgdAli1AnKIuB0CkegEopUEHQPdwDc55UgdAy6iVtsthB0CENthGiGIHQKK+4sQ4SgdAoIRYOgUnB0B6woKX5AAHQNKvQyob7QZAgFmhUyHSBkCuOiofRZIGQIS1vkeeZQZA0VK1RVJEBkASmD7UqvIFQDa7OWUh3gVACPxtfnyYBUDqwLSCpFYFQOEM6om4KgVAnMYvoCfPBEA1FKtifK0EQE7Mqr2qRwRAKlhoEJUlBEAA0iXbLcADQHG4pb1lkgNAsteg+LA4A0CaQXFkTvQCQGTdGxY0sQJAUKvH1mk1AkAW45YztykCQMjoEVE6ogFAmoH2a7YdAUB67oxuvRoBQC70B4xAkwBA/e4TI20nAEDg+YKpwwsAQCT/+42NCP8/iAryyJP5/T9aUa+PaOv9P+wV6AOa6vw/UCHePqDb+z+0LNR5psz6Pxg4yrSsvfk/fkPA77Ku+D/iTrYquZ/3P1JZhfK7Jfc/","dtype":"float64","order":"little","shape":[318]}},"selected":{"id":"23959"},"selection_policy":{"id":"23958"}},"id":"23936","type":"ColumnDataSource"},{"attributes":{},"id":"23959","type":"Selection"},{"attributes":{"fill_alpha":0.2,"fill_color":"#94c4df","hatch_alpha":0.2,"line_alpha":0.2,"line_color":"#94c4df","x":{"field":"x"},"y":{"field":"y"}},"id":"23933","type":"Patch"},{"attributes":{},"id":"23895","type":"DataRange1d"},{"attributes":{"toolbars":[{"id":"23921"}],"tools":[{"id":"23911"},{"id":"23912"},{"id":"23913"},{"id":"23914"},{"id":"23915"},{"id":"23916"},{"id":"23917"},{"id":"23918"}]},"id":"23966","type":"ProxyToolbar"},{"attributes":{"source":{"id":"23936"}},"id":"23941","type":"CDSView"},{"attributes":{},"id":"23917","type":"SaveTool"},{"attributes":{"coordinates":null,"data_source":{"id":"23942"},"glyph":{"id":"23943"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"23945"},"nonselection_glyph":{"id":"23944"},"view":{"id":"23947"}},"id":"23946","type":"GlyphRenderer"},{"attributes":{"coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"23920","type":"PolyAnnotation"},{"attributes":{"callback":null},"id":"23918","type":"HoverTool"},{"attributes":{"data":{"x":{"__ndarray__":"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","dtype":"float64","order":"little","shape":[534]},"y":{"__ndarray__":"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","dtype":"float64","order":"little","shape":[534]}},"selected":{"id":"23957"},"selection_policy":{"id":"23956"}},"id":"23930","type":"ColumnDataSource"},{"attributes":{"fill_color":"#94c4df","line_alpha":0.25,"line_color":"#94c4df","x":{"field":"x"},"y":{"field":"y"}},"id":"23931","type":"Patch"},{"attributes":{"fill_alpha":0.1,"fill_color":"#94c4df","hatch_alpha":0.1,"line_alpha":0.1,"line_color":"#94c4df","x":{"field":"x"},"y":{"field":"y"}},"id":"23932","type":"Patch"},{"attributes":{},"id":"23956","type":"UnionRenderers"},{"attributes":{},"id":"23955","type":"AllLabels"},{"attributes":{},"id":"23912","type":"PanTool"},{"attributes":{"coordinates":null,"data_source":{"id":"23930"},"glyph":{"id":"23931"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"23933"},"nonselection_glyph":{"id":"23932"},"view":{"id":"23935"}},"id":"23934","type":"GlyphRenderer"},{"attributes":{},"id":"23914","type":"WheelZoomTool"},{"attributes":{},"id":"23916","type":"UndoTool"},{"attributes":{"children":[[{"id":"23894"},0,0]]},"id":"23965","type":"GridBox"},{"attributes":{"source":{"id":"23930"}},"id":"23935","type":"CDSView"}],"root_ids":["23968"]},"title":"Bokeh Application","version":"2.4.2"}}';
                  const render_items = [{"docid":"6bea3d46-d697-4a96-ac00-68088f05d95e","root_ids":["23968"],"roots":{"23968":"7ad872df-49d9-4bd8-a807-a162c6b65aa9"}}];
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