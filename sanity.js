import SanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

const client = SanityClient({
  projectId: '8mgu34k7',
  dataset: 'production',
  apiVersion: '2024-03-16',
});

const builder = imageUrlBuilder(client);

export const urlFor = source => builder.image(source);

export default client;
