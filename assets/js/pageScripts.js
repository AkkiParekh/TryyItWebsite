<script type='application/ld+json'>
    {
        "@context" : "http:\/\/schema.org",
        "@type"    : "WebSite",
        "@id"      : "#website",
        "url"      : "https:\/\/www.brring.com\/",
        "name"     : "Brring",
        "potentialAction" : {
            "@type"       : "SearchAction",
            "target"      : "https:\/\/www.brring.com\/?s={search_term_string}",
            "query-input" : "required name=search_term_string"
        }
    }
</script>


 <script type='application/ld+json'>
    {
        "@context":"http:\/\/schema.org",
        "@type":"Organization",
        "url":"https:\/\/www.brring.com\/",
        "sameAs":[
            "https:\/\/www.facebook.com\/BoxPeg\/",
            "https:\/\/www.linkedin.com\/company-beta\/11183009\/",
            "https:\/\/twitter.com\/boxpeg"
        ],
        "@id":"#organization",
        "name":"tryyIt",
        "logo":""
    }
</script>

<script>
    if (document.location.protocol != "https:") {
        document.location = document.URL.replace(/^http:/i, "https:");
    }
</script>


<script>
    !function() {
        var t;
        if (t = window.driftt = window.drift = window.driftt || [], !t.init) return t.invoked ? void(window.console && console.error && console.error("Drift snippet included twice.")) : (t.invoked = !0, t.methods = ["identify", "config", "track", "reset", "debug", "show", "ping", "page", "hide", "off", "on"], t.factory = function(e) {
            return function() {
                var n;
                return n = Array.prototype.slice.call(arguments), n.unshift(e), t.push(n), t;
            };
        }, t.methods.forEach(function(e) {
            t[e] = t.factory(e);
        }), t.load = function(t) {
            var e, n, o, i;
            e = 3e5, i = Math.ceil(new Date() / e) * e, o = document.createElement("script"), o.type = "text/javascript", o.async = !0, o.crossorigin = "anonymous", o.src = "https://js.driftt.com/include/" + i + "/" + t + ".js", n = document.getElementsByTagName("script")[0], n.parentNode.insertBefore(o, n);
        });
    }();
    drift.SNIPPET_VERSION = '0.3.1';
    drift.load('pec88xifu8ew');
</script>
<script>
    var _prum = [
        ['id', '59999ca7602da628be0be6f6'],
        ['mark', 'firstbyte', (new Date()).getTime()]
    ];
    (function() {
        var s = document.getElementsByTagName('script')[0],
            p = document.createElement('script');
        p.async = 'async';
        p.src = '//rum-static.pingdom.net/prum.min.js';
        s.parentNode.insertBefore(p, s);
    })();
</script>
<script>
    window.ga = window.ga || function() {
        (ga.q = ga.q || []).push(arguments)
    };
    ga.l = +new Date;
    ga('create', 'UA-104624765-1', 'auto');
    ga('send', 'pageview');
</script>

 <script type="text/javascript">
    (function() {
        function addEventListener(element, event, handler) {
            if (element.addEventListener) {
                element.addEventListener(event, handler, false);
            } else if (element.attachEvent) {
                element.attachEvent('on' + event, handler);
            }
        }

        function maybePrefixUrlField() {
            if (this.value.trim() !== '' && this.value.indexOf('http') !== 0) {
                this.value = "http://" + this.value;
            }
        }
        var urlFields = document.querySelectorAll('.mc4wp-form input[type="url"]');
        if (urlFields && urlFields.length > 0) {
            for (var j = 0; j < urlFields.length; j++) {
                addEventListener(urlFields[j], 'blur', maybePrefixUrlField);
            }
        }
        var testInput = document.createElement('input');
        testInput.setAttribute('type', 'date');
        if (testInput.type !== 'date') {
            var dateFields = document.querySelectorAll('.mc4wp-form input[type="date"]');
            for (var i = 0; i < dateFields.length; i++) {
                if (!dateFields[i].placeholder) {
                    dateFields[i].placeholder = 'YYYY-MM-DD';
                }
                if (!dateFields[i].pattern) {
                    dateFields[i].pattern = '[0-9]{4}-(0[1-9]|1[012])-(0[1-9]|1[0-9]|2[0-9]|3[01])';
                }
            }
        }
    })();
</script>
<script type='text/javascript'>
    var wpcf7 = {
        "apiSettings": {
            "root": "https:\/\/www.brring.com\/wp-json\/contact-form-7\/v1",
            "namespace": "contact-form-7\/v1"
        },
        "recaptcha": {
            "messages": {
                "empty": "Please verify that you are not a robot."
            }
        },
        "cached": "1"
    };
</script>
<script type='text/javascript'>
    var mc4wp_forms_config = [];
</script>