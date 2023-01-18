/**@type {import('./$types').PageLoad} */
// @ts-ignore
export function load({ params }) {
  return {
    props: {
      id: params.slug,
    },
  };
}
