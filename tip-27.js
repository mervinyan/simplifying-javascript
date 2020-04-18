const firms = new Map()
  .set(10, 'Ivie Group')
  .set(23, 'sounscaping Source')
  .set(31, 'Big 6');

for (const firm of firms) {
  const [id, name ] = firm;
  console.log(id, name);
}