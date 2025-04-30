// Impor semua file gambar dari folder images
const imageModules = import.meta.glob('./*.{png,jpg,jpeg,svg}', { eager: true });

const images = {};

for (const path in imageModules) {
  const fileName = path.split('/').pop();
  images[fileName] = imageModules[path].default;
}

export default images;
