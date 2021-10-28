export default async function CallApi( params ) {
  const {url, method, body, headers} = params;

  const urlWithParameter = url.includes( '?' ) 
    ? `${url}&api_key=${apiKey}` 
    : `${url}?api_key=${apiKey}`;

  try {
    const categories = await fetch( urlWithParameter, {
      method,
      body,
      headers,
    } );
    const json = await categories.json();
    return json.data;

  } catch (error) {
    console.log(error);
    Promise.reject('Error in call API');
  }
}

export const apiKey = 'GlMwUSlVlhmxP9d9XEFjSFyUfo8OzYu2' 