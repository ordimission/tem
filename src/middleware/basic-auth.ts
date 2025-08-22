import type { MiddlewareHandler } from 'astro';

const BASIC_AUTH_USER = 'gedeon';
const BASIC_AUTH_PASS = 'Parole777';

function unauthorized() {
  return new Response('Authentification requise', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="Espace protégé"'
    }
  });
}

export const onRequest: MiddlewareHandler = ({ request }) => {
  const auth = request.headers.get('authorization');

  if (!auth) {
    return unauthorized();
  }

  const [scheme, encoded] = auth.split(' ');

  if (scheme !== 'Basic' || !encoded) {
    return unauthorized();
  }

  const decoded = atob(encoded);
  const [user, pass] = decoded.split(':');

  if (user === BASIC_AUTH_USER && pass === BASIC_AUTH_PASS) {
    return; // accès autorisé, continue la requête
  }

  return unauthorized();
};
