async function handleRequest(request) {
  // How to create a subscribe link and give it to the family with iSegaro
    const url = new URL(request.url);
    const provider = url.searchParams.get("subs");
  
    let links = [];
    if (provider === "IRC") {
      links = [
        'xxxxxx',
        'xxxxxx',
        'xxxxxx'
      ];
    } else if (provider === "MCI") {
        links = [
          'xxxxxx'
        ];
      }
  
    const responseText = links.join('\n').replace(/,(?=\n|$)/g, '');
  
    // Encoding the response text in base64
    const encodedResponse = btoa(responseText);

    return new Response(encodedResponse, {
      headers: { 'Content-Type': 'text/plain' },
    });
  }
  
  addEventListener('fetch', event => {
    event.respondWith(handleRequest(event.request));
  });
