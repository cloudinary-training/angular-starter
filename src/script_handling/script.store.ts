interface Scripts {
    name: string;
    src: string;
}  
export const ScriptStore: Scripts[] = [
    {name: 'cloudinary-core', src: 'https://unpkg.com/cloudinary-core@2.10.3/cloudinary-core-shrinkwrap.min.js'},
    {name: 'cld-video-player', src: 'https://unpkg.com/cloudinary-video-player@1.4.3/dist/cld-video-player.min.js'},
    {name: 'cld-media-library', src: 'https://media-library.cloudinary.com/global/all.js'},
    {name: 'cld-product-gallery', src: 'https://product-gallery.cloudinary.com/all.js'}
];