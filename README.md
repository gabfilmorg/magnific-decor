# 👑 Magnific Decor - Navidad Magnífica

Sitio web responsivo para visualización de catálogos de decoraciones navideñas de lujo.

## 🎨 Nuevo Diseño Elegante

- **Colores:** Rojo navideño elegante, verde sofisticado y dorado brillante
- **Estilo:** Inspirado en packaging premium navideño
- **Tipografía:** Playfair Display + Inter para máxima elegancia

## 📁 Archivos Esenciales

- `index.html` - Página principal en español
- `styles.css` - Estilos con nueva paleta de colores
- `script.js` - JavaScript actualizado
- `imagens/` - Carpeta con las imágenes de las categorías

## 🚀 Deploy en GitHub Pages

### Paso a paso:

1. **Crear repositorio en GitHub:**
   - Nombre: `magnific-decor` (o cualquier nombre)
   - Público

2. **Subir archivos:**
   - Sube todos los archivos al repositorio
   - Mantén la estructura de carpetas

3. **Activar GitHub Pages:**
   - Ve a Settings → Pages
   - Source: Deploy from a branch
   - Branch: main
   - Folder: / (root)

4. **Acceder al sitio:**
   - URL: `https://tu-usuario.github.io/nombre-del-repositorio`

## 📱 Funcionalidades

- ✅ Diseño responsivo elegante
- ✅ Navegación entre categorías
- ✅ Visualización de imágenes en scroll vertical
- ✅ Sistema de fallback para imágenes no encontradas
- ✅ Estado vacío para categorías sin imágenes
- ✅ Colores inspirados en packaging navideño premium

## 🎯 Categorías Configuradas (16 categorías)

1. **Velas** ⏳ (listo para imágenes)
2. **Iluminación** ⏳ (listo para imágenes)  
3. **Soldaditos y Cascanueces** ⏳ (listo para imágenes)
4. **Farolitos y Bolas de Nieve** ⏳ (listo para imágenes)
5. **Mesa Puesta** ✅ (14 imágenes)
6. **Cajas** ⏳ (listo para imágenes)
7. **Árboles** ⏳ (listo para imágenes)
8. **Fundas para Almohadones** ⏳ (listo para imágenes)
9. **Bolas** ⏳ (listo para imágenes)
10. **Cintas** ⏳ (listo para imágenes)
11. **Acabados y Lazos** ⏳ (listo para imágenes)
12. **Ositos y Muñecos** ⏳ (listo para imágenes)
13. **Papá Noel** ⏳ (listo para imágenes)
14. **Colgantes y Decoración** ⏳ (listo para imágenes)
15. **Pesebres y Ángeles** ⏳ (listo para imágenes)
16. **Flores** ⏳ (listo para imágenes)

## 📝 Cómo Agregar Imágenes

1. Agrega las imágenes en las carpetas correspondientes en `imagens/`
2. Edita el archivo `script.js` en la sección `categories`
3. Agrega los nombres de los archivos en el array `images`

Ejemplo:
```javascript
'velas': {
    folder: 'VELAS',
    images: ['1.png', '2.png', '3.png'] // Agregar aquí
}
```

## 🎨 Paleta de Colores

```css
--christmas-red: #C41E3A    /* Rojo navideño elegante */
--deep-green: #0F4A2E       /* Verde escuro sofisticado */
--forest-green: #1B5E20     /* Verde floresta */
--gold: #FFD700             /* Dorado brillante */
--cream: #FFF8DC            /* Crema suave */
```

---

**Desarrollado para Magnific Decor - Navidad Magnífica 2025** 🎄✨


