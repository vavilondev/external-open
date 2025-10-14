// index.js
// Node.js minimal server: direct 302, landing with JS and bridge 302
// Start: node index.js
const http = require('http');
const url = require('url');

const PORT = process.env.PORT || 3000;
const FINAL = process.env.FINAL_URL || 'https://claritycheck.com/';

// "clean" redirect headers to maximize chance IG hands off to Safari
const REDIRECT_HEADERS = {
  'Content-Length': '0',
  'Cache-Control': 'no-store, no-cache, must-revalidate, max-age=0',
  'Pragma': 'no-cache',
  'Connection': 'close',
  'Referrer-Policy': 'no-referrer',
  'X-Content-Type-Options': 'nosniff'
};

function send302(res, location, status = 302) {
  res.writeHead(status, Object.assign({ Location: location }, REDIRECT_HEADERS));
  res.end();
}

function landingHtml(final) {
  return `<!doctype html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Redirect landing</title></head>
<body style="font-family:system-ui, -apple-system, Arial;display:flex;align-items:center;justify-content:center;height:100vh">
  <div style="text-align:center;max-width:480px;padding:20px">
    <h2>Opening...</h2>
    <p>If automatic redirect does not open external browser, use the button below.</p>
    <a id="btn" href="${final}" target="_blank" rel="noopener noreferrer" style="display:none;padding:10px 14px;border-radius:8px;background:#0366d6;color:#fff;text-decoration:none">Open in browser</a>
  </div>
<script>
(function(){
  function platform(){var ua=navigator.userAgent||navigator.vendor||'', p=navigator.platform||''; if(/iPhone|iPad|iPod/.test(p)) return 'ios'; if(/Android/.test(ua)) return 'android'; return 'other';}
  function tryOpen(target){
    try{ window.open(target,'_blank','noopener,noreferrer'); }catch(e){}
    setTimeout(function(){
      // fallback: go via bridge endpoint which returns a clean 302
      try { window.location.href = '/bridge?to=' + encodeURIComponent(target); } catch(e) { document.getElementById('btn').style.display = 'inline-block'; }
    }, 120);
  }
  window.addEventListener('load', function(){
    var params = new URLSearchParams(window.location.search);
    var force = params.get('bb') === 'true' || params.get('open') === 'true';
    var target = '${final}';
    // if no forcing param, still try but show fallback
    if(force) {
      tryOpen(target);
    } else {
      // try anyway after tiny delay (best-effort)
      setTimeout(function(){ tryOpen(target); }, 180);
    }
    // show fallback button after 2s
    setTimeout(function(){ document.getElementById('btn').style.display = 'inline-block'; }, 2000);
  });
})();
</script>
</body>
</html>`;
}

const server = http.createServer((req, res) => {
  const parsed = url.parse(req.url, true);
  const p = parsed.pathname || '/';

  // Direct start: immediately 302 to FINAL (simple, often enough)
  if (p === '/' || p === '/start') {
    // Direct server-side redirect to claritycheck
    send302(res, FINAL, 302);
    return;
  }

  // Landing: client-side attempt with window.open + fallback to /bridge
  if (p === '/landing') {
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8', 'Cache-Control': 'no-store, no-cache, must-revalidate, max-age=0'});
    res.end(landingHtml(FINAL));
    return;
  }

  // Bridge endpoint: returns clean 302 Location to the "to" param (validate-ish)
  if (p === '/bridge' || p === '/redirect.php') {
    const to = parsed.query && parsed.query.to ? parsed.query.to : FINAL;
    // basic validation: allow only https targets; otherwise use FINAL
    if (!/^https:\/\//i.test(to)) {
      send302(res, FINAL);
      return;
    }
    send302(res, to, 302);
    return;
  }

  // fallback info
  res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
  res.end('OK. Use / (direct 302) or /landing?bb=true (client attempt) or /bridge?to=<url> (bridge redirect)');
});

server.listen(PORT, () => {
  console.log('Server listening on port', PORT);
  console.log('Direct URL: http://localhost:' + PORT + '/ (302 -> ' + FINAL + ')');
  console.log('Landing: http://localhost:' + PORT + '/landing?bb=true  (JS attempts external)');
  console.log('Bridge: http://localhost:' + PORT + '/bridge?to=' + encodeURIComponent(FINAL));
});
