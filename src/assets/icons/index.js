// Impor semua file icon dari folder icons
const iconModules = import.meta.glob('./*.{png,jpg,jpeg,svg}', { eager: true });

const icons = {};

for (const path in iconModules) {
  const fileName = path.split('/').pop();
  icons[fileName] = iconModules[path].default;
}

export default icons;
